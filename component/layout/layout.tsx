import Header from '../header/header';

interface LayoutProps {
	children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
	return (
		<main className="w-full h-screen">
			<Header />
			<main className="w-full h-[90%] flex justify-center">
				<div className="w-full h-full md:max-w-[768px]">{children}</div>
			</main>
		</main>
	);
}
