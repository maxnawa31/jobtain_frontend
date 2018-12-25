export function getToken() {
  try {
    return localStorage.getItem('auth_token');
  } catch (err) {
    return {
      error: {
        message: 'There was a problem parsing the token',
      },
    };
  }
}

export function setToken(token) {
  try {
    localStorage.setItem('auth_token', token);
    return {};
  } catch (err) {
    return {
      error: {
        message: 'There was a problem parsing the token',
      },
    };
  }
}

export function clearToken() {
  try {
    localStorage.removeItem('auth_token');
  } catch (err) {
    return {
      error: {
        message: 'There was a problem logging outf',
      },
    };
  }
}

export function setId(id) {
  try {
    localStorage.setItem('id', id);
  } catch (error) {
    return {
      error: {
        message: 'Invalid id',
      },
    };
  }
}

export function getId() {
  try {
    return localStorage.getItem('id');
  } catch (error) {
    return {
      error: {
        message: 'No id',
      },
    };
  }
}
