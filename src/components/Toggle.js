import React from "react"
import styled from "styled-components"
import { FaMoon } from "react-icons/fa"
import { FaRegMoon } from "react-icons/fa"

const Toggle = ({ theme, toggleTheme }) => {
  const lightTheme = theme === "light"
  return (
    <Wrapper className="button" onClick={toggleTheme}>
      <FaMoon className={lightTheme ? "icon" : "icon icon--show"} />
      <FaRegMoon className={lightTheme ? "icon icon--show" : "icon"} />
      <span className="span">Dark mode</span>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;

  .span {
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }

  .icon {
    display: none;
    margin-right: 0.3rem;
  }

  .icon--show {
    display: inline-block;
  }
`

export default Toggle
