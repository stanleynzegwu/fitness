"use client";

import { useState } from "react";
import CountUp from "react-countup";

import { numberAndSuffix } from "../utils/utilityFunctions";

const ShowNumbers = ({ value, name }: { value: string; name: string }) => {
  const [hasCountEnded, setHasCoutEnded] = useState(false);
  const [num, str] = numberAndSuffix(value);
  return (
    <div className="flex flex-col flex-1 items-center border-r-[1px] border-gray-200 last:border-0">
      <div>
        <span className="text-2xl font-semibold text-purple-700">
          <CountUp
            end={Number(num)}
            duration={3}
            enableScrollSpy={true}
            scrollSpyDelay={500}
            onEnd={() => {
              setHasCoutEnded(true);
            }}
          />
        </span>
        {hasCountEnded && <span className="text-2xl font-semibold text-purple-700">{str}</span>}
      </div>
      <span className="text-[14px] sm:text-sm font-medium text-gray-500">{name}</span>
    </div>
  );
};

export default ShowNumbers;
