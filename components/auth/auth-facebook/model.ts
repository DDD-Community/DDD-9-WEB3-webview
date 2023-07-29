export interface IFacebookAccount {
  login: (r: any, o?: any) => any;
  init: (r: any) => any;
  api: (url: any, c: (r: any)=> void) => void;
  getLoginStatus: (c: (r: any)=> void) => void;
  logout: (c: (r: any)=> void) => void;
}

export interface IFacebookAuthResponse {
  authResponse: {
    accessToken: string;
    data_access_expiration_time: number;
    expiresIn: number;
    graphDomain: string
    signedRequest: string;
    userID: string;
  };
  status: string;
}


export interface IAuthFacebook {
  onFacebookLoggedIn: (r: any) => void
}
