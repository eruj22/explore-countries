import React from "react"
import Toggle from "./Toggle"
import styled from "styled-components"

function Header({ toggleTheme, theme }) {
  return (
    <Wrapper>
      <div className="container">
        <header className="header">
          <h1 className="header__title">Where in the world?</h1>
          <div className="header__toggle">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </header>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: ${({ theme }) => theme.elements};
  font-weight: bold;
  padding: 1rem 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      margin: 0;
      font-size: 2.2rem;
    }
  }

  @media (max-width: 800px) {
    .header {
      &__title {
        font-size: 1.7rem;
      }
    }
  }

  @media (max-width: 600px) {
    .header {
      flex-direction: column;
    }
  }
`

export default Header
