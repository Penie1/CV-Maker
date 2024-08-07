import PropTypes from "prop-types";
import EducationalExp from "./components/EducationalExp";
import GeneralInfo from "./components/GeneralInfo";
import WorkExp from "./components/WorkExp";
import ProfessionalSummary from "./components/ProfessionalSummary";

export default function Form({
  generalInfo,
  setGeneralInfo,
  workExp,
  setWorkExp,
  educationalExp,
  setEducationalExp,
  professionalSummary,
  setProfessionalSummary,
  isSubmitted,
  setIsSubmitted,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  }
  if (isSubmitted) return;
  return (
    <form onSubmit={handleSubmit} className="grid gap-14 " autoComplete="on">
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <ProfessionalSummary
        professionalSummary={professionalSummary}
        setProfessionalSummary={setProfessionalSummary}
      />
      <WorkExp workExp={workExp} setWorkExp={setWorkExp} />
      <EducationalExp
        educationalExp={educationalExp}
        setEducationalExp={setEducationalExp}
      />
      <button
        className="border-1  border-amber-600 max-w-32 px-5 py-2 rounded-md  -col-start-2 bg-slate-700 text-gray-300 hover:text-yellow-500"
        type="submit"
      >
        DONE
      </button>
    </form>
  );
}

Form.propTypes = {
  generalInfo: PropTypes.object.isRequired,
  setGeneralInfo: PropTypes.func.isRequired,
  workExp: PropTypes.object.isRequired,
  setWorkExp: PropTypes.func.isRequired,
  educationalExp: PropTypes.object.isRequired,
  setEducationalExp: PropTypes.func.isRequired,
  professionalSummary: PropTypes.string.isRequired,
  setProfessionalSummary: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  setIsSubmitted: PropTypes.func.isRequired,
};
