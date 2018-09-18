const testNumbs = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNumbs));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }

  return total;

}
console.log(sumWhile(testNumbs));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }

  else {
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
  }
}

console.log(sumRecursion(testNumbs));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num) { return memo + num; } ,0);
}

console.log(sumTheSimpleWay(testNumbs));

/*
 Code taken from http://courses.ics.hawaii.edu/ics314f18/morea/coding-standards/experience-five-problems-1.html
  After trying first attempt past DNF time.
 */