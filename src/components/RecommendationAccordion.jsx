import { Accordion } from 'flowbite-react';

import SampleButtonsGroup from './SampleButtonsGroup';

export default function RecommendationAccordion({ onData }) {
  const handleClick = (data) => {
    onData(data);
  };

  return (
    <Accordion alwaysOpen>
      <Accordion.Panel>
        <Accordion.Title className='border-0 bg-transparent text-black hover:bg-transparent focus:ring-0'>
          Samples
        </Accordion.Title>
        <Accordion.Content className='overflow-auto hover:resize-y'>
          <SampleButtonsGroup onData={handleClick} />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
