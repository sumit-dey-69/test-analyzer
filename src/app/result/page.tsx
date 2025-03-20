import ResultsSummary from "../../components/result/results-summary";
import SubjectResults from "../../components/result/subject-results";
import DetailedSelection from "../../components/result/detailed-section";

const ResultPage = () => {
  return (
    <div className="max-w-[75rem] mx-auto p-8 space-y-6">
      <ResultsSummary />
      <SubjectResults />
      <DetailedSelection />
    </div>
  );
};

export default ResultPage;
