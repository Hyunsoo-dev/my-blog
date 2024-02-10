import { Input } from 'antd';

interface HeaderProps {
	title: string;
	setTitle: (value: string) => void;
}

export default function Header(props: HeaderProps) {
	return (
		<main className="w-full h-[10%]">
			<input
				type="text"
				className="text-3xl text-black w-full h-full p-2"
				placeholder="제목을 입력하세요"
				value={props.title}
				onChange={event => props.setTitle(event.target.value)}
			/>
		</main>
	);
}
