import React from "react";
import banner from "./assets/banner.jpg";
import Accordion, { AccordionItem } from "./Accordion";
import Personal from "./Personal";
import News from "./News";

export default function Portfolio() {
  return (
    <div className="flex-1 py-4 px-0 md:py-0 md:px-4">
      <div
        className="space-y-2 mb-4 rounded-lg text-white text-center h-40 flex justify-center items-center p-4"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 className="text-2xl font-bold">
          Turning Data Into Information, and Information Into Insight
        </h1>
      </div>
      <div className="space-y-2 mb-2">
        <Accordion value="0">
          <AccordionItem value="0" trigger="Hi, I'm Sjoerd Vink">
            <Personal />
          </AccordionItem>
          <AccordionItem value="1" trigger="Publications">
            <div></div>
          </AccordionItem>
          <AccordionItem value="2" trigger="News">
            <News />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
