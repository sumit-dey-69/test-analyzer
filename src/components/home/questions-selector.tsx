"use client";
import AnswerToggle from "@/components/home/answer-toggle";
import SubjectToggle from "@/components/home/subject-toggle";

type Props = {
  totalQuestions?: number;
};

function QuestionSelector({ totalQuestions = 75 }: Props) {
  const questions = Array.from(
    { length: totalQuestions },
    (_, i) => `Q${i + 1}.`
  );

  return (
    <div className="space-y-5 flex flex-col text-xs sm:text-sm md:text-base w-full md:px-10 h-full">
      <h2 className="md:ml-[8em] text-lg font-bold text-center">
        Select Answers & Subjects
      </h2>
      <div className="space-y-[0.95em] max-h-[calc(100vh-20rem)] overflow-y-scroll no-scrollbar">
        {questions.map((question, index) => (
          <div
            key={`${question}-${index}`}
            className="flex max-md:flex-col space-y-[0.5em] md:space-y-[1em] md:flex-row justify-between md:justify-around sm:gap-[2.5em] mx-auto"
          >
            <p className="max-w-[3.5em] w-full md:text-right">{question}</p>
            <div className="max-md:space-y-[0.25em] md:w-full md:justify-evenly sm:flex sm:gap-[2.5em]">
              <AnswerToggle index={index} />
              <SubjectToggle index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionSelector;
