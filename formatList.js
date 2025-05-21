
function formatList(items) {
  // your implementation
  const len = items.length;
  if (len === 1) return items[0];
  let ans = items.reduce((ans, cur, idx) => {
    if (idx === len - 2) {
      ans = ans.concat(cur);
    }
    else if (idx === len - 1) {
      ans = ans.concat(' and ' + cur);
    }
    else {
      ans = ans.concat(cur + ', ');
    }
    return ans;

  }, '');
  
  return ans;
}

function solutionFormatList(items) {
  // your implementation
  const len = items.length;

  if (len === 0) return '';
  if (len === 1) return items[0];
  if (len === 2) return `${items[0]} and ${items[1]}`;

  return `${items.slice(0, len - 1).join(', ')} and ${items[len - 1]}`;
}

//For the purpose of user debugging.
formatList(["apple", "banana"]);

module.exports = formatList;