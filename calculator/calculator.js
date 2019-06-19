module.exports = {
  add,
};

function add(x) {
  const args = Array.isArray(x) ? x : [...arguments]

  return args.reduce((acc, val) => {
    return acc + val
  }, 0)
}
