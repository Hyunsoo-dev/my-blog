import axios from 'axios';

export async function setPost(title: string, text: string | undefined) {
	return await axios.post('http://localhost:3000/api/supabaseClient', {
		title,
		text,
	});
}

export async function getAllPosts() {
	const response = await axios.get('http://localhost:3000/api/supabaseClient');
	console.log('response: ', response);

	return response;
}
