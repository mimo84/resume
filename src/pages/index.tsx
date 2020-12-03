import React from "react"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div style={{ color: `purple`, fontSize: `72px` }}>
      Hello Gatsby!
      <Link to="/about">About</Link>
    </div>
  )
}
export default Home
