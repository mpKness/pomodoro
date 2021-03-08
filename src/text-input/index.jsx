import { useState } from 'react';
import styled from 'styled-components';
import plus from '../assets/plus.png';

const Icon = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

const TextInput = ({submit, label = ''}) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(value);
  }
  return (
    <div>
      <input type="text" value={value} onChange={handleChange}/>
      <Icon src={plus} onClick={handleSubmit} />
    </div>
    );
}

export default TextInput;
