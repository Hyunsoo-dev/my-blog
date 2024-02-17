import { PostTypes } from '@/type';
import Card from '@/ui/posts/card';

interface BodyProps {
	posts: PostTypes[] | undefined;
}
export default function Body(props: BodyProps) {
	return (
		<main className={'w-full h-full bg-indigo-300'}>
			{props.posts?.map(item => {
				return <Card key={item.id} post={item} />;
			})}
		</main>
	);
}
