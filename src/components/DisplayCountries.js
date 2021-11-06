import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import image from "../assets/error-image.jpg"

function DisplayCountries({ countries }) {
  return (
    <div className="container">
      <Wrapper>
        {countries.map((country) => {
          const { name, flag, population, region, capital } = country
          return (
            <article className="card" key={name}>
              <Link to={`country/${name}`}>
                <img
                  src={flag ? flag : image}
                  className="card__image"
                  alt={`the flag of ${name}`}
                />
                <div className="card__info">
                  <h3 className="card__title">{name}</h3>
                  <p className="card__paragraph">
                    <span className="text--bold">Population: </span>
                    {population ? population.toLocaleString() : "/"}
                  </p>
                  <p className="card__paragraph">
                    <span className="text--bold">Region: </span>
                    {region ? region : "/"}
                  </p>
                  <p className="card__paragraph">
                    <span className="text--bold">Capital: </span>
                    {capital ? capital : "/"}
                  </p>
                </div>
              </Link>
            </article>
          )
        })}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 4rem;
  padding-bottom: 3rem;

  .card {
    cursor: pointer;
    min-height: 300px;
    border-radius: 0.3rem;
    padding-bottom: 2rem;
    box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.017),
      0.7px 0.7px 5.3px rgba(0, 0, 0, 0.022),
      1.4px 1.4px 10.1px rgba(0, 0, 0, 0.027),
      2.6px 2.6px 17.9px rgba(0, 0, 0, 0.032),
      5.2px 5.2px 32.8px rgba(0, 0, 0, 0.042),
      14px 14px 77px rgba(0, 0, 0, 0.07);

    &__image {
      width: 100%;
      height: 150px;
      object-fit: cover;
      object-position: center;
    }

    &__info {
      padding: 0 1.5rem;
    }
  }

  .text--bold {
    font-weight: bold;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 3rem;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 300px;
    justify-content: center;
  }
`

export default DisplayCountries
