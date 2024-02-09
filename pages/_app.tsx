import '@/styles/globals.css';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';

const bmJua = localFont({
	src: [
		{
			path: '../public/font/BMJUA.otf',
			weight: 'normal',
		},
	],
});
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${bmJua.className}`}>
			<Component {...pageProps} />
		</main>
	);
}
