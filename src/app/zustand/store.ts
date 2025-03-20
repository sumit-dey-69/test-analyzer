import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AnswerType = "Correct" | "Incorrect" | "Unattempt" | null;
export type SubjectType = "Maths" | "Computer" | "Reasoning" | null;

type Store = {
  testCode: string;
  setTestCode: (code: string) => void;
  answers: Record<number, AnswerType>;
  setAnswers: (index: number, answer: AnswerType) => void;
  subjects: Record<number, SubjectType>;
  setSubjects: (index: number, subject: SubjectType) => void;
  reset: () => void;
  correctCount: () => number;
  incorrectCount: () => number;
  unattemptCount: () => number;
};

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      testCode: "",
      answers: {},
      subjects: {},

      setTestCode: (code) => set({ testCode: code }),

      setAnswers: (index, answer) => {
        set((state) => ({
          answers: {
            ...state.answers,
            [index]: answer,
          },
        }));
      },

      setSubjects: (index, subject) => {
        set((state) => ({
          subjects: {
            ...state.subjects,
            [index]: subject,
          },
        }));
      },

      reset: () => {
        set({
          testCode: "",
          answers: {},
          subjects: {},
        });
      },

      correctCount: () =>
        Object.values(get().answers).filter((answer) => answer === "Correct")
          .length,

      incorrectCount: () =>
        Object.values(get().answers).filter((answer) => answer === "Incorrect")
          .length,

      unattemptCount: () =>
        Object.values(get().answers).filter((answer) => answer === "Unattempt")
          .length,
    }),
    {
      name: "test-store", // Key used in localStorage
    }
  )
);

export const useTestCode = () => useStore((state) => state.testCode);
export const useSetTestCode = () => useStore((state) => state.setTestCode);
export const useAnswers = () => useStore((state) => state.answers);
export const useSetAnswers = () => useStore((state) => state.setAnswers);
export const useSubjects = () => useStore((state) => state.subjects);
export const useSetSubjects = () => useStore((state) => state.setSubjects);
export const useReset = () => useStore((state) => state.reset);
export const useCorrectCount = () => useStore((state) => state.correctCount);
export const useIncorrectCount = () =>
  useStore((state) => state.incorrectCount);
export const useUnattemptCount = () =>
  useStore((state) => state.unattemptCount);
