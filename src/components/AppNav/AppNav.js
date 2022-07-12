import React from 'react'

// props
// navItems - an array of navItem objects.
// handleNavClick - a function.
function AppNav(props) {

  return (
    <nav>
      {
        props.navItems.map((navItem) =>
          <a href="#" onClick={() => props.handleNavClick(navItem.value)} >
            {navItem.label} |
          </a>
        )
      }
    </nav>
  )
}

export default AppNav;
