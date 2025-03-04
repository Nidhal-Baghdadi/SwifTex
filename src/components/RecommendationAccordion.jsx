import { Accordion } from 'flowbite-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import SampleButtonsGroup from './SampleButtonsGroup';

export default function RecommendationAccordion({ onData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (data) => {
    onData(data);
  };

  return (
    <Accordion alwaysOpen>
      <Accordion.Panel>
        <Accordion.Title
          className='bg-transparent text-black hover:bg-transparent focus:ring-0'
          onClick={() => setIsOpen(!isOpen)}
        >
          Samples
        </Accordion.Title>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Accordion.Content className='overflow-auto hover:resize-y'>
            <SampleButtonsGroup onData={handleClick} />
          </Accordion.Content>
        </motion.div>
      </Accordion.Panel>
    </Accordion>
  );
}
