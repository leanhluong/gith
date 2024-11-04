import { Input, Modal, Button, message } from "antd"

interface FoodItem {
    id: number;
    name: string;
}

interface FoodSelectorModalProps {
    isOpen: boolean;
    foodList: FoodItem[];
    searchText: string;
    onCancel: () => void;
    onSearch: (value: string) => void;
    onSelectFood: (food: FoodItem) => void;
    onAddFood: (foodName: string) => void;
}
function FoodSelectorModal({
    isOpen,
    foodList,
    searchText,
    onCancel,
    onSearch,
    onSelectFood,
    onAddFood,
}: FoodSelectorModalProps) {
    return (
        <Modal
            title="Chọn Món Ăn"
            open={isOpen}
            onCancel={onCancel}
            footer={null}
        >
            <Input
                placeholder="Tìm kiếm món ăn"
                value={searchText}
                onChange={(e) => onSearch(e.target.value)}
                style={{ marginBottom: '1rem' }}
            />
            <div className="grid grid-cols-3 gap-2">
                {foodList.length > 0 ? (
                    foodList.map((food) => (
                        <Button
                            key={food.id}
                            className="w-full"
                            onClick={() => onSelectFood(food)}
                        >
                            {food.name}
                        </Button>
                    ))
                ) : (
                    <div className="text-center col-span-3">
                        <Button
                            type="primary"
                            className="w-full"
                            onClick={() => {
                                if (searchText.trim()) {
                                    onAddFood(searchText);
                                } else {
                                    message.error('Tên món ăn không được để trống!');
                                }
                            }}
                        >
                            Thêm món mới
                        </Button>
                    </div>
                )}
            </div>
        </Modal>

    );
}

export default FoodSelectorModal