export const authRole = {
  Admin: ['admin'],
  User: ['user'],
};

export const defaultUser = {
  displayName: 'John Alex',
  email: 'demo@example.com',
  token: 'access-token',
  role: 'user',
  photoURL: '/assets/images/avatar/A11.jpg',
};
export const allowMultiLanguage = process.env.NX_MULTILINGUAL === 'true';
export const fileStackKey = process.env.NX_FILESTACK_KEY;
export const initialUrl = process.env.NX_INITIAL_URL; // this url will open after login
