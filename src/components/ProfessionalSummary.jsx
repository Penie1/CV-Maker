import PropTypes from "prop-types";
export default function ProfessionalSummary({
  professionalSummary,
  setProfessionalSummary,
}) {
  function handleChange(e) {
    setProfessionalSummary(e.target.value);
  }

  return (
    <div className="border-b  border-gray-300  pb-12">
      <label
        className="font-bold block mx-auto text-2xl border-b-2 border-yellow-500 max-w-fit mb-12"
        htmlFor="professionalSummary"
      >
        Professional Summary
      </label>
      <textarea
        required
        name="professionalSummary"
        className="bg-gray-100 p-2 focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border  border-slate-300 rounded-md border-1 w-full min-h-40 "
        id="professionalSummary"
        value={professionalSummary}
        onChange={handleChange}
      />
    </div>
  );
}

ProfessionalSummary.propTypes = {
  professionalSummary: PropTypes.string.isRequired,
  setProfessionalSummary: PropTypes.func.isRequired,
};
