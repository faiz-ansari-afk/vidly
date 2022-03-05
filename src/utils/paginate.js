import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //   _.slice(items, startIndex);
  //   _.take()
  return _(items).slice(startIndex).take(pageSize).value();
}
