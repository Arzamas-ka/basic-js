module.exports = class DepthCalculator {
  calculateDepth(arr, step = 1, depth = []) {
    let counter = 0; 

    depth.push(step);
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]))
        this.calculateDepth(arr[i], step + 1, depth);
    }
    counter = Math.max(...depth);
    return counter;
  }
};
