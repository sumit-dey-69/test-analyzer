"use client";
import { useReset, useSetTestCode, useTestCode } from "@/app/zustand/store";
import Button from "@/components/button";
import QuestionSelector from "@/components/home/questions-selector";
import { downloadMarkdown } from "@/utils/download-markdown";
import { useGenerateMarkdown } from "@/utils/use-markdown-results";
import { useRouter } from "next/navigation";

function Page() {
  const testCode = useTestCode();
  const setTestCode = useSetTestCode();
  const reset = useReset();
  const router = useRouter();
  const generateMarkdown = useGenerateMarkdown();

  const handleDownload = () => {
    const markdownContent = generateMarkdown();
    downloadMarkdown(markdownContent);
  };

  return (
    <div className="max-w-[75rem] grid grid-rows-[auto_1fr] gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 md:gap-10 md:px-8 mx-auto text-xs sm:text-sm md:text-base">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <h2>Test Code:</h2>
          <input
            type="text"
            className="border-b focus-visible:outline-none border-gray-300 w-[5.5em]"
            value={testCode}
            onChange={(e) => setTestCode(e.target.value)}
          />
        </div>
        <Button onClick={() => router.push("/result")}>View Results</Button>
      </div>

      <QuestionSelector />

      <div className="w-full flex gap-5 justify-center">
        <Button onClick={reset}>Reset</Button>
        <Button onClick={handleDownload}>Download</Button>
      </div>
    </div>
  );
}

export default Page;
