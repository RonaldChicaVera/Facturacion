import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import TranslationProvider from '@core/providers/i18n/translation-provider';

import LoginButton from '@shared/components/commons/buttons/LoginButton';
import LogoutButton from '@shared/components/commons/buttons/LogOutButton';

import Profile from '@modules/profile/Profile';

import './App.css';

function App(): React.ReactElement {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default TranslationProvider(App);
