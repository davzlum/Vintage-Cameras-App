/* eslint-disable no-underscore-dangle */

export default function findItem(section, { cameras, lenses, films }, product) {
  switch (section) {
    case 'cameras':
      return cameras.find((item) => product._id === item._id);

    case 'lenses':
      return lenses.find((item) => product._id === item._id);

    case 'films':
      return films.find((item) => product._id === item._id);

    default:
      break;
  }
  return false;
}
