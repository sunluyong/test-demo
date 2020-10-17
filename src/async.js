module.exports = {
  cb: fn => {
    setTimeout(() => {
      fn('peanut butter');
    }, 300);
  },
  pm: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('peanut butter');
      }, 300);
    });
  },
  aa: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('peanut butter');
      }, 300);
    });
  }
};
