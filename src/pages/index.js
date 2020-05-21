import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { connect } from "react-redux"
import { sampleFunction } from "../actions/sampleAction"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <button
      style={
        props.darkMode ? { backgroundColor: "black", color: "white" } : null
      }
      onClick={() => props.sampleFunction(props.darkMode)}
    >
      Dark Mode is {props.darkMode ? "On" : "Off"}
    </button>
    <br/>
    <br/>
    <br/>
    <br/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const mapStateToProps = state => ({
  darkMode: state.data.isDarkMode,
})

export default connect(mapStateToProps, { sampleFunction })(IndexPage)
