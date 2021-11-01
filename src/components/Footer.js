import React from "react"
import styled from "styled-components"

function Footer() {
  return (
    <Wrapper>
      <h4>
        Site made with React by{" "}
        <a
          href="https://github.com/eruj22"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Jure
        </a>
      </h4>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  text-align: center;
  padding: 2rem 0 0.2rem;

  .link {
    color: orange;
    border-bottom: 1px solid orange;
  }
`

export default Footer
