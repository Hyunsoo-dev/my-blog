import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const MarkdownViewer = dynamic(
	() =>
		import('@uiw/react-md-editor').then(mod => {
			return mod.default.Markdown;
		}),
	{ ssr: false },
);

export default function MarkDownViewer() {
	return <MarkDownViewer />;
}
