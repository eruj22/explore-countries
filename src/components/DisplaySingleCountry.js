import React from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import { CgArrowLongLeft } from "react-icons/cg"
import { useHistory } from "react-router-dom"
import image from "../assets/error-image.jpg"

function DisplaySingleCountry({ data, theme }) {
  const { name } = useParams()
  let history = useHistory()
  const country = data.filter((item) => item.name === name)
  const {
    flag,
    region,
    population,
    nativeName,
    capital,
    subregion,
    languages,
    borders,
    topLevelDomain,
    currencies,
    timezones,
  } = country[0]

  const findCountryFromCode = (code) => {
    const country = data.filter((item) => item.alpha3Code === code)
    return country[0].name
  }

  return (
    <div className="container">
      <Wrapper>
        <button onClick={() => history.goBack()} className="goBack">
          <CgArrowLongLeft className="goBack__icon" />
          Back
        </button>
        <div className="info">
          <img src={flag ? flag : image} className="info__image" alt={name} />
          <div className="info__text">
            <h2 className="info__title">{name}</h2>
            <div className="info__textGrid">
              <p className="info__subText">
                <span>Native Name: </span>
                {nativeName ? nativeName : "/"}
              </p>
              <p className="info__subText">
                <span>Top Level Domain: </span>
                {topLevelDomain ? topLevelDomain : "/"}
              </p>
              <p className="info__subText">
                <span>Population: </span>
                {population ? population.toLocaleString() : "/"}
              </p>
              <p className="info__subText">
                <span>Currencies: </span>
                {currencies ? currencies.map((currency) => currency.name) : "/"}
              </p>
              <p className="info__subText">
                <span>Region: </span>
                {region ? region : "/"}
              </p>
              <p className="info__subText">
                <span>Languages: </span>
                {languages
                  ? languages.map((language, index) => {
                      if (index === 0) {
                        return language.name
                      } else {
                        return ", " + language.name
                      }
                    })
                  : "/"}
              </p>
              <p className="info__subText">
                <span>Sub Region: </span>
                {subregion}
              </p>
              <p className="info__subText">
                <span>Timezones: </span>
                {timezones
                  ? timezones.map((timezone, index) => {
                      if (index === 0) {
                        return timezone
                      } else {
                        return ", " + timezone
                      }
                    })
                  : "/"}
              </p>
              <p className="info__subText">
                <span>Capital: </span>
                {capital ? capital : "/"}
              </p>
            </div>
            <div className="info__borders">
              <div className="info__subText">
                <span>Border Countries: </span>
                {borders
                  ? borders.map((border, index) => {
                      const country = findCountryFromCode(border)
                      return (
                        <Link
                          to={`/country/${country}`}
                          className="info__countryBtn"
                          key={index}
                        >
                          {country}
                        </Link>
                      )
                    })
                  : "/"}
              </div>
            </div>
            <a
              href={`https://en.wikipedia.org/wiki/${name}`}
              target="_blank"
              rel="noreferrer"
              className="info__wiki"
            >
              Explore more about {name}
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  margin-top: 5rem;
  min-height: 70vh;

  .goBack {
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
      5.2px 5.2px 32.8px rgba(0, 0, 0, 0.042),
      14px 14px 77px rgba(0, 0, 0, 0.07);

    &__icon {
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }

  .info {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    &__image {
      width: 50%;
      max-width: 550px;
      max-height: 400px;
    }

    &__text {
      width: 50%;
      max-width: 550px;
    }

    &__textGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &__subText {
      margin: 0.3rem 0;
    }

    &__countryBtn {
      margin: 0.3rem 0.8rem 0.3rem 0;
      padding: 0.3rem 0.7rem;
      display: inline-block;
      background: ${({ theme }) => theme.elements};
      border-radius: 0.3rem;
      box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.017),
        0.7px 0.7px 5.3px rgba(0, 0, 0, 0.022),
        1.4px 1.4px 10.1px rgba(0, 0, 0, 0.027),
        2.6px 2.6px 17.9px rgba(0, 0, 0, 0.032),
        5.2px 5.2px 32.8px rgba(0, 0, 0, 0.042),
        14px 14px 77px rgba(0, 0, 0, 0.07);
    }

    &__borders {
      margin-top: 1rem;
    }

    &__wiki {
      display: block;
      margin-top: 1rem;
      font-weight: bold;
    }
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 1200px) {
    .info {
      flex-direction: column;
      padding-bottom: 3rem;

      &__image {
        width: 80%;
      }

      &__text {
        width: 80%;
      }
    }
  }

  @media (max-width: 700px) {
    .info {
      &__textGrid {
        grid-template-columns: 1fr;
      }
    }
  }

  @media (max-width: 500px) {
    .info {
      &__image {
        width: 90%;
      }

      &__text {
        width: 90%;
      }
    }
  }
`

export default DisplaySingleCountry
