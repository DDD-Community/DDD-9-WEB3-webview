// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IApiRequest, ISignResult, ISnsInReq } from '@pages/api/auth/model';
import { apiUrl } from '@pages/api/utils';
import axios from 'axios';
import type { NextApiResponse } from 'next'

export default async function handler(
  req: IApiRequest<ISnsInReq>,
  res: NextApiResponse<ISignResult | { error: any}>
) {
  try {
    console.log('sns start')
    const { data } = await axios.post<ISignResult>(apiUrl('auth/sso'), req.body as ISnsInReq)
    console.log('sns', data)

    res.setHeader(
      'Set-Cookie',
      `token=${data.token}; Path=/; Expires=${new Date(
        Date.now() + 60 * 60 * 24 * 1000 * 3,
      ).toUTCString()}; HttpOnly`,
    );

    res.status(200).json(data)
  } catch (err: any) {
    res.status(500).json(err.response.data)
  }
}
