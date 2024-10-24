import { Button } from 'flowbite-react';

export default function SampleButtonsGroup({ onData }) {
  const samples = {
    'Sample 1': `\\[
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
    'Sample 2': `\\[
(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k
\\]

The binomial theorem expands the power of a binomial, as shown above for \\( (x + y)^n \\).
`,
    'Sample 3': `\\[
e^{ix} = \\cos(x) + i\\sin(x)
\\]

Euler's formula relates complex exponentials to trigonometric functions.
`,
    'Sample 4': `\\[
\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}
\\]

The integral of the Gaussian function \\( e^{-x^2} \\) over the entire real line equals \\( \\sqrt{\\pi} \\).
`,
    'Sample 5': `\\[
\\sin(x) = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}
\\]

This is the Taylor series expansion of the sine function around \\( x = 0 \\).
`,
    'Sample 6': `\\[
\\sin^2(\\theta) + \\cos^2(\\theta) = 1
\\]

This is one of the fundamental identities in trigonometry, relating the squares of sine and cosine.
`,
    'Sample 7': `\\[
f''(x) > 0 \\implies \\text{concave up}, \\quad f''(x) < 0 \\implies \\text{concave down}
\\]

The second derivative test determines whether a function is concave up or down at a point.
`,
  };

  const handleClick = (text) => {
    onData(samples[text]);
  };

  return (
    <div className='flex flex-wrap gap-2'>
      <Button
        outline
        pill
        className='bg-transparent focus:ring-0'
        gradientDuoTone='tealToLime'
        onClick={() => {
          handleClick('Sample 1');
        }}
      >
        Sample 1
      </Button>
      <Button
        outline
        pill
        className='bg-transparent focus:ring-0'
        gradientDuoTone='tealToLime'
        onClick={() => {
          handleClick('Sample 2');
        }}
      >
        Sample 2
      </Button>
      <Button
        outline
        pill
        className='bg-transparent focus:ring-0'
        gradientDuoTone='tealToLime'
        onClick={() => {
          handleClick('Sample 3');
        }}
      >
        Sample 3
      </Button>
      <Button
        outline
        pill
        className='bg-transparent focus:ring-0'
        gradientDuoTone='tealToLime'
        onClick={() => {
          handleClick('Sample 4');
        }}
      >
        Sample 4
      </Button>
      <Button
        outline
        pill
        className='bg-transparent focus:ring-0'
        gradientDuoTone='tealToLime'
        onClick={() => {
          handleClick('Sample 5');
        }}
      >
        Sample 5
      </Button>
      <Button
        outline
        pill
        className='bg-transparent focus:ring-0'
        gradientDuoTone='tealToLime'
        onClick={() => {
          handleClick('Sample 6');
        }}
      >
        Sample 6
      </Button>
      <Button
        outline
        pill
        className='bg-transparent focus:ring-0'
        gradientDuoTone='tealToLime'
        onClick={() => {
          handleClick('Sample 7');
        }}
      >
        Sample 7
      </Button>
    </div>
  );
}
