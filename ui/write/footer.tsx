import { useRouter } from 'next/router';

export default function Footer() {
	const router = useRouter();
	return (
		<main className="h-[5%] flex justify-end items-center">
			<button onClick={() => router.back()} className="w-24 bg-indigo-500 h-8 rounded mr-3 hover:bg-indigo-400">
				나가기
			</button>
			<button className="w-24 bg-indigo-500 h-8 rounded mr-5 hover:bg-indigo-400">글 작성</button>
		</main>
	);
}
