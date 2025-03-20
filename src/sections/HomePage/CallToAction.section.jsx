import { Button } from "@/components/ui/button";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-green-600 text-white text-center py-12 px-4">
      <h2 className="text-3xl font-semibold">Join AgriNexus Today!</h2>
      <p className="mt-2">
        Stay updated on farming trends & get financial support.
      </p>
      <div className="mt-4">
        <Button className="bg-white text-green-600 hover:bg-gray-200">
          Sign Up for Free
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
