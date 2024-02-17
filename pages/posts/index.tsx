import Layout from '@/component/layout/layout';
import { useState, useEffect } from 'react';
import { getAllPosts } from '@/util/apis';
import { PostTypes } from '@/type';
import Header from '@/ui/posts/header';
import Body from '@/ui/posts/body';

export default function Posts() {
	const [posts, setPosts] = useState<PostTypes[] | undefined>();
	useEffect(() => {
		async function getData() {
			const response = await getAllPosts();
			console.log('posts response: ', response);
			setPosts(response.data);
		}
		getData();
	}, []);
	return (
		<Layout>
			<main className="text-lg h-full bg-green-300">
				<Header />
				<Body posts={posts} />
			</main>
		</Layout>
	);
}
