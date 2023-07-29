// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { apiUrl } from '@pages/api/utils';
import axios, { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type IHc = {
  hc?: boolean,
  error?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHc>
) {
  try {
    console.log('SERVER_URL', process.env.SERVER_API_URL)
    const result = await axios.get<boolean>(apiUrl('hc'))
    console.log('result', result.data)
    res.status(200).json({ hc: result.data })
  } catch (err) {
    res.status(500).json({error: err})
  }
}
