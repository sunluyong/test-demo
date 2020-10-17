const { cb, pm, aa } = require('../src/async');

test('callback data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  cb(callback);
});

test('promise then data is peanut butter', () => {
  return pm().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('promise resolve data is peanut butter', () => {
  return expect(pm()).resolves.toBe('peanut butter');
});

test('async/await data is peanut butter', async () => {
  const data = await aa();
  expect(data).toBe('peanut butter');
});
