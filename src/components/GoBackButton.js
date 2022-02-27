import React from "react";
import { useHistory } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";
import styled from "styled-components";

function GoBackButton() {
  let history = useHistory();

  return (
    <Button onClick={() => history.goBack()} className="goBack">
      <CgArrowLongLeft className="icon" />
      Back
    </Button>
  );
}

const Button = styled.button`
  background: ${({ theme }) => theme.elements};
  color: inherit;
  display: flex;
  font-size: 1rem;
  align-items: center;
  padding: 0.7rem 2.4rem;
  border-radius: 0.4rem;
  width: fit-content;
  box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.017),
    0.7px 0.7px 5.3px rgba(0, 0, 0, 0.022),
    1.4px 1.4px 10.1px rgba(0, 0, 0, 0.027),
    2.6px 2.6px 17.9px rgba(0, 0, 0, 0.032),
    5.2px 5.2px 32.8px rgba(0, 0, 0, 0.042), 14px 14px 77px rgba(0, 0, 0, 0.07);

  .icon {
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

export default GoBackButton;
