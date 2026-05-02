import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Values.css";

const items = [
  {
    title: "Best Interest Rates",
    body: "We offer competitive interest rates to help you own your dream home without financial strain.",
  },
  {
    title: "Transparent Transactions",
    body: "No hidden charges. Every step of the buying process is clear and transparent.",
  },
  {
    title: "Trusted by Thousands",
    body: "We have helped thousands of families find homes they love across different locations.",
  },
];

function Values() {
  return (
    <section className="kef" id="values">
      <div className="left">
        <div className="image-outer">
          <div className="image-ring" />
          <div className="image">
            <img src="kev.png" alt="values" />
          </div>
         </div>
      </div>

      <div className="right">
        <span className="lil">Our Values</span>
        <span className="Cherrie">
          Values We Give <em>to You</em>
        </span>
        <span className="kj">
          We always provide the best services to our customers. Visit us before the offer ends.
        </span>

        <Accordion allowZeroExpanded className="accordion">
          {items.map((item, index) => (
            <AccordionItem key={index} className="accordion-item-custom">
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-btn">
                  {item.title}
                  <MdOutlineArrowDropDown className="arrow-icon" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-panel">
                <p>{item.body}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Values;