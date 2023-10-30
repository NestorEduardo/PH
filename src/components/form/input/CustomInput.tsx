const CustomInput = ({ name = '', type = '', placeholder = '', disabled = false, required = false }) => {
  return (
    <input
        className="p-2 border border-slate-300 rounded-lg w-full"
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
    />
  )
}

export default CustomInput