export interface GoogleAccount {
  accounts: {
    id: {
      signOut?: any;
      renderButton: any;
      prompt: any;
      initialize: (p: {
        client_id: string;
        auto_prompt?: boolean;
        callback: ((d: GoogleOAuthResponse) => void)
      }) => any
    };
    oauth2: any; // google.accounts.oauth2 => namespace 가져오기
  };
}

export interface GoogleOAuthResponse {
  clientId: string;
  client_id: string;
  credential: string;
  select_by: string;
}


export interface IAuthGoogle {
  onGoogleLoggedIn: (r: GoogleOAuthResponse) => void
}
