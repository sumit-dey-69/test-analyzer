"use client";
import { useReset } from "@/app/zustand/store";
import Button from "@/components/button";
import { downloadMarkdown } from "@/utils/download-markdown";
import { useGenerateMarkdown } from "@/utils/use-markdown-results";
import { useRouter } from "next/navigation";
function ActionButtons() {
  const router = useRouter();
  const reset = useReset();
  const generateMarkdown = useGenerateMarkdown();

  const handleDownload = () => {
    const markdownContent = generateMarkdown();
    downloadMarkdown(markdownContent);
  };

  return (
    <div className="w-full flex gap-5 justify-center md:ml-[3em]">
      <Button onClick={reset}>Reset</Button>
      <Button onClick={handleDownload}>Download</Button>
      <Button onClick={() => router.push("/result")}>View Results</Button>
    </div>
  );
}

export default ActionButtons;
