"use client";
import { useCalculateResults } from "@/utils/calculate-results";

const SubjectResults = () => {
  const { subjectResults } = useCalculateResults();

  const getAccuracy = (correct: number, total: number) =>
    total > 0 ? ((correct / total) * 100).toFixed(2) + "%" : "0.00%";

  return (
    <div className="flex text-md gap-6 w-full">
      {Object.entries(subjectResults).map(([subject, data]) => (
        <div key={subject} className="border space-y-[0.5em] hover:bg-white/2 p-2 w-full rounded-lg">
          <h3 className="text-[0.85em] font-semibold">{subject}</h3>
          <p className="text-gray-400 text-[0.75em]">Total: {data.total}</p>
          <p className="text-green-400 text-[0.75em]">Correct: {data.correct}</p>
          <p className="text-red-400 text-[0.75em]">Incorrect: {data.incorrect}</p>
          <p className="text-yellow-400 text-[0.75em]">Unattempted: {data.unattempted}</p>
          <p className="text-blue-300 text-[0.75em]">
            Accuracy: {getAccuracy(data.correct, data.total)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SubjectResults;
