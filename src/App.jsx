import { useState } from "react";
import Form from "./Form";
import DisplayFormComponent from "./components/DisplayFormComponent";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
  });

  const [educationalExp, setEducationalExp] = useState({
    study: "",
    schoolName: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  });

  const [workExp, setWorkExp] = useState({
    job: "",
    company: "",
    responsibility: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  });
  const [professionalSummary, setProfessionalSummary] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleOnClick() {
    setIsSubmitted(!isSubmitted);
  }

  return (
    <main className="flex flex-col items-center gap-8">
      <div
        className={`text-sm text-bold text-slate-700 font-mono grid gap-6 min-h-dvh p-5 bg-gray-200 ${
          isSubmitted ? "sm:grid-cols-1" : "sm:grid-cols-2"
        }`}
      >
        <Form
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
          workExp={workExp}
          setWorkExp={setWorkExp}
          educationalExp={educationalExp}
          setEducationalExp={setEducationalExp}
          professionalSummary={professionalSummary}
          setProfessionalSummary={setProfessionalSummary}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
        <DisplayFormComponent
          generalInfo={generalInfo}
          workExp={workExp}
          educationalExp={educationalExp}
          professionalSummary={professionalSummary}
        />
      </div>

      {isSubmitted && (
        <button
          className="border border-slate-700 w-32 px-5 py-2 mb-3 rounded-md  -col-start-2  text-yellow-500 bg-slate-600 hover:text-slate-50 "
          onClick={handleOnClick}
        >
          Edit
        </button>
      )}
    </main>
  );
}

export default App;
