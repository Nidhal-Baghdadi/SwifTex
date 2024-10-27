import { Accordion } from 'flowbite-react';

import SampleButtonsGroup from './SampleButtonsGroup';

export default function RecommendationAccordion({ onData }) {
  const handleClick = (data) => {
    onData(data);
  };

  return (
    <Accordion alwaysOpen className='border-2'>
      <Accordion.Panel>
        <Accordion.Title className='bg-transparent text-black hover:bg-transparent focus:ring-0'>
          Samples
        </Accordion.Title>
        <Accordion.Content className='overflow-auto hover:resize-y'>
          <SampleButtonsGroup onData={handleClick} />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
