// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IApiRequest, IResetPasswordReq } from '@pages/api/auth/model';
import { apiUrl } from '@pages/api/utils';
import axios, { AxiosResponse } from 'axios';
import type { NextApiResponse } from 'next'

export default async function handler(
  req: IApiRequest<IResetPasswordReq>,
  res: NextApiResponse<{statusCode: number} | { error: any}>
) {
  try {
    console.log('reset password', req.body)
    const { data } = await axios.put<any>(apiUrl('auth/reset-password'), req.body as IResetPasswordReq)
    console.log('reset password', data)

    res.status(200).json({statusCode: 200})
  } catch (err: any) {
    console.log('reset password err', err.response)
    res.status(500).json(err.response.data)
  }
}
