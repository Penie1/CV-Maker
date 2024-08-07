import PropTypes from "prop-types";
import TextInput from "./TextInput";
export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
  function handleChange(e) {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1 className="font-bold mx-auto text-2xl border-b-2 border-yellow-500 max-w-fit">
        Personal Details
      </h1>
      <section className="grid  md:grid-cols-2 gap-10 border-b  border-gray-300  pb-12">
        <div className="flex flex-col gap-3 ">
          <label className="block" htmlFor="first-name">
            First Name
          </label>

          <TextInput
            name="firstName"
            id="first-name"
            value={generalInfo.firstName}
            placeholder="Andrew"
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label className="block " htmlFor="last-name">
            Last Name
          </label>
          <TextInput
            name="lastName"
            id="last-name"
            value={generalInfo.lastName}
            placeholder="Smith"
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label className="block " htmlFor="phone-num">
            Phone Number
          </label>
          <input
            className="bg-gray-100   p-2  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border  border-slate-300 rounded-md border-1 w-full "
            required
            name="phoneNum"
            type="tel"
            id="phone-num"
            placeholder="0900000000"
            value={generalInfo.phoneNum}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label className="block" htmlFor="email">
            Email Address
          </label>
          <input
            className="bg-gray-100 p-2  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border  border-slate-300 rounded-md border-1 w-full "
            required
            name="email"
            type="email"
            id="email"
            placeholder="Jonas@gmail.com"
            value={generalInfo.email}
            onChange={handleChange}
          />
        </div>
      </section>
    </>
  );
}
GeneralInfo.propTypes = {
  setGeneralInfo: PropTypes.func.isRequired,
  generalInfo: PropTypes.object.isRequired,
};
