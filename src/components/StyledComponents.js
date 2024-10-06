import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #486579;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const Input = styled.input`
  background-color: #1D4189;
  border: none;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 25px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 45%;
`;

export const CancelButton = styled(Button)`
  background-color: lightgray;
  color: black;
  font-weight: bold;
`;

export const ConfirmButton = styled(Button)`
  background-color: #2E18B9;
`;

export const Select = styled.select`
  background-color: #1D4189;
  border: none;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  option {
    color: white;
    background-color: #1D4189;
  }
`;

export const VagaItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1D4189;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;

  &.selected {
    background-color: #2E18B9;
  }

  .status-span {
    font-size: 9px;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 25px;
    background-color: #486579;
  }
`;

export const VagasList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const CadastrarButton = styled(Button)`
  background-color: #486579;
`;