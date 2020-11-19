var longestCommonPrefix = function(strs) {
  let prefix = "";
  if (strs.length === 0) return "";
  for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
          if (strs[j][i] !== strs[0][i]) {
              return prefix;
          }
      }
      prefix += strs[0][i];
  }
  return prefix
};

// Iterate over the first word in the strs array
// Check if each char matches the same index char for each other word 
// in the array keeping track of the count
// once a deviation is found, break and return the current count