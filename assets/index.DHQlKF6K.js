import { j as jsxRuntimeExports, B as Button, A as Accordion, r as reactExports, d as de, M as MathJaxContext, a as MathJax, c as createRoot } from "./vendor.D7_OY7H7.js";
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
function SampleButtonsGroup({ onData }) {
  const samples = {
    "Sample 1": `\\[
Probability\\ and\\ Expected\\ Value
\\]

In probability theory, the expected value of a random variable \\(X\\) is defined as:
\\[
E[X] = \\sum_{x} x P(X = x)
\\]
where \\( P(X = x) \\) is the probability that the random variable \\(X\\) takes the value \\(x\\).

For continuous random variables, the expected value is given by:
\\[
E[X] = \\int_{-\\infty}^{\\infty} x f(x) \\, dx
\\]
where \\( f(x) \\) is the probability density function of \\(X\\).`,
    "Sample 2": `\\[
(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k
\\]

The binomial theorem expands the power of a binomial, as shown above for \\( (x + y)^n \\).
`,
    "Sample 3": `\\[
e^{ix} = \\cos(x) + i\\sin(x)
\\]

Euler's formula relates complex exponentials to trigonometric functions.
`,
    "Sample 4": `\\[
\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}
\\]

The integral of the Gaussian function \\( e^{-x^2} \\) over the entire real line equals \\( \\sqrt{\\pi} \\).
`,
    "Sample 5": `\\[
\\sin(x) = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}
\\]

This is the Taylor series expansion of the sine function around \\( x = 0 \\).
`,
    "Sample 6": `\\[
\\sin^2(\\theta) + \\cos^2(\\theta) = 1
\\]

This is one of the fundamental identities in trigonometry, relating the squares of sine and cosine.
`,
    "Sample 7": `\\[
f''(x) > 0 \\implies \\text{concave up}, \\quad f''(x) < 0 \\implies \\text{concave down}
\\]

The second derivative test determines whether a function is concave up or down at a point.
`
  };
  const handleClick = (text) => {
    onData(samples[text]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        outline: true,
        pill: true,
        className: "bg-transparent focus:ring-0",
        gradientDuoTone: "tealToLime",
        onClick: () => {
          handleClick("Sample 1");
        },
        children: "Sample 1"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        outline: true,
        pill: true,
        className: "bg-transparent focus:ring-0",
        gradientDuoTone: "tealToLime",
        onClick: () => {
          handleClick("Sample 2");
        },
        children: "Sample 2"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        outline: true,
        pill: true,
        className: "bg-transparent focus:ring-0",
        gradientDuoTone: "tealToLime",
        onClick: () => {
          handleClick("Sample 3");
        },
        children: "Sample 3"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        outline: true,
        pill: true,
        className: "bg-transparent focus:ring-0",
        gradientDuoTone: "tealToLime",
        onClick: () => {
          handleClick("Sample 4");
        },
        children: "Sample 4"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        outline: true,
        pill: true,
        className: "bg-transparent focus:ring-0",
        gradientDuoTone: "tealToLime",
        onClick: () => {
          handleClick("Sample 5");
        },
        children: "Sample 5"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        outline: true,
        pill: true,
        className: "bg-transparent focus:ring-0",
        gradientDuoTone: "tealToLime",
        onClick: () => {
          handleClick("Sample 6");
        },
        children: "Sample 6"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        outline: true,
        pill: true,
        className: "bg-transparent focus:ring-0",
        gradientDuoTone: "tealToLime",
        onClick: () => {
          handleClick("Sample 7");
        },
        children: "Sample 7"
      }
    )
  ] });
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
const EditorLayout = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:bg-boxdark-2 dark:text-bodydark border-yellow mx-1 flex h-full rounded-lg border-2 border-solid p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full", children }) });
};
const RenderLayout = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:bg-boxdark-2 dark:text-bodydark border-yellow mx-1 flex h-full grow rounded-lg border-2 border-solid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-screen-2xl text-wrap p-4 md:p-6 2xl:p-10", children }) }) }) }) });
};
function App() {
  const [latex, setLatex] = reactExports.useState(`\\[
Probability\\ and\\ Expected\\ Value
\\]

In probability theory, the expected value of a random variable \\(X\\) is defined as:
\\[
E[X] = \\sum_{x} x P(X = x)
\\]
where \\( P(X = x) \\) is the probability that the random variable \\(X\\) takes the value \\(x\\).

For continuous random variables, the expected value is given by:
\\[
E[X] = \\int_{-\\infty}^{\\infty} x f(x) \\, dx
\\]
where \\( f(x) \\) is the probability density function of \\(X\\).`);
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };
  const latexRef = reactExports.useRef(latex);
  reactExports.useEffect(() => {
    latexRef.current = latex;
  }, [latex]);
  const downloadPDF = () => {
    alert("PDF downloaded");
  };
  const handleChange = (value, event) => {
    setLatex(value);
  };
  const handleSampleData = (data) => {
    setLatex(data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen justify-center bg-gradient-to-r from-cyan-500 to-blue-500 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-auto hover:resize-x md:w-1/3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-1 mb-1 flex-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationAccordion, { onData: handleSampleData }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditorLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        de,
        {
          height: "99.9%",
          defaultLanguage: "markdown",
          defaultValue: latex,
          value: latex,
          onChange: handleChange,
          theme: "vs-dark",
          options: {
            minimap: { enabled: false },
            automaticLayout: true
          }
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RenderLayout, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MathJaxContext, { version: 3, config, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MathJax, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: latexRef.current }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: downloadPDF,
          className: "absolute bottom-3 right-3 mt-4 rounded-full bg-red-500 px-4 py-2 text-white",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "h-[35px] w-[35px] text-gray-800 text-white",
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              fill: "none",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.7",
                  d: "M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                }
              )
            }
          )
        }
      )
    ] }) })
  ] });
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
