const romanMap = new Map([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]);

var intToRoman = function(num) {
  let romanBuilder = [];
  romanMap.forEach((value, key) => {
      let romansToAdd = Math.floor(num / key);
      if (romansToAdd >= 1) {
          romanBuilder.push(value.repeat(romansToAdd));
          num -= (romansToAdd * key);
      }
  })
  return romanBuilder.join("");
};