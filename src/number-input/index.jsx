import styled from 'styled-components';

const StyledInput = styled.input`
  width: 50px;
  cursor: pointer;
`;

const NumberInput = ({value, setValue}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <StyledInput value={value} onChange={handleChange} />
  );
}

export default NumberInput;
