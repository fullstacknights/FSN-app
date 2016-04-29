import components from './components';

export default (name) => {
  return components.filter(c => c.name === name)[0].component;
};
