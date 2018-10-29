export default (url) => {
  console.log(url);
  const headers = {
    method: 'DELETE',
  };
  return fetch(url, headers)
      .then((response) => {
        console.log(response);
        if (response.status >= 400) {
          // throw new Error(response.status)
          Promise.reject(null, response.status);
        }
        return response.json();
      })
      .catch((error, statusCode) => {
        // Do stuff with statusCode.
      });
}