import { IFacebookAccount, IAuthFacebook, IFacebookAuthResponse } from '@components/auth/auth-facebook/model';
import { GoogleAccount, GoogleOAuthResponse, IAuthGoogle } from '@components/auth/auth-google/model';
import { GoogleButton } from '@components/auth/auth-google/styled';
import { ButtonSns } from '@components/button';
import ButtonIcon from '@components/button-icon';
import { ButtonIconSize } from '@components/button-icon/model';
import { ButtonSize } from '@components/button/model';
import Script from 'next/script';
import React, { useCallback } from 'react';

declare const FB: IFacebookAccount;
declare let fbAsyncInit: any;

const AuthFacebook = ({ onFacebookLoggedIn }: IAuthFacebook) => {
  const handlerFBLogin = () => {
    FB.login((response: IFacebookAuthResponse) => {
      if (response.status === 'connected') {
        onFacebookLoggedIn(response)
      }
      FB.api('/me', function(userResponse) {
        console.log('user', userResponse);
      });

      FB.getLoginStatus(function(statusResponse) {
        console.log('status', statusResponse);
      });

      FB.logout(function(logoutResponse) {
        console.log('logout', logoutResponse)
      });
    }, {
      scope: 'public_profile,email',
      auth_type: 'rerequest'
    })
  }


  const onScriptLoad = useCallback(() => {
    console.log('script load')
    FB.init({
      appId: 1357381388531829,
      cookie: false,
      xfbml: true,
      version: process.env.NEXT_PUBLIC_FACEBOOK_APP_VERSION
    });
  }, [])

  return (
    <>
      <ButtonSns buttonSize={ButtonSize.fill}
                 LeftComponent={<ButtonIcon size={ButtonIconSize.small} name={'facebook'} />} onClick={handlerFBLogin}>
        Sign in with Facebook
      </ButtonSns>
      <Script src={process.env.NEXT_PUBLIC_FACEBOOK_SDK}
              strategy="afterInteractive"
              onLoad={onScriptLoad} />
    </>
  )
}

export default AuthFacebook;
