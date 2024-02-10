import { Header, Body } from '../ui/home/index';
import Layout from '@/component/layout/layout';
export default function Home() {
	return (
		<Layout>
			<main className="text-lg">
				<Header />
				<Body />
			</main>
		</Layout>
	);
}
