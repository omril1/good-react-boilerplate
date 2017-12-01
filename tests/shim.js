//workaround to remove error for react-16:
// https://github.com/facebook/jest/issues/4545#issuecomment-332762365
self.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};