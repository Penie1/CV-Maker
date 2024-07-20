import PropTypes from "prop-types";
export default function ProfessionalSummary({
  professionalSummary,
  setProfessionalSummary,
}) {
  function handleChange(e) {
    setProfessionalSummary(e.target.value);
  }

  return (
    <>
      <label className="block" htmlFor="professionalSummary">
        Professional Summary
      </label>
      <textarea
        required
        name="professionalSummary"
        className="bg-gray-100   p-2  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border  border-slate-300 rounded-md border-1 sm:w-full w-2/3"
        id="professionalSummary"
        value={professionalSummary}
        onChange={handleChange}
      />
    </>
  );
}

ProfessionalSummary.propTypes = {
  professionalSummary: PropTypes.string.isRequired,
  setProfessionalSummary: PropTypes.func.isRequired,
};
