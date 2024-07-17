import PropTypes from "prop-types";

export default function WorkExp({ workExp, setWorkExp, handelForm }) {
  function handleChange(e) {
    setWorkExp({ ...workExp, [e.target.name]: e.target.value });
  }

  return (
    <form className=" border-2 border-slate-800" onSubmit={handelForm}>
      <label htmlFor="job-title">Job Title</label>
      <input
        name="job"
        required
        type="text"
        id="job-title"
        placeholder="Software Enginner"
        value={workExp.job}
        onChange={handleChange}
      />
      <label htmlFor="company-name">Company Name</label>
      <input
        name="company"
        required
        type="text"
        id="company-name"
        placeholder="Meta"
        value={workExp.company}
        onChange={handleChange}
      />
      <label htmlFor="start-date">Start Date</label>
      <input
        name="startDate"
        required
        type="date"
        id="start-date"
        value={workExp.startDate}
        onChange={handleChange}
      />
      <label htmlFor="end-date">End Date</label>
      <input
        name="endDate"
        required
        type="date"
        id="End-date"
        value={workExp.endDate}
        onChange={handleChange}
      />
      <label htmlFor="responsibility">Main Responsibilities</label>
      <textarea
        name="responsibility"
        className=" bg-orange-300"
        type="text-area"
        id="responsibility"
        value={workExp.responsibility}
        onChange={handleChange}
      />
      <button className="border-2 border-amber-600" type="submit">
        Continue
      </button>
    </form>
  );
}
WorkExp.propTypes = {
  handelForm: PropTypes.func,
  setWorkExp: PropTypes.func,
  workExp: PropTypes.object,
};
