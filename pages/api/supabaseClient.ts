import type { NextApiRequest, NextApiResponse } from 'next';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

interface ExtendedNextApiRequest extends NextApiRequest {
	body: {
		data: {
			title?: string;
			text?: string;
		};
	};
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
	const { title, text } = req.body.data;
	const response = await supabase.from('posts').insert([{ title, text }]);
}
