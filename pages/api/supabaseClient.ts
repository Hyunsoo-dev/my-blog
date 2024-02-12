import type { NextApiRequest, NextApiResponse } from 'next';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// console.log('supabaseUrl: ', supabaseUrl);
	// console.log('supabaseKey :', supabaseKey);
	// console.log('request ', req.body.data);
	const { title, text } = req.body.data;
	console.log('title:', title, 'text: ', text);
	const response = await supabase.from('posts').insert([{ id: 1, title, text }]);
	console.log('response ', response);
}
