export const arrayChange = function (arr, id, newText) {
  const index = arr.findIndex((listItem) => listItem.itemId === Number(id));
  arr[index].item = newText;
};

export const arrayDelete = function (arr, id) {
  const index = arr.findIndex((listItem) => listItem.itemId === Number(id));
  arr.splice(index, 1);
};
