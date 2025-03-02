import { j as jsxRuntimeExports, B as Button, A as Accordion, L as Le, r as reactExports, d as de, M as Markdown, a as remarkMath, b as rehypeKatex, F as FaRegFilePdf, c as createRoot } from "./vendor.C9ESoyR8.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const samples = {
  "Sample 1": String.raw`# 1. Basic Definitions
  
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
  "Sample 2": String.raw`$$
  (x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k
  $$
  
  The **Binomial Theorem** expands the power of a binomial expression $(x + y)^n$. In the expansion, the binomial coefficient 
  $$
  \binom{n}{k} = \frac{n!}{k!(n-k)!}
  $$
  gives the number of ways to choose $k$ elements from $n$. Each term in the sum combines powers of $x$ and $y$ weighted by these coefficients.
  `,
  "Sample 3": String.raw`$$
  e^{ix} = \cos(x) + i\sin(x)
  $$
  
  **Euler's Formula** expresses the complex exponential $e^{ix}$ in terms of cosine and sine. This elegant relationship bridges exponential functions with trigonometry and is fundamental in many areas of science and engineering.
  `,
  "Sample 4": String.raw`$$
  \int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
  $$
  
  This integral represents the area under the Gaussian curve $e^{-x^2}$ over the entire real line. It is a key result in calculus, probability theory, and statistics, particularly in the study of the normal distribution.
  `,
  "Sample 5": String.raw`$$
  \sin(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}
  $$
  
  This is the **Taylor Series Expansion** of the sine function around $x = 0$. The series expresses $\sin(x)$ as an infinite sum of polynomial terms, where each term $(-1)^n \frac{x^{2n+1}}{(2n+1)!}$ improves the approximation of $\sin(x)$. This expansion is widely used in numerical analysis and mathematical approximations.
  `,
  "Sample 6": String.raw`$$
  \sin^2(\theta) + \cos^2(\theta) = 1
  $$
  
  This is the **Pythagorean Identity** in trigonometry, stating that for any angle $\theta$, the sum of the squares of sine and cosine equals 1. This identity is a fundamental tool in trigonometry and is used in numerous proofs and applications.
  `,
  "Sample 7": String.raw`$$
  f''(x) > 0 \implies \text{concave up}, \quad f''(x) < 0 \implies \text{concave down}
  $$
  
  The **Second Derivative Test** in calculus determines the concavity of a function. If $f''(x) > 0$, the function is concave up (shaped like a cup), and if $f''(x) < 0$, it is concave down (shaped like a cap). This test is crucial for understanding the behavior of functions, particularly in optimization.
  `
};
function SampleButtonsGroup({ onData }) {
  const handleClick = (key) => {
    onData(samples[key]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.keys(samples).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      outline: true,
      pill: true,
      className: "bg-transparent focus:ring-0",
      gradientDuoTone: "tealToLime",
      onClick: () => handleClick(key),
      children: key
    },
    key
  )) });
}
function RecommendationAccordion({ onData }) {
  const handleClick = (data) => {
    onData(data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { alwaysOpen: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion.Panel, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion.Title, { className: "border-0 bg-transparent text-black hover:bg-transparent focus:ring-0", children: "Samples" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion.Content, { className: "overflow-auto hover:resize-y", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SampleButtonsGroup, { onData: handleClick }) })
  ] }) });
}
const EditorLayout = ({ onData, latex }) => {
  const handleChange = (value) => {
    onData(value);
  };
  const monaco = Le();
  reactExports.useEffect(() => {
    if (monaco) {
      monaco.languages.register({ id: "latex" });
      monaco.languages.setMonarchTokensProvider("latex", {
        tokenizer: {
          root: [
            [/(\\[a-zA-Z]+)/, "keyword"],
            [/\$[^$]*\$/, "string"],
            [/\\$$(.*?)\\$$/, "string"],
            [/[%].*$/, "comment"]
          ]
        }
      });
      monaco.languages.setLanguageConfiguration("latex", {
        comments: { lineComment: "%" },
        brackets: [["{", "}"]],
        autoClosingPairs: [
          { open: "{", close: "}" },
          { open: "[", close: "]" },
          { open: "(", close: ")" }
        ]
      });
    }
  }, [monaco]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:bg-boxdark-2 dark:text-bodydark border-yellow mx-1 flex h-full rounded-lg border-2 border-solid p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    de,
    {
      defaultLanguage: "latex",
      defaultValue: latex,
      value: latex,
      onChange: handleChange,
      theme: "vs-dark",
      options: {
        minimap: { enabled: false },
        automaticLayout: true
      }
    }
  ) }) });
};
const RenderLayout = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:bg-boxdark-2 dark:text-bodydark border-yellow mx-1 flex h-full grow rounded-lg border-2 border-solid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-screen-2xl text-wrap p-4 md:p-6 2xl:p-10", children }) }) }) }) });
};
function App() {
  const [latex, setLatex] = reactExports.useState(samples["Sample 1"]);
  const isFirstRun = reactExports.useRef(true);
  reactExports.useEffect(() => {
    var _a, _b;
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if ((_b = (_a = window.MathJax) == null ? void 0 : _a.startup) == null ? void 0 : _b.promise) {
      window.MathJax.startup.promise.then(() => {
        window.MathJax.typesetPromise();
      });
    }
  }, [latex]);
  const downloadPDF = () => {
    alert("PDF downloaded");
  };
  const handleSampleData = (data) => {
    setLatex(data);
  };
  const handleEditorData = (data) => {
    setLatex(data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen justify-center bg-gradient-to-r from-cyan-500 to-blue-500 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-auto hover:resize-x md:w-1/3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-1 mb-1 flex-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationAccordion, { onData: handleSampleData }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditorLayout, { onData: handleEditorData, latex }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RenderLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Markdown,
        {
          children: latex,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: downloadPDF,
          className: "absolute bottom-9 right-4 mt-4 rounded-full bg-red-500 px-4 py-2 text-white",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaRegFilePdf, { size: "2rem" })
        }
      )
    ] })
  ] });
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
