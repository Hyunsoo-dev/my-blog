import type { NextApiRequest, NextApiResponse } from 'next';
import { PostTypes } from '@/type';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

interface ExtendedNextApiRequest extends NextApiRequest {
	body: {
		title?: string;
		text?: string;
	};
	method: 'POST' | 'GET';
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse<PostTypes[]>) {
	console.log('req.method: ', req.method);
	if (req.method === 'POST') {
		// 글 작성
		const { title, text } = req.body;
		const response = await supabase.from('posts').insert([{ title, text }]);
	}

	if (req.method === 'GET') {
		const response = await supabase.from('posts').select();
		// console.log('response: ', response);
		res.status(response.status).json(response.data);
		return response;
	}
}
