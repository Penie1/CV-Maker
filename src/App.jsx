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

  return (
    <main className="text-sm text-bold text-slate-700 font-sans grid sm:grid-cols-2 gap-6  min-h-dvh p-5 bg-opacity-50 bg-neutral-400 ">
      <Form
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        workExp={workExp}
        setWorkExp={setWorkExp}
        educationalExp={educationalExp}
        setEducationalExp={setEducationalExp}
        professionalSummary={professionalSummary}
        setProfessionalSummary={setProfessionalSummary}
      />
      <DisplayFormComponent
        generalInfo={generalInfo}
        workExp={workExp}
        educationalExp={educationalExp}
        professionalSummary={professionalSummary}
      />
    </main>
  );
}

export default App;
