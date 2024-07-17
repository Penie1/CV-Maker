import PropTypes from "prop-types";

export default function GeneralInfo({
  generalInfo,
  setGeneralInfo,
  handelForm,
}) {
  function handelChange(e) {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handelForm}>
      <label htmlFor="first-name">First Name</label>
      <input
        required
        name="firstName"
        type="text"
        id="first-name"
        placeholder="Andrew"
        value={generalInfo.firstName}
        onChange={handelChange}
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        required
        name="lastName"
        type="text"
        id="last-name"
        placeholder="Peter"
        value={generalInfo.lastName}
        onChange={handelChange}
      />
      <label htmlFor="phone-num">Phone Number</label>
      <input
        required
        name="phoneNum"
        type="tel"
        id="phone-num"
        placeholder="0900000000"
        value={generalInfo.phoneNum}
        onChange={handelChange}
      />
      <label htmlFor="email">Email Address</label>
      <input
        required
        name="email"
        type="email"
        id="email"
        placeholder="Jonas@gmail.com"
        value={generalInfo.email}
        onChange={handelChange}
      />
      <button className="border-2 border-amber-600" type="submit">
        Continue
      </button>
    </form>
  );
}
GeneralInfo.propTypes = {
  handelForm: PropTypes.func,
  setGeneralInfo: PropTypes.func,
  generalInfo: PropTypes.object,
};
