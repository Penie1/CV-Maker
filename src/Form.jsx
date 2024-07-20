import PropTypes from "prop-types";
import EducationalExp from "./components/EducationalExp";
import GeneralInfo from "./components/GeneralInfo";
import WorkExp from "./components/WorkExp";

export default function Form({
  generalInfo,
  setGeneralInfo,
  workExp,
  setWorkExp,
  educationalExp,
  setEducationalExp,
}) {
  function handelSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handelSubmit} className="grid gap-14 ">
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />

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
  generalInfo: PropTypes.object,
  setGeneralInfo: PropTypes.func,
  workExp: PropTypes.object,
  setWorkExp: PropTypes.func,
  educationalExp: PropTypes.object,
  setEducationalExp: PropTypes.func,
};
