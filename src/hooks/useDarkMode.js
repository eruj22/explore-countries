import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light")

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setMode("light")
    }
  }, [])

  return [theme, toggleTheme]
}
