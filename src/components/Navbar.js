import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{authContext => (
        <ThemeContext.Consumer>{themeContext => {
            const { isAuthenticated, toggleAuth } = authContext
            const { isLightTheme, light, dark } = themeContext
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
          }}</ThemeContext.Consumer>
      )}</AuthContext.Consumer>
    )
  }
}

export default Navbar
