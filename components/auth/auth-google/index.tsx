import { GoogleAccount, GoogleOAuthResponse, IAuthGoogle } from '@components/auth/auth-google/model';
import { GoogleButton } from '@components/auth/auth-google/styled';
import { ButtonSns } from '@components/button';
import ButtonIcon from '@components/button-icon';
import { ButtonIconSize } from '@components/button-icon/model';
import { ButtonSize } from '@components/button/model';
import Script from 'next/script';
import React, { useCallback } from 'react';

declare const google: GoogleAccount;

const AuthGoogle = ({ onGoogleLoggedIn }: IAuthGoogle) => {
  const handleCredentialResponse = (response: GoogleOAuthResponse) => {
    onGoogleLoggedIn(response)
  }
  const onScriptLoad = useCallback(() => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("googleButton"),
      { theme: "outline", size: "large" }
    );
  }, [])


  return (
    <>
      <ButtonSns buttonSize={ButtonSize.fill}
                 LeftComponent={<ButtonIcon size={ButtonIconSize.small} name={'google'} />}>
        Sign in with Google
        <GoogleButton id={'googleButton'}></GoogleButton>
      </ButtonSns>
      <Script src={process.env.NEXT_PUBLIC_GOOGLE_GSI}
              strategy="afterInteractive"
              onLoad={onScriptLoad} />
    </>
  )
}

export default AuthGoogle;
