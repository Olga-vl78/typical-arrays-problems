
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
   let result = array.reduce((acc, current) => acc < current ? acc : current);
   return result;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
   let result = array.reduce((acc, current) => acc > current ? acc : current);
   return result;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
   let result = array.reduce((sum, current) => sum + current)/array.length;
   return result;
}
