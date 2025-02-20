function addUpArrayElements(arr) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
}


module.exports = {
  addUpArrayElements,
};
