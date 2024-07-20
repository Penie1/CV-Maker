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

  return (
    <main className="text-sm text-bold text-slate-700 font-mono grid sm:grid-cols-2 gap-6  min-h-dvh p-5  bg-gray-200 ">
      <Form
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        workExp={workExp}
        setWorkExp={setWorkExp}
        educationalExp={educationalExp}
        setEducationalExp={setEducationalExp}
      />
      <DisplayFormComponent
        generalInfo={generalInfo}
        workExp={workExp}
        educationalExp={educationalExp}
      />
    </main>
  );
}

export default App;
