import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import Layout from '../component/layout/layout';

const inter = Inter({ subsets: ['latin'] });
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
		<main className={`${inter.className}`}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</main>
	);
}
