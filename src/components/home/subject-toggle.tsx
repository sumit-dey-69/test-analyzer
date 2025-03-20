"use client";
import { SubjectType, useSetSubjects, useSubjects } from "@/app/zustand/store";

type Props = {
  index: number;
};

function SubjectToggle({ index }: Props) {
  const subjects = useSubjects();
  const setSubjects = useSetSubjects();
  const subjectOptions: SubjectType[] = ["Maths", "Computer", "Reasoning"];

  return (
    <div className="flex gap-2">
      {subjectOptions.map((subject) => (
        <button
          key={`${subject}-${index}`}
          className={`border p-[0.75em] rounded-sm cursor-pointer hover:bg-white hover:text-black min-w-[7rem] w-full text-center
            ${subjects[index] === subject ? "bg-white text-black" : ""}
          `}
          onClick={() => setSubjects(index, subjects[index] === subject ? null : subject)}
        >
          {subject}
        </button>
      ))}
    </div>
  );
}

export default SubjectToggle;
