"use client";
import { useSetTestCode, useTestCode } from "@/app/zustand/store";
import ActionButtons from "@/components/home/action-buttons";
import QuestionSelector from "@/components/home/questions-selector";

function Page() {
  const testCode = useTestCode();
  const setTestCode = useSetTestCode();

  return (
    <div className="max-w-[75rem] grid grid-rows-[auto_1fr_auto] gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 md:gap-10 md:px-8 mx-auto text-xs sm:text-sm md:text-base">
      <div className="flex gap-4">
        <h2>Test Code:</h2>
        <input
          type="text"
          className="border-b focus-visible:outline-none border-gray-300 w-[5.5em]"
          value={testCode}
          onChange={(e) => setTestCode(e.target.value)}
        />
      </div>

      <QuestionSelector />

      <ActionButtons />
    </div>
  );
}

export default Page;
