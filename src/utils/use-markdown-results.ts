import { useAnswers, useSubjects, useTestCode } from "@/app/zustand/store";

export const useGenerateMarkdown = () => {
  const answers = useAnswers();
  const subjects = useSubjects();
  const testCode = useTestCode();

  return () => {
    const totalMarks = 300;

    const categorizedResults: Record<
      "Correct" | "Incorrect" | "Unattempt",
      Record<string, number[]>
    > = {
      Correct: {},
      Incorrect: {},
      Unattempt: {},
    };

    Object.entries(answers).forEach(([key, answer]) => {
      const index = Number(key) + 1;
      const subject = subjects[Number(key)] || "Unknown";

      if (!categorizedResults[answer!][subject]) {
        categorizedResults[answer!]![subject] = [];
      }
      categorizedResults[answer!]![subject].push(index);
    });

    const formatSection = (category: "Correct" | "Incorrect" | "Unattempt") => {
      return Object.entries(categorizedResults[category])
        .map(([subject, questions]) => `${subject}(${questions.length}): ${questions.join(", ")}`)
        .join("\n") || "_None_";
    };

    const totalCorrect = categorizedResults["Correct"];
    const totalMaths = totalCorrect["Maths"]?.length || 0;
    const totalComputer = totalCorrect["Computer"]?.length || 0;
    const totalReasoning = totalCorrect["Reasoning"]?.length || 0;

    const mathsAccuracy = ((totalMaths / (totalMaths + totalComputer + totalReasoning || 1)) * 100).toFixed(2);
    const computerAccuracy = ((totalComputer / (totalMaths + totalComputer + totalReasoning || 1)) * 100).toFixed(2);
    const reasoningAccuracy = ((totalReasoning / (totalMaths + totalComputer + totalReasoning || 1)) * 100).toFixed(2);

    return `# 📝 Test Results

**Test Code:** ${testCode || "N/A"}  

---

## ❌ Incorrect:
${formatSection("Incorrect")}

---

## ⏳ Unattempt:
${formatSection("Unattempt")}

---

## ✅ Correct:
${formatSection("Correct")}

---

### 📊 Summary

**Total Marks Obtained:** _.../${totalMarks}_

**Total Maths Questions:** _${totalMaths}_
**Total Computer Questions:** _${totalComputer}_
**Total Reasoning Questions:** _${totalReasoning}_

**Maths Accuracy:** _${mathsAccuracy}%_
**Computer Accuracy:** _${computerAccuracy}%_
**Reasoning Accuracy:** _${reasoningAccuracy}%_

---

💡 *Great job! Keep practicing to improve your accuracy!* 🎯
  `;
  };
};
