import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

function Page404({ theme }) {
  return (
    <Wrapper>
      <div className="wrap">
        <h1 className="wrap__title">404 Error</h1>
        <p className="wrap__text">
          Oops, the page you're looking for doesn't exist
        </p>
        <Link to="/" className="wrap__link">
          Go back to home page
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;

  .wrap {
    &__title {
      font-size: 90px;
      margin: 0.3rem 0;
    }

    &__text {
      margin: 2rem 0;
      font-size: 20px;
    }

    &__link {
      padding: 0.8rem 2rem;
      font-size: 1rem;
      border-radius: 0.3rem;
      background-color: ${({ theme }) => theme.elements};
      color: ${({ theme }) => theme.text};
      box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.017),
        0.7px 0.7px 5.3px rgba(0, 0, 0, 0.022),
        1.4px 1.4px 10.1px rgba(0, 0, 0, 0.027),
        2.6px 2.6px 17.9px rgba(0, 0, 0, 0.032),
        5.2px 5.2px 32.8px rgba(0, 0, 0, 0.042),
        14px 14px 77px rgba(0, 0, 0, 0.07);
    }
  }
`

export default Page404
