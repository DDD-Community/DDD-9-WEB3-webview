// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IApiRequest, ISignInReq, ISignResult } from '@pages/api/auth/model';
import { apiUrl } from '@pages/api/utils';
import axios, { AxiosResponse } from 'axios';
import type { NextApiResponse } from 'next'

export default async function handler(
  req: IApiRequest<ISignInReq>,
  res: NextApiResponse<ISignResult | { error: any}>
) {
  try {
    console.log('ISignInResult start')
    const { data } = await axios.post<ISignResult>(apiUrl('auth/sign-in'), req.body as ISignInReq)
    console.log('ISignInResult', data)

    const { token } = data;

    res.setHeader(
      'Set-Cookie',
      `token=${token}; Path=/; Expires=${new Date(
        Date.now() + 60 * 60 * 24 * 1000 * 3,
      ).toUTCString()}; HttpOnly`,
    );

    res.status(200).json(data)
  } catch (err: any) {
    res.status(500).json(err.response.data)
  }
}
