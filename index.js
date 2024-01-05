function findCommonPrefix(strs) {
  //sort to save time to loop
  strs.sort();
  let prefix = "";
  // the first word as starting for comparison
  const first = strs[0];
  //loop to each character
  for (let i = 0; i < first.length; i++) {
    const curr = first.charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (curr === strs[j].charAt(i)) {
        // if the same char found run continue the checking
        // loop to the last
        if (j === strs.length - 1) {
          prefix = prefix + curr;
        }
      } else {
        // if the mismatch found just stop checking
        break;
      }
    }
  }
  return prefix;
}

module.exports = findCommonPrefix;
