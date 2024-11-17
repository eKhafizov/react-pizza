
const API_KEY = 'api_key_hs28SZAf';

export const getToken = () => {
  return localStorage.getItem(API_KEY)
};
export const saveToken = (token : string) => {
  localStorage.setItem(API_KEY, token)
};
export const dropToken = () => {
  localStorage.removeItem(API_KEY)
}
