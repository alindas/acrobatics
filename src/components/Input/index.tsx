import React, { useState } from 'react';
import './index.less';

const Input =  (
  { title, size, value, onChange } : 
  { title: string,
    size: string,
    value: string | number,
    onChange: Function 
  }
  ) => {
  let input_size = size ? `input_${size}` : 'input_middle';
  let placeholder_size = size ? `placeholder_${size}` : 'placeholder_middle';
  const [input_val, resetVal] = useState(value??'');
  const changeValue = (e:any) => {
    resetVal(e.target.value);
    if(onChange) onChange(e.target.value);
  }
  return (
    <div className="input_item">
      <label>
        <input
          type="text"
          value={input_val}
          className={`input ${input_size}`}
          autoComplete="off"
          onChange={(e) => changeValue(e)}
        />
        <div className={`placeholder ${placeholder_size} ${input_val ? `${placeholder_size}_filled` : ''}`}>{title}</div>
      </label>
    </div>
  )
}


export default Input;
