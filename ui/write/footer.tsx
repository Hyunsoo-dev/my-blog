import { useRouter } from 'next/router';

interface FooterProps {
	onClickWriteButton: () => void;
}
export default function Footer(props: FooterProps) {
	const router = useRouter();

	return (
		<main className="h-[5%] flex justify-end items-center">
			<button onClick={() => router.back()} className="w-24 bg-indigo-500 h-8 rounded mr-3 hover:bg-indigo-400">
				나가기
			</button>
			<button onClick={props.onClickWriteButton} className="w-24 bg-indigo-500 h-8 rounded mr-5 hover:bg-indigo-400">
				글 작성
			</button>
		</main>
	);
}
