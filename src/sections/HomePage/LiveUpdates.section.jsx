import { Card } from "@/components/ui/card";
import { LIVE_UPDATES } from "@/constants/HomeData";
import React from "react";

const LiveUpdates = () => {
  return (
    <section className="bg-gray-200 py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Live Updates & News
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {LIVE_UPDATES.map((update, idx) => (
          <Card
            title={update}
            description={"Real-time data coming soon..."}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default LiveUpdates;
