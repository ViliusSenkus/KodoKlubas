let target = 2022;
let numbers = [7, 3, 21, 12, 13, 48, 43, 31, 15, 2, 33];

function countWays(target, numbers) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = numbers[i]; j <= target; j++) {
      // console.log(dp);
      // console.log("prieš tai: i - ", i, " j - ",j, "number[i] - ", numbers[i], "dp[j] - ", dp[j], )
      // console.log("skaiciuos kad dp[", j, "] skaicius", dp[j], " = dp[j]",dp[j],"+ dp [j", j ," - num[i]", numbers[i],"]");
      dp[j] += dp[j - numbers[i]];
      // console.log("po to: i - ", i, " j - ",j, "number[i] - ", numbers[i], "dp[j] - ", dp[j], )
      // console.log(dp);
      // console.log(dp[-1]);
    }
  }

  return dp[target];
}


document.write(countWays(target, numbers));