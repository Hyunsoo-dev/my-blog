import MarkDownComponent from '../../component/markdown/markdown';
import Header from '../../ui/write/header';
import Footer from '@/ui/write/footer';
import MarkDownEditorLayout from '@/component/layout/markdownEditorLayout';
import { useState } from 'react';
import { setPosts } from '@/util/apis';
export default function Write() {
	const [title, setTitle] = useState('');
	const [text, setText] = useState<string | undefined>('');

	const onClickWriteButton = () => {
		setPosts(title, text);
	};
	// TODO
	// title, text를 입력 후 글 작성 버튼을 누르면 supabase에 저장하는 로직 추가

	return (
		<MarkDownEditorLayout>
			<main className="w-full h-full">
				<Header title={title} setTitle={setTitle} />
				<MarkDownComponent text={text} setText={setText} />
				<Footer onClickWriteButton={onClickWriteButton} />
			</main>
		</MarkDownEditorLayout>
	);
}
