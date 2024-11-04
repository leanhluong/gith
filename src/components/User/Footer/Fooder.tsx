import React from 'react';
import Link from 'next/link';
import { FacebookOutlined, InstagramOutlined, TikTokOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6">
          <h3 className="text-lg font-semibold">Về chúng tôi</h3>
          <p className="mt-2 text-gray-400 ">
            Với thông điệp "Enjoy Happy Time" - An Anh Catering là lựa chọn hoàn hảo cho bữa tiệc của gia đình bạn để tận hưởng hạnh phúc trọn vẹn.
          </p>
          <div className="flex mt-4 space-x-4">
            <Link href="#"><FacebookOutlined className="text-gray-400 hover:text-white" /></Link>
            <Link href="#"><InstagramOutlined className="text-gray-400 hover:text-white" /></Link>
            <Link href="#"><TikTokOutlined className="text-gray-400 hover:text-white" /></Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-6">
          <h3 className="text-lg font-semibold">Liên hệ</h3>
          <p>Công ty TNHH MTV Đầu tư và dịch Vụ An Anh</p>
          <p><EnvironmentOutlined /> Thôn Thượng, Xã Bình Lãng, Huyện Tứ Kỳ, Tỉnh Hải Dương, Việt Nam</p>
          <p><PhoneOutlined /> 0972.650.559 - 0916.552.537</p>
          <p><MailOutlined /> info@.vn</p>
          <p><GlobalOutlined /> www.AnAnhCastering.vn</p>
        </div>

        <div className="w-full md:w-1/3 mb-6">
          <h3 className="text-lg font-semibold">Chính sách</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="#">Chính sách bảo mật</Link></li>
            <li><Link href="#">Điều khoản thỏa thuận</Link></li>
            <li><Link href="#">Quy chế hoạt động</Link></li>
            <li><Link href="#">Cơ chế giải quyết khiếu nại</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 bg-gradient-to-t from-black via-black/50 to-transparent py-4">
        <p className="text-gray-500">© 2024 An Anh Catering - Dịch Vụ Cơm Công Nghiệp 24h</p>
      </div>
    </footer>
  );
};
