/* eslint-disable no-underscore-dangle */

export default function findItem({ section }, { user: { favorites: { cameras, lenses, films } } }) {
  switch (section) {
    case 'cameras':
      return cameras;

    case 'lenses':
      return lenses;

    case 'films':
      return films;

    default:
      break;
  }
  return false;
}
