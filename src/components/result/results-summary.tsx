"use client";
import { useCalculateResults } from "@/utils/calculate-results";
import { CheckCircle, HelpCircle, XCircle } from "lucide-react";
import { ReactNode } from "react";

const ResultsSummary = () => {
  const { correctCount, incorrectCount, unattemptCount, totalScore } =
    useCalculateResults();

  return (
    <div className="space-y-5">
      <p className="font-medium">
        Total Score: <span className="text-gray-300">{totalScore}</span> / 300
      </p>
      <div className="grid grid-cols-3 gap-[1.5em]">
        <StatBox
          icon={<CheckCircle className="size-7" />}
          label="Correct"
          value={correctCount}
        />
        <StatBox
          icon={<XCircle className="size-7" />}
          label="Incorrect"
          value={incorrectCount}
        />
        <StatBox
          icon={<HelpCircle className="size-7" />}
          label="Unattempt"
          value={unattemptCount}
        />
      </div>
    </div>
  );
};

const StatBox = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: number;
}) => (
  <div className="flex flex-col items-center justify-center px-4 py-2 border space-y-2 rounded-lg hover:bg-white hover:text-black">
    {icon}
    <p className="font-semibold">{value}</p>
    <p className="text-[0.85em]">{label}</p>
  </div>
);

export default ResultsSummary;
