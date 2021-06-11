/* eslint-disable no-underscore-dangle */

export default function filterSection(product, { cameras, lenses, films }) {
  switch (product.section) {
    case 'cameras':
      return cameras.filter((favoriteItem) => favoriteItem._id !== product._id);

    case 'lenses':
      return lenses.filter((favoriteItem) => favoriteItem._id !== product._id);

    case 'films':
      return films.filter((favoriteItem) => favoriteItem._id !== product._id);

    default:
      break;
  }
  return false;
}
