import MarkDownComponent from '../../component/markdown/markdown';
import Header from '../../ui/write/header';
import Footer from '@/ui/write/footer';
import MarkDownEditorLayout from '@/component/layout/markdownEditorLayout';
import { useState } from 'react';

export default function Write() {
	const [title, setTitle] = useState('');
	const [text, setText] = useState<string | undefined>('');

	return (
		<MarkDownEditorLayout>
			<main className="w-full h-full">
				<Header title={title} setTitle={setTitle} />
				<MarkDownComponent text={text} setText={setText} />
				<Footer />
			</main>
		</MarkDownEditorLayout>
	);
}
