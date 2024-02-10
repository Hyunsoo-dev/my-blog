import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then(mod => mod.default), { ssr: false });

export default function MarkDownComponent() {
	const [value, setValue] = useState<string | undefined>('');

	return (
		<main className="w-full h-[85%]">
			<MDEditor style={{ borderRadius: '8px', minHeight: '100%' }} className="w-full rounded-md" value={value} onChange={setValue} />
		</main>
	);
}
