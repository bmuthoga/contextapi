import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth} style={{ userSelect: "none", cursor: "pointer" }}>
        {isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <ul style={{ userSelect: "none" }}>
        <li style={{ cursor: "pointer" }}>Home</li>
        <li style={{ cursor: "pointer" }}>About</li>
        <li style={{ cursor: "pointer" }}>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
