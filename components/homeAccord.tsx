"use client"

import {Accordion, AccordionItem} from "@heroui/react";
import Insta from '@/components/ig'

export default function HomeAccord() {
  const defaultContent =
    "Lorem ipsum dolor sit amet.";

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Ditjen PKH Kementan RI" title="Ditjen PKH Kementan RI">
        <Insta/>
      </AccordionItem>
      {/* <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem> */}
    </Accordion>
  );
}
