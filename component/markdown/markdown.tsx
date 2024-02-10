import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then(mod => mod.default), { ssr: false });

interface MarkDownComponentProps {
	text: string | undefined;
	setText: (value?: string | undefined) => void;
}

export default function MarkDownComponent(props: MarkDownComponentProps) {
	return (
		<main className="w-full h-[85%]">
			<MDEditor style={{ borderRadius: '8px', minHeight: '100%' }} className="w-full rounded-md" value={props.text} onChange={props.setText} />
		</main>
	);
}
