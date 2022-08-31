const setCookie = (value) => {
    const exp = (new Date(Date.now() + 15 * 60 * 1000)).toUTCString();
    document.cookie = `token=${value}; expires=${exp}`;
  }
  export default setCookie;
