import { TwitchOutlined, PhoneOutlined, FacebookOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function FloatingContactButtons() {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col space-y-4">
      
      <Link href="tel:+1234567890" passHref>
        <div className="bg-red-300 rounded-full shadow-lg p-2 hover:scale-110 transition-transform duration-200 cursor-pointer">
          <PhoneOutlined style={{ fontSize: '24px', color: '#4a90e2' }} />
        </div>
      </Link>

      <Link href="#" passHref>
        <div className="bg-blue-200 rounded-full shadow-lg p-2 hover:scale-110 transition-transform duration-200 cursor-pointer">
          <TwitchOutlined style={{ fontSize: '24px', color: '#4a90e2' }} />
        </div>
      </Link>

      <Link href="#" passHref>
        <div className="bg-blue-200 rounded-full shadow-lg p-2 hover:scale-110 transition-transform duration-200 cursor-pointer">
          <FacebookOutlined style={{ fontSize: '24px', color: '#0078FF' }} />
        </div>
      </Link>

    </div>
  );
}
