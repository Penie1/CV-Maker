import PropTypes from "prop-types";

export default function DisplayFormComponent({
  generalInfo,
  workExp,
  educationalExp,
  professionalSummary,
}) {
  const fullName =
    `${generalInfo.firstName}  ${generalInfo.lastName}`.toUpperCase();

  const workStartDate = `${workExp.startMonth} ${workExp.startYear}`;
  const workEndDate = `${workExp.endMonth} ${workExp.endYear} `;
  const educationStartDate = `${educationalExp.startMonth} ${educationalExp.startYear}`;
  const educationEndDate = `${educationalExp.endMonth} ${educationalExp.endYear}`;

  return (
    <section className=" px-4 py-12  h-max sticky top-2 bg-zinc-100 flex flex-col gap-14 font-garamond text-base min-h-dvh">
      <div>
        <h1 className="text-3xl text-center mb-4"> {fullName}</h1>
        <ul className="flex gap-10 bg-neutral-700 p-2 text-white">
          <li>{generalInfo.phoneNum}</li>
          <li>{generalInfo.email}</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold mx-auto text-lg border-b-2 border-yellow-500 max-w-fit mb-6">
          Professional Summary
        </h2>
        <p>{professionalSummary}</p>
      </div>
      <div>
        <h2 className="font-bold mx-auto text-lg border-b-2 border-yellow-500 max-w-fit mb-6">
          Work Experience
        </h2>
        <p className="font-bold mb-2"> {workExp.job}</p>
        <ul className="flex justify-between">
          <li className="font-semibold text-sm"> {workExp.company}</li>

          <div className="flex gap-2 text-sm mb-3">
            <li>{workStartDate}</li>
            {workStartDate.length > 1 && <span>-</span>}
            <li>{workEndDate}</li>
          </div>
        </ul>
        <p>{workExp.responsibility}</p>
      </div>

      <div>
        <h2 className="font-bold mx-auto text-lg border-b-2 border-yellow-500 max-w-fit mb-6">
          Educational Experience
        </h2>

        <p className="font-bold mb-2">{educationalExp.study}</p>

        <ul className="flex justify-between">
          <li className="text-sm font-semibold ">
            {educationalExp.schoolName}
          </li>
          <div className="flex gap-2 text-sm">
            <li>{educationStartDate}</li>
            {educationStartDate.length > 1 && <span>-</span>}
            <li>{educationEndDate}</li>
          </div>
        </ul>
      </div>
    </section>
  );
}

DisplayFormComponent.propTypes = {
  generalInfo: PropTypes.object,
  workExp: PropTypes.object,
  educationalExp: PropTypes.object,
  professionalSummary: PropTypes.string.isRequired,
};
