import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <Helmet>
      <title>Przemysław Pitus</title>
    </Helmet>
    <h1>PRZEMYSŁAW PITUS</h1>
    <Link to="/portfolio">Portfolio</Link>
  </>
)

export default IndexPage
