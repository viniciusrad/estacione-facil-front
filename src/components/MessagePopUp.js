import React from 'react';
import styled from 'styled-components';

const PopUp = ({ title, body, onCancel, onConfirm, onlyWarning = false }) => {
  return (
    <Overlay>
      <PopUpContainer>
        <Title>{title}</Title>
        <Body>{body}</Body>
        {onlyWarning ? (
          <ButtonContainer>
            <WarningButton onClick={onCancel}>ok</WarningButton>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <CancelButton onClick={onCancel}>Cancelar</CancelButton>
            <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
          </ButtonContainer>
        )}
      </PopUpContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopUpContainer = styled.div`
  background-color: #486579;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 10px;
  text-align: center;
`;

const Body = styled.p`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 45%;
`;

const CancelButton = styled(Button)`
  background-color: #FF0000;
`;

const ConfirmButton = styled(Button)`
  background-color: #00FF00;
`;
const WarningButton = styled(Button)`
  background-color: #e3b622;
  margin: 0 auto;
`;

export default PopUp;
