import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="mx-auto text-center bg-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
          {/* Left Section - Title */}
          <div className="md:w-1/2 flex flex-col justify-center items-center text-left md:items-start">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Find answers to the most common questions about our platform.
            </p>
          </div>

          {/* Right Section - Accordion */}
          <div className="w-[100%]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  What is AgriNexus?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base">
                  AgriNexus is a platform that connects farmers with essential
                  agricultural products, financial services, and expert
                  guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  How do I purchase products?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base">
                  You can browse products on our marketplace and place orders
                  directly through the platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  Are there financial services available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base">
                  Yes! We offer loan facilities, government assistance tracking,
                  and financial consultation for farmers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">
                  Is expert consultation free?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base">
                  Some expert consultations are free, while others may have a
                  small fee depending on the service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg">
                  How can I contact customer support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base">
                  You can reach our support team via email, phone, or live chat
                  available on our website.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
