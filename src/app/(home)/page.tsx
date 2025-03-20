"use client";
import { useSetTestCode, useTestCode } from "@/app/zustand/store";
import ActionButtons from "@/components/home/action-buttons";
import QuestionSelector from "@/components/home/questions-selector";

function Page() {
  const testCode = useTestCode();
  const setTestCode = useSetTestCode();

  return (
    <div className="max-w-[75rem] grid grid-rows-[auto_1fr_auto] space-y-4 md:-space-y-[0.1em] gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 md:gap-10 md:px-8 mx-auto text-xs sm:text-sm md:text-base">
      <div className="flex gap-[0.75em]">
        <h2 className="text-[1.25em]">Test Code:</h2>
        <input
          type="text"
          className="border-b focus-visible:outline-none text-[1.1em] border-gray-300 w-full min-w-[3.25em] max-w-[5.75em]"
          onChange={(e) => setTestCode(e.target.value)}
          value={testCode}
        />
      </div>

      <QuestionSelector />

      <ActionButtons />
    </div>
  );
}

export default Page;
