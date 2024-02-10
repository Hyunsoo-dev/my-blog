import Link from 'next/link';

const navlinks: { title: string; link: string }[] = [
	{ title: 'Home', link: '/' },
	{ title: 'Blog', link: '/blog' },
	{ title: 'Write', link: '/write' },
];

interface NavProps {
	type: 'toggle' | 'normal';
	onClick?: () => void;
}

export default function Nav({ type, onClick }: NavProps) {
	return (
		<main>
			{navlinks.map(item => {
				const { title, link } = item;
				return (
					<Link href={link} key={title} onClick={onClick && onClick} className="m-2 text-sm">
						{title}
					</Link>
				);
			})}
		</main>
	);
}

Nav.defaultProps = {
	onClick: () => {},
};
