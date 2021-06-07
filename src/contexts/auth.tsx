import React, {createContext, useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import onLogin, * as auth from '../services/AuthenticateHandler';

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}: any) => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     async function loadStorageData() {
  //       const storageUser = await AsyncStorage.getItem('@RNAuth:user');
  //       const storageToken = await AsyncStorage.getItem('@RNAuth:token');

  //       if (storageUser && storageToken) {
  //         setUser(JSON.parse(storageUser));
  //         setLoading(false);
  //       } else if (!storageUser && !storageToken) {
  //         setLoading(false);
  //       }
  //     }

  //     loadStorageData();
  //   }, []);

  const signIn = async () => {
    const response = await onLogin();
    setUser(response);

    // await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    // await AsyncStorage.setItem('@RNAuth:token', response.token);
  };

  //   function signOut() {
  //     // AsyncStorage.clear().then(() => {
  //     //     setUser(null);
  //     // });
  //   }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
