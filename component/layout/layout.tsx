import Header from '../header/header';

interface LayoutProps {
	children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
	return (
		<main className="w-full h-full">
			<Header />
			<main className="w-ful flex justify-center">
				<div className="w-full md:max-w-[768px]">{children}</div>
			</main>
		</main>
	);
}
