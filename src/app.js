export function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
