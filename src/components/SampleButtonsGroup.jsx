import { Button } from 'flowbite-react';
import samples from 'public/samples';

export default function SampleButtonsGroup({ onData }) {
  const handleClick = (key) => {
    onData(samples[key]);
  };

  return (
    <div className='flex flex-wrap gap-2'>
      {Object.keys(samples).map((key) => (
        <Button
          key={key}
          outline
          pill
          className='bg-transparent focus:ring-0'
          gradientDuoTone='tealToLime'
          onClick={() => handleClick(key)}
        >
          {key}
        </Button>
      ))}
    </div>
  );
}
