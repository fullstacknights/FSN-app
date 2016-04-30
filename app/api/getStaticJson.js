import config from '../config';

export default () => fetch(config.jsonUrl).then(response => response.json());
