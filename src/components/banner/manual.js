import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import FeaturedImage from "./featuredImage"

const ManualBanner = ({frontmatter}) => (
  <section id="banner">
    <div className="content">
      <header>
        <ReactMarkdown source={frontmatter.header}/>
      </header>

      <ReactMarkdown source={frontmatter.tagline}/>

      <ul className="actions">
        <li><Link to={frontmatter.actions[0].linkUrl}
                  className={frontmatter.actions[0].class}>
          {frontmatter.actions[0].label}
        </Link></li>
      </ul>
    </div>
    <span className="image object">
              {fluid ?
                <Img fluid={fluid} /> :
                <img src="/images//pic04.jpg" alt="Gatsby in Space"/>}
          </span>
  </section>
)

export default ManualBanner
