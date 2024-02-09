import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import Layout from '../component/layout/layout';

const inter = Inter({ subsets: ['latin'] });
const nanum = localFont({
	src: [
		{
			path: '../public/font/NanumSquareNeo-Variable.ttf',
			weight: 'bold',
		},
	],
});
// const bmJua = localFont({
// 	src: [
// 		{
// 			path: '../public/font/BMJUA.otf',
// 			weight: 'normal',
// 		},
// 	],
// });
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${nanum.className}`}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</main>
	);
}
