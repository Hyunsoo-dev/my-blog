import Header from '../header/header';

interface LayoutProps {
	children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
	return (
		<main className="w-full h-full">
			<Header />
			<main className="w-full bg-blue-300 flex justify-center">
				<div className="w-full md:max-w-[768px] bg-green-300">{children}</div>
			</main>
		</main>
	);
}
