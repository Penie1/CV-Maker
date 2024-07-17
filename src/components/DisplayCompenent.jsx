import PropTypes from "prop-types";

export default function DisplayComponent({
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
      <p>Start Date: {workExp.startDate}</p>
      <p>End Date: {workExp.endDate}</p>
      <p>Responsibilities: {workExp.responsibility}</p>

      <h2>Educational Experience</h2>
      <p>Field of Study: {educationalExp.study}</p>
      <p>School Name: {educationalExp.schoolName}</p>
      <p>Start Date: {educationalExp.startDate}</p>
      <p>End Date: {educationalExp.endDate}</p>
    </div>
  );
}

DisplayComponent.propTypes = {
  generalInfo: PropTypes.object,
  workExp: PropTypes.object,
  educationalExp: PropTypes.object,
};
