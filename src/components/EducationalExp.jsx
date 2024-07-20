import PropTypes from "prop-types";
import TextInput from "./TextInput";
import DateInput from "./DateInput";
export default function EducationalExp({ educationalExp, setEducationalExp }) {
  function handleChange(e) {
    setEducationalExp({ ...educationalExp, [e.target.name]: e.target.value });
  }

  return (
    <>
      {" "}
      <h1 className="font-bold text-2xl border-b-2 border-yellow-500 max-w-fit">
        Educational Experience
      </h1>
      <section className="grid  md:grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-3 ">
          <label className="block" htmlFor="study">
            Field of study
          </label>
          <TextInput
            name="study"
            id="study"
            value={educationalExp.study}
            placeholder="Electrical Enginnering"
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label className="block" htmlFor="school-name">
            School Name
          </label>
          <TextInput
            name="schoolName"
            id="school-name"
            value={educationalExp.schoolName}
            placeholder="University of Gondar"
            handleChange={handleChange}
          />
        </div>

        <DateInput exprience={educationalExp} handleChange={handleChange} />
      </section>
    </>
  );
}

EducationalExp.propTypes = {
  setEducationalExp: PropTypes.func.isRequired,
  educationalExp: PropTypes.shape({
    study: PropTypes.string.isRequired,
    schoolName: PropTypes.string.isRequired,
    startMonth: PropTypes.string.isRequired,
    startYear: PropTypes.string.isRequired,
    endMonth: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
  }).isRequired,
};
