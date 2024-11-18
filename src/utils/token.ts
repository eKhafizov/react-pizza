
const API_KEY = 'vue-work-auth-key';

export const getToken = () => {
  return localStorage.getItem(API_KEY)
};
export const saveToken = (token : string) => {
  return localStorage.setItem(API_KEY, token)
};
export const dropToken = () => {
  return localStorage.removeItem(API_KEY)
}
