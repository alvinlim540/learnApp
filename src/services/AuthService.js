import { client } from './client';

const checkUserLoggedIn = async () => {
  try {
    const result = await client.get('/isLoggedIn');
    return result;
  } catch (err) {
    // Put in extra error handling code if you have, if not just rethrow it
    throw err;
  }
};

const login = async (username, password) => {
  try {
    const result = await client.post('/login', {
      username,
      password,
    });
    return result;
  } catch (err) {
    // Put in extra error handling code if you have, if not just rethrow it
    throw err;
  }
};

const logout = async () => {
  try {
    const result = await client.post('/logout');
    return result;
  } catch (err) {
    // Put in extra error handling code if you have, if not just rethrow it
    throw err;
  }
};

export { checkUserLoggedIn, login, logout };
