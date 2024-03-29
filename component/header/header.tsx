import Head from 'next/head';
import Nav from '../nav/nav';

export default function Header() {
	return (
		<main className="w-full flex justify-center h-[10%]">
			<Head>
				<title>Eddie Blog</title>
			</Head>
			<header className="md:max-w-[768px] flex items-center justify-between w-full px-1">
				<div className="text-2xl font-bold">Eddie Blog</div>
				<Nav type="toggle" />
			</header>
		</main>
	);
}
