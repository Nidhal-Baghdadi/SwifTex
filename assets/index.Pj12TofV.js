import { j as jsxRuntimeExports, B as Button, r as reactExports, A as Accordion, m as motion, L as Le, d as de, F as FaRegFilePdf, u as unified, a as remarkParse, b as remarkMath, c as remarkRehype, e as rehypeKatex, f as rehypeStringify, h as html2pdf, g as createRoot } from "./vendor.B1XonYE9.js";
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
  "Abstract Algebra - Groups": String.raw`
# Abstract Algebra: A Study of Groups

## Abstract

This paper explores the concept of groups in abstract algebra, starting from the basic definitions to more complex properties. We will illustrate the properties of groups with examples and discuss some essential theorems.

## 1. Introduction

In abstract algebra, a **group** is a fundamental algebraic structure. It is a set equipped with a binary operation that combines any two elements to form a third element in such a way that four conditions called group axioms are satisfied.

## 2. Definition of a Group

A group $(G, *)$ is a set $G$ together with a binary operation $*$ on $G$ satisfying the following axioms:

1.  **Closure:** For all $a, b \in G$, the result of the operation $a * b$ is also in $G$.
2.  **Associativity:** For all $a, b, c \in G$, $(a * b) * c = a * (b * c)$.
3.  **Identity Element:** There exists an element $e \in G$ such that for every $a \in G$, $e * a = a * e = a$.
4.  **Inverse Element:** For each $a \in G$, there exists an element $a^{-1} \in G$ such that $a * a^{-1} = a^{-1} * a = e$.

## 3. Examples of Groups

### 3.1. Integers under Addition

The set of integers $\mathbb{Z}$ with the operation of addition $(+)$ forms a group.

*   **Closure:** The sum of any two integers is an integer.
*   **Associativity:** Addition of integers is associative.
*   **Identity:** The integer $0$ is the identity element for addition.
*   **Inverse:** For each integer $a$, there exists an inverse $-a$ such that $a + (-a) = 0$.

### 3.2. Non-zero Rationals under Multiplication

The set of non-zero rational numbers $\mathbb{Q}^*$ with the operation of multiplication $(\cdot)$ forms a group.

*   **Closure:** The product of any two non-zero rationals is a non-zero rational.
*   **Associativity:** Multiplication of rationals is associative.
*   **Identity:** The number $1$ is the identity element for multiplication.
*   **Inverse:** For each non-zero rational $a$, there exists an inverse $\frac{1}{a}$ such that $a \cdot \frac{1}{a} = 1$.

## 4. Subgroups

A **subgroup** $H$ of a group $G$ is a subset of $G$ that is itself a group under the same operation.

### Theorem (One-Step Subgroup Test)

A non-empty subset $H$ of $G$ is a subgroup of $G$ if for all $a, b \in H$, $a * b^{-1} \in H$.

## 5. Conclusion

Groups are a cornerstone of abstract algebra. The properties and examples discussed illustrate their fundamental role in various algebraic structures. Further study could delve into group homomorphisms, isomorphisms, and the relationship between groups and other algebraic structures like rings and fields.
`,
  "Calculus - Limits and Continuity": String.raw`
# Calculus: Limits and Continuity

## Abstract

This paper explores the fundamental concepts of limits and continuity in calculus. We begin with the intuitive notion of a limit, then formalize it using the epsilon-delta definition. Continuity is then defined and its properties discussed.

## 1. Introduction

Calculus is built upon the concept of limits. The idea of a limit is foundational to understanding rates of change and accumulation. Continuity, a property of functions, is closely tied to limits and plays a crucial role in numerous theorems in calculus.

## 2. Limits

### 2.1. Intuitive Definition

Intuitively, a function $f(x)$ approaches the limit $L$ as $x$ approaches $c$, written as $\lim_{x \to c} f(x) = L$, if we can make $f(x)$ arbitrarily close to $L$ by choosing $x$ sufficiently close to $c$ but not equal to $c$.

### 2.2. Formal Definition (Epsilon-Delta)

Formally, $\lim_{x \to c} f(x) = L$ if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |x - c| < \delta$, then $|f(x) - L| < \epsilon$.

## 3. Continuity

### 3.1. Definition

A function $f$ is continuous at $x = c$ if:

1.  $f(c)$ is defined.
2.  $\lim_{x \to c} f(x)$ exists.
3.  $\lim_{x \to c} f(x) = f(c)$.

If $f$ is continuous at every point in an interval $(a, b)$, it is continuous on $(a, b)$.

### 3.2. Properties of Continuous Functions

*   If $f$ and $g$ are continuous at $c$, then $f + g$, $f - g$, $f \cdot g$, and $\frac{f}{g}$ (if $g(c) \neq 0$) are continuous at $c$.
*   If $g$ is continuous at $c$ and $f$ is continuous at $g(c)$, then the composite function $f \circ g$ is continuous at $c$.

## 4. Theorems

### 4.1. Intermediate Value Theorem

If $f$ is continuous on the closed interval $[a, b]$, and $k$ is any number between $f(a)$ and $f(b)$, then there is at least one number $c$ in $[a, b]$ such that $f(c) = k$.

### 4.2. Extreme Value Theorem

If $f$ is continuous on the closed interval $[a, b]$, then $f$ attains both a maximum and a minimum value on $[a, b]$.

## 5. Conclusion

Limits and continuity are foundational concepts in calculus. Understanding them is essential for the study of derivatives, integrals, and the analysis of functions.
  `,
  "Complex Analysis - Euler's Formula": String.raw`
# Complex Analysis: Exploring Euler's Formula

## Abstract

This paper delves into Euler's formula, $e^{ix} = \cos(x) + i\sin(x)$, a remarkable equation in complex analysis that bridges exponential functions, trigonometric functions, and complex numbers. We explore its implications and applications.

## 1. Introduction

Euler's formula is one of the most profound and elegant equations in mathematics. It reveals a deep connection between exponential functions and trigonometric functions through the lens of complex numbers.

## 2. Euler's Formula

### 2.1. The Formula

Euler's formula states that for any real number $x$,

$$
e^{ix} = \cos(x) + i\sin(x)
$$

where $e$ is the base of the natural logarithm, $i$ is the imaginary unit ($i^2 = -1$), $\cos(x)$ is the cosine function, and $\sin(x)$ is the sine function.

### 2.2. Key Components

*   **Exponential Function:** $e^{ix}$ represents an exponential function with a purely imaginary exponent.
*   **Trigonometric Functions:** $\cos(x)$ and $\sin(x)$ are periodic trigonometric functions.
*   **Imaginary Unit:** $i$ is the imaginary unit that extends the real number system to the complex plane.

## 3. Derivation

Euler's formula can be derived using the Taylor series expansions of $e^x$, $\cos(x)$, and $\sin(x)$:

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

$$
\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}
$$

$$
\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}
$$

Substituting $ix$ into the Taylor series for $e^x$ and comparing the real and imaginary parts, we arrive at Euler's formula.

## 4. Implications and Applications

### 4.1. Representation of Complex Numbers

Euler's formula provides a way to represent complex numbers in polar form. A complex number $z = a + bi$ can be written as $z = re^{i\theta}$, where $r = \sqrt{a^2 + b^2}$ and $\theta = \arctan\left(\frac{b}{a}\right)$.

### 4.2. De Moivre's Theorem

Euler's formula is instrumental in proving De Moivre's theorem:

$$
(\cos(x) + i\sin(x))^n = \cos(nx) + i\sin(nx)
$$

### 4.3. Complex Roots

Euler's formula allows us to express and compute complex roots easily.

## 5. Euler's Identity

Setting $x = \pi$ in Euler's formula yields Euler's identity:

$$
e^{i\pi} + 1 = 0
$$

This identity is often cited as one of the most beautiful equations in mathematics because it combines five fundamental mathematical constants in a simple and elegant way.

## 6. Conclusion

Euler's formula is a cornerstone of complex analysis, providing a fundamental link between exponential and trigonometric functions. Its implications and applications are vast, extending to various branches of mathematics, physics, and engineering.
  `,
  Statistics: String.raw`
# Statistics: Understanding the Normal Distribution

## Abstract

This paper provides an overview of the normal distribution, also known as the Gaussian distribution, which is a fundamental concept in statistics. We will discuss its properties, importance, and use in various statistical analyses.

## 1. Introduction

The normal distribution is a continuous probability distribution that is symmetric around its mean. It is characterized by its bell-shaped curve and is widely used to model many real-world phenomena.

## 2. Definition of the Normal Distribution

### 2.1. Probability Density Function

The probability density function (PDF) of a normal distribution is given by:

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2} \left( \frac{x-\mu}{\sigma} \right)^2}
$$

where:
  * $\mu$ is the mean of the distribution.
  * $\sigma$ is the standard deviation.
  * $\pi$ is the mathematical constant pi (approximately 3.14159).
  * $e$ is the base of the natural logarithm (approximately 2.71828).

### 2.2. Properties

*   **Symmetry:** The normal distribution is symmetric around its mean $\mu$.
*   **Bell-Shaped Curve:** It has a characteristic bell shape.
*   **Mean, Median, and Mode:** In a normal distribution, the mean, median, and mode are equal.
*   **Empirical Rule:** Approximately 68% of the data falls within one standard deviation of the mean, 95% within two standard deviations, and 99.7% within three standard deviations.

## 3. The Standard Normal Distribution

### 3.1. Definition

The standard normal distribution is a special case of the normal distribution with a mean $\mu = 0$ and a standard deviation $\sigma = 1$. Its PDF is:

$$
f(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2} x^2}
$$

### 3.2. Z-Scores

A z-score, or standard score, measures how many standard deviations an element is from the mean. It is calculated as:

$$
z = \frac{x-\mu}{\sigma}
$$

## 4. Applications of the Normal Distribution

### 4.1. Natural Phenomena

Many natural phenomena, such as human height and blood pressure, are approximately normally distributed.

### 4.2. Statistical Inference

The normal distribution is widely used in statistical inference, hypothesis testing, and confidence intervals.

### 4.3. Central Limit Theorem

The central limit theorem states that the sampling distribution of the sample mean will be approximately normally distributed, regardless of the shape of the population distribution, when the sample size is sufficiently large.

## 5. Conclusion

The normal distribution is a fundamental concept in statistics. Its properties, the standard normal distribution, and the z-score are essential tools for statistical analysis and inference.
`,
  Cryptography: String.raw`
# Introduction to Cryptography: RSA Algorithm

## Abstract

This paper provides an introduction to cryptography, focusing on the RSA algorithm, which is one of the most widely used public-key cryptosystems. We will explore its mathematical foundations, key generation, encryption, and decryption processes.

## 1. Introduction to Cryptography

Cryptography is the practice and study of techniques for secure communication in the presence of third parties called adversaries. It involves creating and analyzing protocols that prevent unauthorized access to sensitive information.

## 2. Public-Key Cryptography

### 2.1. Concept

Public-key cryptography, also known as asymmetric cryptography, uses two different keys for encryption and decryption: a public key and a private key.

*   **Public Key:** Used for encryption and is distributed openly.
*   **Private Key:** Used for decryption and must be kept secret.

### 2.2. Advantages

*   **Key Exchange:** No need for a secure channel to exchange keys.
*   **Scalability:** Fewer keys are needed compared to symmetric cryptography.

## 3. The RSA Algorithm

### 3.1. Overview

RSA (Rivest-Shamir-Adleman) is a public-key cryptosystem that is widely used for secure data transmission. It relies on the mathematical properties of prime numbers and modular arithmetic.

### 3.2. Key Generation

1.  **Choose Two Large Prime Numbers:** Select two distinct prime numbers, $p$ and $q$.
2.  **Compute $n$:** Calculate $n = p \times q$. $n$ is used as the modulus for both the public and private keys.
3.  **Compute $\phi(n)$:** Calculate Euler's totient function $\phi(n) = (p-1)(q-1)$.
4.  **Choose $e$:** Select an integer $e$ such that $1 < e < \phi(n)$ and $e$ is coprime to $\phi(n)$.
5.  **Compute $d$:** Find $d$ such that $d \times e \equiv 1 \pmod{\phi(n)}$. This is typically done using the Extended Euclidean Algorithm.
6.  **Public Key:** The public key is $(n, e)$.
7.  **Private Key:** The private key is $(n, d)$.

### 3.3. Encryption

To encrypt a message $M$ (where $M < n$), calculate the ciphertext $C$ as:

$$
C \equiv M^e \pmod{n}
$$

### 3.4. Decryption

To decrypt the ciphertext $C$, calculate the original message $M$ as:

$$
M \equiv C^d \pmod{n}
$$

## 4. Security of RSA

The security of RSA relies on the difficulty of factoring large composite numbers. It is computationally infeasible to factor $n$ into $p$ and $q$ when $p$ and $q$ are very large.

## 5. Conclusion

RSA is a powerful public-key cryptosystem widely used in secure communication. Its security is based on the intractability of the integer factorization problem, making it suitable for various cryptographic applications.
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
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const handleClick = (data) => {
    onData(data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { alwaysOpen: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion.Panel, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Accordion.Title,
      {
        className: "bg-transparent text-black hover:bg-transparent focus:ring-0",
        onClick: () => setIsOpen(!isOpen),
        children: "Samples"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: false,
        animate: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 },
        transition: { duration: 0.3, ease: "easeInOut" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion.Content, { className: "overflow-auto hover:resize-y", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SampleButtonsGroup, { onData: handleClick }) })
      }
    )
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
const A4_PAGE_HEIGHT_PX = 1050;
const MARGIN_TOP_PX = 150;
const MARGIN_BOTTOM_PX = 200;
function App() {
  const [latex, setLatex] = reactExports.useState(samples["Abstract Algebra - Groups"]);
  const [htmlContent, setHtmlContent] = reactExports.useState("");
  const [pages, setPages] = reactExports.useState([]);
  const pageRefs = reactExports.useRef([]);
  const hiddenContentRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const processMarkdown = async () => {
      const processor = unified().use(remarkParse).use(remarkMath).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeKatex).use(rehypeStringify, { allowDangerousHtml: true });
      try {
        const result = await processor.process(latex);
        setHtmlContent(String(result));
      } catch (error) {
        console.error("Error processing markdown:", error);
      }
    };
    processMarkdown();
  }, [latex]);
  reactExports.useEffect(() => {
    if (hiddenContentRef.current && htmlContent) {
      hiddenContentRef.current.innerHTML = htmlContent;
      requestAnimationFrame(() => {
        const splitHtmlIntoPages = () => {
          const elements = Array.from(hiddenContentRef.current.children);
          const pages2 = [];
          let currentPageContent = [];
          let currentPageHeight = 0;
          elements.forEach((element) => {
            const elementHeight = element.offsetHeight;
            if (currentPageHeight + elementHeight < A4_PAGE_HEIGHT_PX - MARGIN_TOP_PX - MARGIN_BOTTOM_PX) {
              currentPageContent.push(element.outerHTML);
              currentPageHeight += elementHeight;
            } else {
              pages2.push(currentPageContent.join(""));
              currentPageContent = [element.outerHTML];
              currentPageHeight = elementHeight;
            }
          });
          if (currentPageContent.length > 0) {
            pages2.push(currentPageContent.join(""));
          }
          return pages2;
        };
        const newPages = splitHtmlIntoPages();
        setPages(newPages);
      });
    }
  }, [htmlContent]);
  const downloadPDF = async () => {
    const opt = {
      margin: [MARGIN_TOP_PX / 4, 10, MARGIN_BOTTOM_PX / 4, 10],
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "px", format: "a4", orientation: "portrait" },
      enableLinks: true,
      pagebreak: { mode: "avoid-all" }
    };
    const promises = pages.map(async (page, index) => {
      const pageElement = pageRefs.current[index];
      return html2pdf().set(opt).from(pageElement).save();
    });
    await Promise.all(promises);
  };
  const handleSampleData = (data) => {
    if (data) {
      setLatex(data);
    }
  };
  const handleEditorData = (data) => {
    setLatex(data);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen justify-center bg-gradient-to-r from-blue-400 to-blue-600 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-auto hover:resize-x md:w-1/3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-1 mb-1 flex-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationAccordion, { onData: handleSampleData }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditorLayout, { onData: handleEditorData, latex }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RenderLayout, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: hiddenContentRef, className: "absolute left-[-9999px] top-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: pages.map((page, pageIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: (el) => pageRefs.current[pageIndex] = el,
            className: "pdf-container",
            dangerouslySetInnerHTML: { __html: page }
          },
          pageIndex
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: downloadPDF,
          className: "btn btn-red absolute bottom-9 right-4 mt-4 rounded-full px-4 py-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaRegFilePdf, { size: "2rem" })
        }
      )
    ] })
  ] });
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
