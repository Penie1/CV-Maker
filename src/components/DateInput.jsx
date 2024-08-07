import PropTypes from "prop-types";
import months from "months";
import { startYears, endYears } from "./yearsArrayList";

export default function DateInput({ exprience, handleChange, id }) {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex justify-between">
        <div>
          <label className=" block mb-2 " htmlFor={id.startMonth}>
            Start Month
          </label>

          <select
            className="p-2 w-40  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border border-slate-300 rounded-md border-1"
            name="startMonth"
            required
            id={id.startMonth}
            value={exprience.startMonth}
            onChange={handleChange}
          >
            <option className="text-gray-400 ">Months</option>
            {months.map((mon) => (
              <option key={mon} value={mon.slice(0, 3)}>
                {mon}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block  mb-2" htmlFor={id.startYear}>
            Start Year
          </label>
          <select
            className="p-2 w-40 focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border border-slate-300 rounded-md border-1"
            name="startYear"
            required
            id={id.startYear}
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

      <div className="flex justify-between">
        <div>
          <label className="block  mb-2" htmlFor={id.endMonth}>
            End Month
          </label>
          <select
            className="p-2 w-40 focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border border-slate-300 rounded-md border-1"
            name="endMonth"
            required
            id={id.endMonth}
            value={exprience.endMonth}
            onChange={handleChange}
          >
            <option className="text-gray-400">Months</option>
            {months.map((mon) => (
              <option key={mon} value={mon.slice(0, 3)}>
                {mon}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block  mb-2" htmlFor={id.endYear}>
            End Year
          </label>
          <select
            className="p-2 w-40 focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border border-slate-300 rounded-md border-1"
            name="endYear"
            required
            id={id.endYear}
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
    </div>
  );
}

DateInput.propTypes = {
  exprience: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.object.isRequired,
};
