"use client";
import { AnswerType, useAnswers, useSetAnswers } from "@/app/zustand/store";

type Props = {
  index: number;
};

function AnswerToggle({ index }: Props) {
  const answers = useAnswers();
  const setAnswers = useSetAnswers();
  const answerOptions: AnswerType[] = ["Correct", "Incorrect", "Unattempt"];

  return (
    <div className="flex gap-2">
      {answerOptions.map((answer) => (
        <button
          key={`${answer}-${index}`}
          className={`border p-[0.75em] rounded-sm cursor-pointer hover:bg-white hover:text-black min-w-[7rem] w-full text-center
            ${answers[index] === answer ? "bg-white text-black" : ""}
          `}
          onClick={() => setAnswers(index, answers[index] === answer ? null : answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default AnswerToggle;
