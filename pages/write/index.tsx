import MarkDownComponent from '../../component/markdown/markdown';
import Header from '../../ui/write/header';
import Footer from '@/ui/write/footer';
import MarkDownEditorLayout from '@/component/layout/markdownEditorLayout';
export default function Write() {
	return (
		<MarkDownEditorLayout>
			<main className="w-full h-full">
				<Header />
				<MarkDownComponent />
				<Footer />
			</main>
		</MarkDownEditorLayout>
	);
}
