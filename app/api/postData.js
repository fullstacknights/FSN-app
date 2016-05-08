import config from '../config';

const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': config.appId
};

export default function(data, path) {
  const url = `${config.apiUrl}/${path}`;
  delete data.isLoading;

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });
}
