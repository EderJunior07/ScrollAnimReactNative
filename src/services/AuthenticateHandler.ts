import {authorize, refresh} from 'react-native-app-auth';

const spotifyAuthConfig = {
  clientId: '81604823a2554c11b6faa37fe2487085',
  clientSecret: '3725df6e05224baaa9902de3ad5a116a',
  redirectUrl: 'com.seuapp://oauthredirect',
  scopes: [
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

const onLogin = async () => {
  try {
    const result = await authorize(spotifyAuthConfig);
    console.log('Spotify Result: ', result);
    return result;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export const refreshLogin = async (refreshToken: string) => {
  const result = await refresh(spotifyAuthConfig, {
    refreshToken: refreshToken,
  });
  return result;
};

export default onLogin;
