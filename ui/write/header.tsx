import { Input } from 'antd';
export default function Header() {
	return (
		<main className="w-full h-[10%]">
			<input type="text" className="text-3xl text-black w-full h-full p-2" placeholder="제목을 입력하세요" />
		</main>
	);
}
