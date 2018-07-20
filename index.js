const iztype = {
  string: target => typeof target === "string",
  array: target => Array.isArray(target),
  object: target => {
    let check = new Map(Object.entries(iztype));
    let isOnlyObj = false;
    for (let [key, value] of check) {
      if (key != "object") isOnlyObj = !value(target) && !isOnlyObj;
    }
    return typeof target === "object" && isOnlyObj;
  },
  function: target => ({}.toString.call(target) === "[object Function]"),
  bool: target => typeof target === "boolean",
  infinity: target => target === Infinity,
  number: target => typeof target === "number",
  map: target => target instanceof Map,
  set: target => target instanceof Set,
  char: target => target.length === 1
};

module.exports = iztype;
