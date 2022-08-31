const cookieHandler = {
    getAll() {
      let object = {};
      const cookies = document.cookie.split('; ');
      cookies.forEach((cookie) => {
        const keyValueSplitted = cookie.split('=');
        object[keyValueSplitted[0]] = keyValueSplitted[1];
      });
      return object;
    },
    toSessionStorage() {
      const object = this.getAll();
      Object.entries(object).forEach(([key, value]) => {
        sessionStorage.setItem(key, value);
      });
    },
    flush() {
      const object = this.getAll();
      Object.keys(object).forEach((key) => {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
    },
  };
  
  export {cookieHandler} ;
