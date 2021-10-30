import React from "react"
import styled from "styled-components"

function DisplayCountries({ countries }) {
  return (
    <div className="container">
      <Wrapper>
        {countries.map((country) => {
          const { name, flag, population, region, capital } = country
          return (
            <article className="card" key={name}>
              <img
                src={flag}
                className="card__image"
                alt={`the flag of ${name}`}
              />
              <div className="card__info">
                <h3 className="card__title">{name}</h3>
                <p className="card__paragraph">
                  <span className="text--bold">Population: </span>
                  {population.toLocaleString()}
                </p>
                <p className="card__paragraph">
                  <span className="text--bold">Region: </span>
                  {region}
                </p>
                <p className="card__paragraph">
                  <span className="text--bold">Capital: </span>
                  {capital}
                </p>
              </div>
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
  grid-template-columns: repeat(4, 300px);
  gap: 2rem;

  .card {
    cursor: pointer;
    width: 300px;
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
      max-height: 150px;
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
`

export default DisplayCountries
