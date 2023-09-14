"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: { id: any; open: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function BlogRelatedData() {
  const [open, setOpen] = React.useState(0);
  const [open2, setOpen2] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  const handleOpen2 = (value: any) => setOpen2(open2 === value ? 0 : value);

  return (
    <div className="container py-16 px-5">
      <div className="flex items-center justify-center  flex-col  space-y-4">
        <div className=" bg-white p-8 rounded-lg ">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)} className="">
              10 Tips for Writing Engaging Blog Posts
            </AccordionHeader>
            <AccordionBody>
              1. Start with a captivating headline...\n2. Use relevant images to
              illustrate your points...\n3. Write in a clear and concise
              manner...\n4. Use bullet points and subheadings to organize your
              content...
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              The Importance of SEO in Blogging
            </AccordionHeader>
            <AccordionBody>
              Search engine optimization (SEO) is crucial for bloggers...\nBy
              optimizing your blog posts for search engines, you can increase
              your visibility...\nSome key SEO practices include keyword
              research, on-page optimization, and building high-quality
              backlinks...
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Effective Blog Monetization Strategies
            </AccordionHeader>
            <AccordionBody>
              Monetizing your blog can be a lucrative endeavor...\n1. Google
              AdSense: Display ads on your blog and earn revenue...\n2.
              Affiliate Marketing: Promote products or services and earn
              commissions...\n3. Sponsored Posts: Partner with brands for
              sponsored content...\n4. Sell Digital Products: Create and sell
              ebooks, courses, or digital downloads...
            </AccordionBody>
          </Accordion>
        </div>
        <div className="  bg-white p-8 rounded-lg ">
          <Accordion open={open2 === 1} icon={<Icon id={1} open={open2} />}>
            <AccordionHeader onClick={() => handleOpen2(1)}>
              10 Tips for Writing Engaging Blog Posts
            </AccordionHeader>
            <AccordionBody>
              1. Start with a captivating headline...\n2. Use relevant images to
              illustrate your points...\n3. Write in a clear and concise
              manner...\n4. Use bullet points and subheadings to organize your
              content...
            </AccordionBody>
          </Accordion>
          <Accordion open={open2 === 2} icon={<Icon id={2} open={open2} />}>
            <AccordionHeader onClick={() => handleOpen2(2)}>
              The Importance of SEO in Blogging
            </AccordionHeader>
            <AccordionBody>
              Search engine optimization (SEO) is crucial for bloggers...\nBy
              optimizing your blog posts for search engines, you can increase
              your visibility...\nSome key SEO practices include keyword
              research, on-page optimization, and building high-quality
              backlinks...
            </AccordionBody>
          </Accordion>
          <Accordion open={open2 === 3} icon={<Icon id={3} open={open2} />}>
            <AccordionHeader onClick={() => handleOpen2(3)}>
              Effective Blog Monetization Strategies
            </AccordionHeader>
            <AccordionBody>
              Monetizing your blog can be a lucrative endeavor...\n1. Google
              AdSense: Display ads on your blog and earn revenue...\n2.
              Affiliate Marketing: Promote products or services and earn
              commissions...\n3. Sponsored Posts: Partner with brands for
              sponsored content...\n4. Sell Digital Products: Create and sell
              ebooks, courses, or digital downloads...
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
