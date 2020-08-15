import React from 'react'

const InputForm = ({
   label,
   name,
   type,
   placeholder,
   onChange,
   className,
   value,
   submitted,
}) => {
    return (
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={className}
            />
            {submitted && !value && <div className="warning-block">
                <span style={{textTransform:"capitalize"}}>{name}</span> is required
            </div>}
        </React.Fragment>
    )
};

export default InputForm