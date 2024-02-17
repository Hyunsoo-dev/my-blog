import { PostTypes } from '@/type';

interface CardProps {
	post: PostTypes;
}
export default function Card(props: CardProps) {
	return (
		<main
			className={
				'grid grid-cols-12 w-full h-64 bg-indigo-600 mb-10 rounded-md shadow-md shadow-indigo-400'
			}>
			<div className={'col-span-9 bg-blue-300'}>
				<div className={'h-[40%]'}>{props.post.title}</div>
				<div className={'h-[60%]'}>
					<div className={'h-[70%]'}>{props.post.text}</div>
					<div className={'h-[30%]'}>time stamp</div>
				</div>
			</div>
			<div className={'col-span-3 bg-yellow-300'}></div>
		</main>
	);
}
