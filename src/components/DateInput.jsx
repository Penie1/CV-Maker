import PropTypes from "prop-types";
import months from "months";
import { startYears, endYears } from "./yearsArrayList";

export default function DateInput({ exprience, handleChange }) {
  return (
    <>
      <div className="flex flex-col gap-3 ">
        <label className="block" htmlFor="start-date">
          Start date
        </label>
        <div className="flex gap-2">
          <select
            className="p-2  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border border-slate-300 rounded-md border-1"
            name="startMonth"
            required
            id="start-month"
            value={exprience.startMonth}
            onChange={handleChange}
          >
            <option className="text-gray-400">Months</option>
            {months.map((mon) => (
              <option key={mon} value={mon}>
                {mon}
              </option>
            ))}
          </select>
          <select
            className="p-2  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border border-slate-300 rounded-md border-1"
            name="startYear"
            required
            id="start-year"
            value={exprience.startYear}
            onChange={handleChange}
          >
            <option className="text-gray-400">Years</option>
            {startYears.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <label className="block" htmlFor="end-date">
          End date
        </label>
        <div className="flex gap-2">
          <select
            className="p-2  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border border-slate-300 rounded-md border-1"
            name="endMonth"
            required
            id="end-month"
            value={exprience.endMonth}
            onChange={handleChange}
          >
            <option className="text-gray-400">Months</option>
            {months.map((mon) => (
              <option key={mon}>{mon}</option>
            ))}
          </select>
          <select
            className="p-2  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border border-slate-300 rounded-md border-1"
            name="endYear"
            required
            id="end-year"
            value={exprience.endYear}
            onChange={handleChange}
          >
            <option className="text-gray-400">Years</option>
            {endYears.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

DateInput.propTypes = {
  exprience: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
