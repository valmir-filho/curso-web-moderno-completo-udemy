const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(x in nums) {
    if(x == 5) {
        break;
    }
    console.log(`${x} = ${nums[x]}`);
}
console.log();
for(y in nums) {
    if(y == 5) {
        continue;  // Comando faz a interrupção da repetição atual e da continuidade no laço.
    }
    console.log(`${y} = ${nums[y]}`);
}