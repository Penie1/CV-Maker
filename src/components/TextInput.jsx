import PropTypes from "prop-types";

export default function TextInput({
  name,
  id,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <input
      className="bg-gray-100   p-2  focus:border-yellow-500 focus:outline focus:outline-1 focus:outline-yellow-500 focus:bg-slate-100 border  border-slate-300 rounded-md border-1 sm:w-full w-2/3"
      name={name}
      required
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
