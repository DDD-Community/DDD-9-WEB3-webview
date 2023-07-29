// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { ISignInApiRequest, ISignInReq, ISignInResult } from '@pages/api/auth/model';
// import { apiUrl } from '@pages/api/utils';
// import axios, { AxiosResponse } from 'axios';
// import type { NextApiResponse } from 'next'
//
// export default async function handler(
//   req: ISignInApiRequest,
//   res: NextApiResponse<string | { error: any}>
// ) {
//   try {
//     const { refreshToken } = req.cookies;
//     res.statusCode = 200;
//     res.setHeader(
//       'Set-Cookie',
//       `refreshToken=; Path=/; Expires=${new Date(
//         Date.now() - 1,
//       ).toUTCString()}; HttpOnly`,
//     );
//     if (refreshToken) {
//       return res.send('로그아웃 완료');
//     }
//     return res.send('이미 로그아웃 되었습니다.');
//   } catch (err) {
//     res.status(500).json({error: err})
//   }
// }
