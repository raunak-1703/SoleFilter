import React from 'react';

const Input = ({ category, option, setChange}) => {
  const changeHandler=()=>{
    setChange(option)
  }
  return (
    <div>
      <input 
        type="radio" 
        name={category} 
        id={`${category}-${option}`} 
        value={option}
        onChange={changeHandler}
      />   
      <label htmlFor={`${category}-${option}`}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </label>   
    </div>
  );
};

export default Input;
