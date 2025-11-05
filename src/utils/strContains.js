export const strContains = (source = '', query = '') =>
  source.toString().toLowerCase().includes(query.toString().toLowerCase());
