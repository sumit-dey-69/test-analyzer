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
    <div className="space-y-4 grid grid-rows-[auto_1fr] text-xs sm:text-sm md:text-base w-full md:px-10 h-full">
      <h2 className="md:ml-[5em] text-lg font-bold text-center">
        Select Answers & Subjects
      </h2>
      <div className="space-y-[0.95em] min-h-[40vh] max-h-[62.75vh] overflow-y-scroll no-scrollbar mx-auto">
        {questions.map((question, index) => (
          <div
            key={`${question}-${index}`}
            className="flex max-md:flex-col space-y-[0.5em] md:space-y-[1em] md:flex-row justify-between md:justify-around md:gap-[2.5em] px-4 py-2"
          >
            <p className="max-w-[2.5em] text-[1.15em] w-full md:text-right">{question}</p>
            <div className="grid max-md:space-y-[0.75em] md:grid-cols-[auto_auto] md:gap-[2em]">
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
