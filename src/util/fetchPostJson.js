export default (url, body) => {
  const headers = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      credentials: 'same-origin',
      mode: 'no-cors',
    },
  };

  console.log(headers);
  return fetch(url, headers, body)
      .then((response) => {
        return response.json();
      })
      .catch((error, statusCode) => {
        // Do stuff with statusCode.
        console.log('post virhe');
        return false;
      });
}