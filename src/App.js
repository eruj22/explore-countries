import React, { useState, useEffect, useRef } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./utils/themes"
import Loader from "./components/Loader"
import useFetch from "./hooks/useFetch"
import { GlobalStyles } from "./utils/global"
import Header from "./components/Header"
import { useDarkMode } from "./hooks/useDarkMode"
import FilterCountries from "./components/FilterCountries"
import DisplayCountries from "./components/DisplayCountries"
import GoTopButton from "./components/GoTopButton"

function App() {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  const url = "https://restcountries.com/v2/all"

  const { data, isLoading } = useFetch(url)
  const refScrollUp = useRef()

  const [showGoTop, setShowGoTop] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCountries, setFilterCountries] = useState("")
  let filter = {
    searchQuery,
    setSearchQuery,
    filterCountries,
    setFilterCountries,
    theme,
  }

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" })
  }

  const handleVisibleButton = () => {
    const position = window.scrollY

    if (position > 100) {
      return setShowGoTop(true)
    } else {
      setShowGoTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton)
  }, [])

  const searchCountries = () => {
    let search = data
    if (filterCountries !== "") {
      if (filterCountries === "All") {
        search = data
      } else {
        search = data.filter((country) => {
          const { region } = country
          return region === filterCountries
        })
      }
    }
    if (searchQuery !== "") {
      search = data.filter((country) => {
        const { name } = country
        return name.toLowerCase().includes(searchQuery.toLowerCase())
      })
    }
    return search
  }
  const countries = searchCountries()

  if (isLoading) {
    return <Loader />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <div ref={refScrollUp}></div>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <FilterCountries {...filter} />
        <DisplayCountries countries={countries} />
        <GoTopButton
          theme={theme}
          showGoTop={showGoTop}
          handleScrollUp={handleScrollUp}
        />
      </>
    </ThemeProvider>
  )
}

export default App
