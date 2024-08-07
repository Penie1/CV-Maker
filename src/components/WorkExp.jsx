import PropTypes from "prop-types";
import TextInput from "./TextInput";
import DateInput from "./DateInput";
export default function WorkExp({ workExp, setWorkExp }) {
  const IDs = {
    startMonth: "work-start-mon",
    endMonth: "work-end-mon",
    startYear: "work-start-year",
    endYear: "work-end-year",
  };
  function handleChange(e) {
    setWorkExp({ ...workExp, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1 className="font-bold mx-auto text-2xl border-b-2 border-yellow-500 max-w-fit">
        Work Experience
      </h1>
      <section className="grid pb-12   gap-10 border-b  border-gray-300">
        <div className="flex flex-col gap-3 ">
          <label className="block" htmlFor="job-title">
            Job Title
          </label>

          <TextInput
            name="job"
            id="job-title"
            value={workExp.job}
            placeholder="Pharmacist"
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label className="block" htmlFor="company-name">
            Company Name
          </label>
          <TextInput
            name="company"
            id="company-name"
            value={workExp.company}
            placeholder="Google"
            handleChange={handleChange}
          />
        </div>
        <DateInput id={IDs} exprience={workExp} handleChange={handleChange} />
        <div className="flex flex-col gap-3 ">
          <label className="block" htmlFor="responsibility">
            Main Responsibilities
          </label>
          <textarea
            name="responsibility"
            className="bg-gray-100   p-2  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border  border-slate-300 rounded-md border-1 w-full min-h-40 "
            id="responsibility"
            value={workExp.responsibility}
            onChange={handleChange}
          />
        </div>
      </section>
    </>
  );
}
WorkExp.propTypes = {
  setWorkExp: PropTypes.func,
  workExp: PropTypes.object,
};
