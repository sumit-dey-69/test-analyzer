"use client";
import { useAnswers, useSubjects } from "@/app/zustand/store";

const getColor = (answer: "Correct" | "Incorrect" | "Unattempt" | null) => {
  switch (answer) {
    case "Correct":
      return "text-green-400";
    case "Incorrect":
      return "text-red-500";
    case "Unattempt":
      return "text-yellow-400";
    default:
      return "text-gray-400";
  }
};

function DetailedSection() {
  const answers = useAnswers();
  const subjects = useSubjects();

  return (
    <div className="border p-[1.25em] rounded-lg space-y-[0.5em]">
      <h2 className="text-[0.95em] font-semibold">Detailed Selection</h2>
      <ul className="space-y-3">
        {Object.keys(answers).map((index) => {
          const questionIndex = Number(index);
          const answer = answers[questionIndex] ?? "Unattempt"; // Handle null case
          const subject = subjects[questionIndex] ?? "No Subject"; // Handle missing subject

          return (
            <li
              key={questionIndex}
              className="flex justify-between items-center text-black  hover:text-white bg-neutral-200 p-3 rounded-md hover:bg-black transition-all"
            >
              <span className="text-[0.75em] font-semibold">Q{questionIndex + 1}:</span>
              <span className={`font-bold text-[0.85em] ${getColor(answer)}`}>
                {answer}
              </span>
              <span className="text-[0.75em] font-medium">{subject}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DetailedSection;
