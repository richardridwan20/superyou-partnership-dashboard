// return the user data from the session storage
export const getUser = () => {
  return sessionStorage.getItem('user_key') || null;
}
 
// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('access_token') || null;
}
 
// remove the access_token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('user_key');
}
 
// set the access_token and user_key from the session storage
export const setUserSession = (access_token, user_key) => {
  sessionStorage.setItem('access_token', access_token);
  sessionStorage.setItem('user_key', user_key);
}