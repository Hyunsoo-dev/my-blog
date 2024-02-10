import MarkDownComponent from '../../component/markdown/markdown';
import Header from '../../ui/write/header';
import Footer from '@/ui/write/footer';
import MarkDownEditorLayout from '@/component/layout/markdownEditorLayout';
import { useState } from 'react';

export default function Write() {
	const [title, setTitle] = useState('');
	const [text, setText] = useState<string | undefined>('');

	// TODO
	// title, text를 입력 후 글 작성 버튼을 누르면 supabase에 저장하는 로직 추가

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
