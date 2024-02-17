import axios from 'axios';

export async function setPost(title: string, text: string | undefined) {
	return await axios.post('http://localhost:3000/api/supabaseClient', {
		data: {
			title,
			text,
		},
	});
}

export async function getAllPosts() {}
