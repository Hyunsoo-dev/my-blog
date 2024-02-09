import Head from 'next/head';
import Nav from '../nav/nav';

export default function Header() {
	return (
		<main className="w-full flex justify-center">
			<Head>
				<title>Eddie Blog</title>
			</Head>
			<header className="md:max-w-[768px] h-20 flex items-center justify-between bg-red-300 w-full px-1">
				<div className="text-2xl font-bold">Eddie Blog</div>
				<Nav type="toggle" />
			</header>
		</main>
	);
}
