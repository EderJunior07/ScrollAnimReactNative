import React from 'react';
import Routes from './routes';
import moment from 'moment';
import 'moment/min/locales';
import {AuthProvider} from './contexts/auth';
const App = () => {
  moment.locale('pt-br');

  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
