import PropTypes from "prop-types";

export default function DisplayFormComponent({
  generalInfo,
  workExp,
  educationalExp,
}) {
  return (
    <div>
      <h2>General Information</h2>
      <p>First Name: {generalInfo.firstName}</p>
      <p>Last Name: {generalInfo.lastName}</p>
      <p>Phone Number: {generalInfo.phoneNum}</p>
      <p>Email: {generalInfo.email}</p>
      <h2>Work Experience</h2>
      <p>Job Title: {workExp.job}</p>
      <p>Company: {workExp.company}</p>
      <p>Start Month: {workExp.startMonth}</p>
      <p>Start Year: {workExp.startYear}</p>
      <p>End Month: {workExp.endMonth}</p>
      <p>End Year: {workExp.endYear}</p>
      <p>Responsibilities: {workExp.responsibility}</p>

      <h2>Educational Experience</h2>
      <p>Field of Study: {educationalExp.study}</p>
      <p>School Name: {educationalExp.schoolName}</p>
      <p>Start Month: {educationalExp.startMonth}</p>
      <p>Start Year: {educationalExp.startYear}</p>
      <p>End Month: {educationalExp.endMonth}</p>
      <p>End Year: {educationalExp.endYear}</p>
    </div>
  );
}

DisplayFormComponent.propTypes = {
  generalInfo: PropTypes.object,
  workExp: PropTypes.object,
  educationalExp: PropTypes.object,
};
