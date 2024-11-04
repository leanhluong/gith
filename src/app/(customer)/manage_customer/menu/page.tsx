"use client";
import React, { useState } from 'react';
import { Table, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
// import FoodSelectorModal from '../components/FoodSelectorModal';
import { useRouter } from 'next/navigation';
import FoodSelectorModal from '@/app/(headchef)/management_headchef/menu/components/FoodSelectorModal';

interface FoodItem {
    id: number;
    name: string;
}

interface SelectedCell {
    row: number | null;
    day: string;
}

dayjs.extend(isoWeek);

const FoodSelectorTable = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCell, setSelectedCell] = useState<SelectedCell>({ row: null, day: '' });
    const [selectedMenu, setSelectedMenu] = useState<{ [key: string]: FoodItem | null }>({});
    const [foodList, setFoodList] = useState<FoodItem[]>([
        { id: 1, name: 'Phở Bò' },
        { id: 2, name: 'Bún Bò' },
        { id: 3, name: 'Mì Quảng' },
        { id: 4, name: 'Cơm Tấm' },
        { id: 5, name: 'Gỏi Tôm' },
        { id: 6, name: 'Gỏi Cá' },
        { id: 7, name: 'Gỏi Thịt' },
        { id: 8, name: 'Gỏi Cuốn' },
    ]);
    const [filteredFoods, setFilteredFoods] = useState<FoodItem[]>(foodList);
    const [searchText, setSearchText] = useState('');
    const [note, setNote] = useState('');
    const [weekStart, setWeekStart] = useState(dayjs().startOf('isoWeek'));

    const rows = Array.from({ length: 5 }, (_, i) => i + 1);
    const days = Array.from({ length: 7 }, (_, i) =>
        weekStart.add(i, 'day').format('DD/MM')
    );

    const weekFormat = 'DD-MM-YYYY';
    const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
        `${dayjs(value).startOf('isoWeek').format(weekFormat)} ~ ${dayjs(value)
            .endOf('isoWeek')
            .format(weekFormat)}`;

    const handleWeekChange: DatePickerProps['onChange'] = (date) => {
        if (date) {
            setWeekStart(date.startOf('isoWeek'));
        }
    };

    const handleShowFoodList = (row: number, day: string) => {
        setSelectedCell({ row, day });
        setSearchText('');
        setFilteredFoods(foodList);
        setIsModalOpen(true);
    };

    const handleSelectFood = (food: FoodItem) => {
        const cellKey = `${selectedCell.row}-${selectedCell.day}`;
        setSelectedMenu((prev) => ({
            ...prev,
            [cellKey]: food,
        }));
        setIsModalOpen(false);
        setSearchText('');
    };

    const handleSearchFood = (value: string) => {
        setSearchText(value);
        setFilteredFoods(
            foodList.filter((food) =>
                food.name.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleAddNewFood = (foodName: string) => {
        if (foodName.trim()) {
            const newFood: FoodItem = {
                id: foodList.length + 1,
                name: foodName,
            };
            setFoodList((prev) => [...prev, newFood]);
            setFilteredFoods((prev) => [...prev, newFood]);
            handleSelectFood(newFood);
            setSearchText('');
        } else {
            message.error('Tên món ăn không được để trống!');
        }
    };

    const handleSubmit = async () => {
        try {
            await fetch('/api/save-menu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    menu: selectedMenu,
                    note,
                }),
            });
            message.success('Thực đơn đã được gửi thành công!');
        } catch (error) {
            message.error('Có lỗi xảy ra khi gửi thực đơn!');
        }
    };

    const dataSource = rows.map((row) => ({
        key: row,
        stt: row,
    }));

    const dayNames = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (text: number) => <span>{text}</span>,
        },
        ...days.map((day, index) => ({
            title: `${dayNames[index]} (${day})`,
            key: day,
            render: (_: any, record: { stt: number }) => {
                const cellKey = `${record.stt}-${day}`;
                return (
                    <Button
                        className="w-full h-full"
                        icon={<PlusOutlined />}
                        onClick={() => handleShowFoodList(record.stt, day)}
                    >
                        {selectedMenu[cellKey]?.name || 'Chọn món'}
                    </Button>
                );
            },
        })),
    ];

    return (
        <div className="p-4">
            <div className="flex justify-between mb-4">
                <div className="flex items-center">
                    <span className="text-lg font-semibold mr-2">Thực đơn</span>
                </div>
                <DatePicker
                    defaultValue={dayjs()}
                    format={customWeekStartEndFormat}
                    picker="week"
                    onChange={handleWeekChange}
                />
            </div>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                bordered
                className="mb-4"
            />

            <FoodSelectorModal
                isOpen={isModalOpen}
                foodList={filteredFoods}
                searchText={searchText}
                onCancel={() => setIsModalOpen(false)}
                onSearch={handleSearchFood}
                onSelectFood={handleSelectFood}
                onAddFood={handleAddNewFood}
            />
            <div className="mt-4 flex justify-center items-center space-x-4">
                <TextArea
                    placeholder="Ghi chú"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                    className="w-2/3 max-w-md"
                />
                <Button type="primary" onClick={handleSubmit} className="ml-4">
                    Xác nhận
                </Button>
            </div>
            <p className="text-center text-base font-semibold mb-2">
                Cảm ơn quý khách, chúc quý khách ngon miệng
            </p>
        </div>
    );
};

export default FoodSelectorTable;
