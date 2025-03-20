import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="px-6 py-12 bg-gray-100 my-4 rounded-lg">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start gap-8">
          {/* Left Section - Title */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-gray-600">
              Find answers to the most common questions about our platform.
            </p>
          </div>

          {/* Right Section - Accordion */}
          <div className="md:w-2/3">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is AgriNexus?</AccordionTrigger>
                <AccordionContent>
                  AgriNexus is a platform that connects farmers with essential
                  agricultural products, financial services, and expert
                  guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How do I purchase products?</AccordionTrigger>
                <AccordionContent>
                  You can browse products on our marketplace and place orders
                  directly through the platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Are there financial services available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We offer loan facilities, government assistance tracking,
                  and financial consultation for farmers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Is expert consultation free?
                </AccordionTrigger>
                <AccordionContent>
                  Some expert consultations are free, while others may have a
                  small fee depending on the service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How can I contact customer support?
                </AccordionTrigger>
                <AccordionContent>
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
