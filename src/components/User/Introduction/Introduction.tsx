'use client';

import Image from 'next/image';
import { SafetyCertificateOutlined, ToolOutlined, TeamOutlined, ThunderboltOutlined, DollarCircleOutlined, CustomerServiceOutlined } from '@ant-design/icons';


const Introduction = () => {
	return (
		<div className="w-full">
			<div
				className="bg-cover bg-center relative h-[700px] w-full"
				style={{ backgroundImage: "url('/images/user/introduction/thucdon.jpg')" }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
					<h2 className="text-white text-3xl font-semibold mb-4 text-center">
						<span>Chào Mừng Quý Khách Đến Với</span> <br />
						<span>An Anh Catering</span>
					</h2>
					<div className="flex gap-4 mb-8">
						<button className="bg-white text-black py-2 px-6 rounded-full">Đặt cơm ngay</button>
						<a href="tel:0972650559" className="bg-blue-500 text-white py-2 px-6 rounded-full">0972.650.559</a>
                        <a href="tel:0916552537" className="bg-blue-500 text-white py-2 px-6 rounded-full">0916.552.537</a>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-none max-w-4xl mx-auto">
				<h3 className="text-xl font-semibold text-center mb-4">Giới Thiệu An Anh Catering</h3>
				<h3 className="text-xl font-semibold text-center mb-4 ">Tiên phong trong sứ mệnh phục vụ</h3>
				<p className="text-left text-gray-700">
					Tiên phong trong sứ mệnh phục vụ
					<br />1. Được thành lập trong năm 2011 bởi sở Kế hoạch đầu tư tỉnh Hải Dương.
					<br />2. Được cấp giấy chứng nhận cơ sở đủ điều kiện vệ sinh an toàn thực phẩm số: 196/2012ATTP-CN do Sở y tế tỉnh Hải Dương.
					<br />3. Được cấp giấy chứng nhận cam kết bảo vệ môi trường do Sở tài nguyên và môi trường tỉnh Hải Dương.
					<br />4. Đội ngũ nhân viên đông đảo, đội ngũ đầu bếp lành nghề giàu kinh nghiệm chế biến món ăn trong các nhà máy xí nghiệp, tiệc tất niên, tiệc ngoài trời, buffet,…
					<br />5. Đội ngũ nhân viên trẻ trung năng động luôn bảo đảm vệ sinh sạch sẽ, an toàn thực phẩm là phương châm, mục tiêu hàng đầu của chúng tôi.
					<br />6. Luôn lắng nghe ý kiến đóng góp của khách hàng để cho chất lượng dịch vụ ngày càng tốt hơn.
					<br />7. Bếp trưởng quản lý căng tin được đào tạo trong các trường nghiệp vụ hoặc có kinh nghiệm nhiều năm trong nghề.
					<br />8. Thực phẩm đầu vào được các bộ chuyên trách giám sát kỹ càng, có kiểm dịch động vật và gia cầm, nguồn gốc xuất xứ rõ ràng.
					<br />9. Tuân thủ nội quy, quy định của nhà máy nơi chúng tôi cung cấp dịch vụ.
					<br />10. Thái độ của nhân viên hoà nhã, lịch sự, cư xử đúng mực.
					<br />11. Thứ 7 hàng tuần sẽ có lịch tổng vệ sinh căng tin.
					<br />12. Có thể đảm nhiệm từ 5.000 đến 50.000 suất ăn/ngày.
					<br />13. Có thể nấu tại nhà máy hoặc đưa cơm hộp theo yêu cầu của khách hàng.
				</p>
				<div className="flex justify-between  mt-4 gap-4">
					<Image src="/images/logo.png" alt="Tiệc tại nhà" width={300} height={200} className="rounded-lg" />
					<Image src="/images/logo.png" alt="Tiệc công ty" width={300} height={200} className="rounded-lg" />
				</div>
				
				<div className="flex justify-between mt-10 w-full bg-blue-50 p-6 rounded-lg">
					<div className="w-1/2 p-4 text-center">
						<Image src="/images/logo.png" alt="Tầm nhìn" width={100} height={100} className="mx-auto mb-4 rounded-full" />
						<h4 className="font-semibold text-xl">Tầm nhìn</h4>
						<ul className="text-left list-disc list-inside mt-4 mx-auto max-w-[80%] space-y-2">
							<li>Phục vụ tận tâm: Chúng tôi hướng đến việc cung cấp dịch vụ cơm công nghiệp chất lượng cao, đảm bảo mỗi bữa ăn đều mang đến trải nghiệm ẩm thực đáng nhớ cho khách hàng.</li>
							<li>Mở rộng thị trường: An Anh Catering có kế hoạch mở rộng dịch vụ thêm các dịch vụ mới như đặt tiệc, cung cấp lương thực phẩm, mở rộng ra các tỉnh thành lân cận như Bình Dương, Tây Ninh, Long An và Đồng Nai, không chỉ giới hạn Tỉnh Hải Dương.</li>
							<li>Đổi mới và sáng tạo:  Chúng tôi luôn cập nhật và áp dụng những xu hướng ẩm thực mới nhất, mang đến cho khách hàng những thực đơn độc đáo và sáng tạo trong dịch vụ cơm công nghiệp.</li>
							<li>Phát triển bền vững: An Anh Catering chú trọng vào việc sử dụng nguyên liệu bền vững, giảm thiểu tác động đến môi trường, và đảm bảo sự công bằng trong mọi khía cạnh hoạt động kinh doanh.</li>
						</ul>
					</div>
					<div className="w-1/2 p-4 text-center">
						<Image src="/images/logo.png" alt="Sứ mệnh" width={100} height={100} className="mx-auto mb-4 rounded-full" />
						<h4 className="font-semibold text-xl">Sứ mệnh</h4>
						<ul className="text-left list-disc list-inside mt-4 mx-auto max-w-[80%] space-y-2">
							<li>Cam kết chất lượng: An Anh Catering luôn cam kết mang đến cho khách hàng những bữa ăn ngon miệng, bổ dưỡng , đảm bảo chất lượng trong từng khẩu phần ăn.</li>
							<li>Tạo dựng mối quan hệ: Chúng tôi chú trọng xây dựng và duy trì mối quan hệ lâu dài với khách hàng và đối tác dựa trên sự tin tưởng và tôn trọng lẫn nhau, cam kết đáp ứng tốt nhất nhu cầu của họ.</li>
							<li>Tăng cường cộng đồng: An Anh Catering không chỉ phục vụ các bữa ăn mà còn hướng đến các chương trình từ thiện, góp phần vào sự phát triển chung của cộng đồng.</li>
							<li>Khuyến khích đổi mới: Đổi mới và sáng tạo là giá trị cốt lõi của chúng tôi trong từng bữa ăn, với mục tiêu trở thành lựa chọn hàng đầu của khách hàng trong lĩnh vực dịch vụ cung cấp bữa ăn công nghiệp.</li>
						</ul>
					</div>
				</div>

				<div className="w-full mt-10 flex justify-center">
					<div className="max-w-4xl w-full text-center w-full bg-blue-50 p-6 rounded-lg shadow-lg">
						<p className="text-gray-500 font-medium mb-2">Lý do vì sao chọn An Anh Catering</p>
						<h2 className="text-2xl font-semibold mb-4">AN ANH CATERING MANG ĐẾN CHO BẠN TRẢI NGHIỆM RIÊNG BIỆT</h2>
						<p className="text-gray-700 mb-6">
							Khi đến với Anh Anh bạn sẽ có một bữa cơm thật chỉnh chu và ngon miệng. Đảm bảo bạn và khách mời sẽ hài lòng về dịch vụ của chúng tôi.
						</p>
						<div className="grid grid-cols-2 gap-4 text-left">
							<div className="flex items-start gap-4">
								<SafetyCertificateOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Nguồn nguyên liệu đảm bảo vệ sinh.</p>
							</div>
							<div className="flex items-start gap-4">
								<ToolOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Trang thiết bị mới và hiện đại.</p>
							</div>
							<div className="flex items-start gap-4">
								<TeamOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Đội ngũ nhân viên có chuyên môn cao.</p>
							</div>
							<div className="flex items-start gap-4">
								<ThunderboltOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Dịch vụ nhanh chóng và uy tín.</p>
							</div>
							<div className="flex items-start gap-4">
								<DollarCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Giá thành tốt nhất thị trường.</p>
							</div>
							<div className="flex items-start gap-4">
								<CustomerServiceOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Hỗ trợ nhanh chóng và nhiệt tình 24/7.</p>
							</div>
						</div>
						<button className="bg-blue-500 text-white py-2 px-6 rounded-full mt-6">ĐẶT DỊCH VỤ</button>
						<p className="text-gray-700 mt-4">Liên hệ: 0972.650.559 / 0916.552.537</p>
					</div>
				</div>

				<div className="w-full mt-10 flex justify-center">
					<div className="max-w-4xl w-full">
						<h2 className="text-2xl font-semibold text-center mb-6">Hình Ảnh Tiệc Thực Tế Của An Anh Catering</h2>
						<div className="grid grid-cols-4 gap-4">
							<Image src="/images/user/introduction/cty/cty1.jpg" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/cty/cty2.jpg" alt="Tiệc 2" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/cty/cty3.jpg" alt="Tiệc 3" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/cty/cty4.jpg" alt="Tiệc 4" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/cty/cty5.jpg" alt="Tiệc 5" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/cty/cty6.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/com/c9.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/com/c10.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/cty/cty7.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/cty/cty8.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/cty/cty9.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/com/c2.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/com/c3.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/com/c4.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/com/c6.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/com/c7.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/com/c8.jpg" alt="Tiệc 6" width={300} height={200} className="rounded-lg" />
						</div>
					</div>
				</div>

				<div className="w-full mt-10 flex justify-center">
					<div className="max-w-4xl w-full">
						<h2 className="text-2xl font-semibold text-center mb-6">Giấy Tờ Chứng Minh Năng Lực Hợp Đồng Công Ty</h2>
						<h3 className="text-2xl font-semibold text-center mb-6" > Bảo Hiểm Xuất Ăn</h3>
						<div className="grid grid-cols-5 gap-4">
							<Image src="/images/user/introduction/baohiem/BHXA1.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/baohiem/BHXA2.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/baohiem/BHXA3.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/baohiem/BHXA4.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/baohiem/BHXA5.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />

						</div>
						<h3 className="text-2xl font-semibold text-center mb-6" > Chứng Nhận Đạt ATTP</h3>
						<div className="grid grid-cols-1 gap-1">
							<Image src="/images/user/introduction/baohiem/CNATTP.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />

						</div>
						<h3 className="text-2xl font-semibold text-center mb-6" > Giấy Đăng Ký Kinh Doanh</h3>
						<div className="grid grid-cols-3 gap-4">
							<Image src="/images/user/introduction/baohiem/DKKD1.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/baohiem/DKKD2.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/baohiem/DKKD3.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />

						</div>
						<h3 className="text-2xl font-semibold text-center mb-6" > Phụ Lục Bảo Hiểm</h3>
						<div className="grid grid-cols-2 gap-4">
							<Image src="/images/user/introduction/baohiem/PLHD1.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />
							<Image src="/images/user/introduction/baohiem/PLHD2.png" alt="Tiệc 1" width={300} height={200} className="rounded-lg" />

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
