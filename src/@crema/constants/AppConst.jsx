export const authRole = {
  Admin: ['admin', 'user'],
  User: ['user'],
};

export const defaultUser = {
  displayName: 'John Alex',
  email: 'demo@example.com',
  token: 'access-token',
  role: 'user',
  photoURL: '/assets/images/avatar/A11.jpg',
};
export const allowMultiLanguage = import.meta.env.VITE__MULTILINGUAL === 'true';
export const fileStackKey = import.meta.env.VITE__FILESTACK_KEY;
export const initialUrl = import.meta.env.VITE__INITIAL_URL; // this url will open after login
