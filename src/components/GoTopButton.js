import React from "react"
import styled from "styled-components"
import { MdKeyboardArrowUp } from "react-icons/md"

function GoTopButton({ showGoTop, theme, handleScrollUp }) {
  return (
    <Wrapper onClick={handleScrollUp}>
      <button className={showGoTop ? "goTop goTop--show" : "goTop"}>
        <MdKeyboardArrowUp />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .goTop {
    background: ${({ theme }) => theme.goTopBg};
    color: ${({ theme }) => theme.goTopText};
    position: fixed;
    bottom: 1rem;
    right: 0.8rem;
    font-size: 30px;
    z-index: 20;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &--show {
      display: flex;
    }
  }
`

export default GoTopButton
