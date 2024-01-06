import React from 'react'
import './Footer.css'
const Footer = () => {
  const year = new Date()
  return (
    <footer>
        <div>
            &copy; {year.getFullYear()} #VANLIFE
        </div>
    </footer>
  )
}

export default Footer