import Layout from '@/component/layout/layout';
import { useState, useEffect } from 'react';
import { getAllPosts } from '@/util/apis';
import { PostTypes } from '@/type';

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
			<main className="text-lg">
				{posts?.map((item: PostTypes, idx: number) => {
					return (
						<section key={item.id}>
							<div>{item.title}</div>
							<div>{item.text}</div>
						</section>
					);
				})}
			</main>
		</Layout>
	);
}
