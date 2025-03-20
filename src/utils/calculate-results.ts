import { SubjectType, useAnswers, useSubjects } from "@/app/zustand/store";

export type SubjectResults = Record<
  Exclude<SubjectType, null>,
  { total: number; correct: number; incorrect: number; unattempted: number }
>;

export interface ResultSummary {
  correctCount: number;
  incorrectCount: number;
  unattemptCount: number;
  totalScore: number;
  subjectResults: SubjectResults;
}

export function useCalculateResults(): ResultSummary {
  const answers = useAnswers();
  const subjects = useSubjects();

  const uniqueSubjects = Object.values(subjects)
    .filter(
      (subject): subject is Exclude<SubjectType, null> => subject !== null
    )
    .reduce<SubjectResults>((acc, subject) => {
      if (!acc[subject]) {
        acc[subject] = { total: 0, correct: 0, incorrect: 0, unattempted: 0 };
      }
      return acc;
    }, {} as SubjectResults);

  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptCount = 0;

  // Process each answer
  Object.entries(answers).forEach(([key, answer]) => {
    const questionIndex = Number(key);
    const subject = subjects[questionIndex];

    if (!subject || !(subject in uniqueSubjects)) return; // Skip unknown subjects

    uniqueSubjects[subject].total++;

    if (answer === "Correct") {
      uniqueSubjects[subject].correct++;
      correctCount++;
    } else if (answer === "Incorrect") {
      uniqueSubjects[subject].incorrect++;
      incorrectCount++;
    } else if (answer === "Unattempt") {
      uniqueSubjects[subject].unattempted++;
      unattemptCount++;
    }
  });

  const totalScore = correctCount * 4 - incorrectCount;

  return {
    correctCount,
    incorrectCount,
    unattemptCount,
    totalScore,
    subjectResults: uniqueSubjects,
  };
}
