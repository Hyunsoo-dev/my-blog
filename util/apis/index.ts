import axios from 'axios';

export async function setPosts(title: string, text: string | undefined) {
	await axios.post('http://localhost:3000/api/supabaseClient', {
		data: {
			title,
			text,
		},
	});
}
