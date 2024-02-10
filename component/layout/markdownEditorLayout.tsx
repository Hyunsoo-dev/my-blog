interface LayoutProps {
	children: React.ReactNode;
}
export default function MarkDownEditorLayout({ children }: LayoutProps) {
	return <main className="w-full h-screen">{children}</main>;
}
