function solution(n) {
  // 1칸을 가는방법은 1번 (1칸)
  // 2칸을 가는 방법은 2번 (1칸,1칸) (2칸)
  // 3칸을 가는 방법은 3번 (1칸, 2칸) , (2칸,1칸) (1칸,1칸,1칸)
  // 4칸을 가는 방법은 5번 (1칸,1칸,1칸,1칸), (1칸,1칸,2칸), (2칸,1칸,1칸), (1칸,2칸,1칸), (2칸,2칸)
  
  const dp = [0,1,2];
  for(let i=3; i<=n; i++){
    dp[i] = (dp[i-1] + dp[i-2])%1234567; 
  }
  return dp[n] 
}