import config from '../config';

const headers = {
  'Content-Type': 'application/json',
  'X-Parse-Application-Id': config.appId
};
const url = `${config.apiUrl}/classes/OpenMic`;

export default function(data) {
  delete data.isLoading;

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });
}
