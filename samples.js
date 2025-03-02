const samples = {
  'Sample 1': String.raw`# 1. Basic Definitions
  
  In game theory, a **game** is defined by a set of players, each with their own set of strategies and a payoff function that assigns a numerical value to every combination of strategies. For example, consider a game with players:
  $$
  P = \{1, 2, \dots, n\}
  $$
  This indicates that there are $n$ players participating. Each player chooses a strategy, and the overall outcome of the game depends on the combination of these choices.
  
  ## 2. Nash Equilibrium
  
  A **Nash equilibrium** is a set of strategies where no player can improve their outcome by changing only their own strategy while all others keep theirs unchanged. This condition is expressed mathematically as:
  $$
  u_i(s_i, s_{-i}) \geq u_i(s_i', s_{-i}) \quad \forall s_i' \in S_i, \forall i \in P
  $$
  Here, $s_{-i}$ represents the strategies chosen by all players except player $i$. This concept is central to predicting the behavior of rational players.
  
  ## 3. Mixed Strategies
  
  In many scenarios, players do not choose one pure strategy; instead, they randomize over several strategies. A mixed strategy for player $i$ is represented as a probability distribution:
  $$
  \sigma_i = (\sigma_i(s_{i1}), \sigma_i(s_{i2}), \dots, \sigma_i(s_{ik}))
  $$
  The expected payoff, which represents the weighted average of all possible outcomes, is calculated by:
  $$
  E[X] = \sum_{x} x P(X = x)
  $$
  Each outcome $x$ is weighted by its probability $P(X = x)$, giving a measure of the central tendency of the outcomes.
  `,

  'Sample 2': String.raw`$$
  (x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k
  $$
  
  The **Binomial Theorem** expands the power of a binomial expression $(x + y)^n$. In the expansion, the binomial coefficient 
  $$
  \binom{n}{k} = \frac{n!}{k!(n-k)!}
  $$
  gives the number of ways to choose $k$ elements from $n$. Each term in the sum combines powers of $x$ and $y$ weighted by these coefficients.
  `,

  'Sample 3': String.raw`$$
  e^{ix} = \cos(x) + i\sin(x)
  $$
  
  **Euler's Formula** expresses the complex exponential $e^{ix}$ in terms of cosine and sine. This elegant relationship bridges exponential functions with trigonometry and is fundamental in many areas of science and engineering.
  `,

  'Sample 4': String.raw`$$
  \int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
  $$
  
  This integral represents the area under the Gaussian curve $e^{-x^2}$ over the entire real line. It is a key result in calculus, probability theory, and statistics, particularly in the study of the normal distribution.
  `,

  'Sample 5': String.raw`$$
  \sin(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
  $$
  
  This is the **Taylor Series Expansion** of the sine function around $x = 0$. The series expresses $\sin(x)$ as an infinite sum of polynomial terms, where each term $(-1)^n \frac{x^{2n+1}}{(2n+1)!}$ improves the approximation of $\sin(x)$. This expansion is widely used in numerical analysis and mathematical approximations.
  `,

  'Sample 6': String.raw`$$
  \sin^2(\theta) + \cos^2(\theta) = 1
  $$
  
  This is the **Pythagorean Identity** in trigonometry, stating that for any angle $\theta$, the sum of the squares of sine and cosine equals 1. This identity is a fundamental tool in trigonometry and is used in numerous proofs and applications.
  `,

  'Sample 7': String.raw`$$
  f''(x) > 0 \implies \text{concave up}, \quad f''(x) < 0 \implies \text{concave down}
  $$
  
  The **Second Derivative Test** in calculus determines the concavity of a function. If $f''(x) > 0$, the function is concave up (shaped like a cup), and if $f''(x) < 0$, it is concave down (shaped like a cap). This test is crucial for understanding the behavior of functions, particularly in optimization.
  `,
};

export default samples;
