import { Button } from "@/components/ui/button";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-green-600 text-white text-center py-12 px-4 mb-4">
      <div className="py-8 px-4 sm:py-12 sm:px-8 lg:px-16 xl:px-20 text-center">
        <h2 className="text-3xl font-semibold">Join AgriNexus Today!</h2>
        <p className="mt-2">
          Stay updated on farming trends & get financial support.
        </p>
        <div className="mt-4">
          <Button className="bg-white text-green-600 hover:bg-gray-200">
            Sign Up for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
