import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"

// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'

import "./button.css"

const Button = ( props ) => {

  const isAnchorLink = props.btnLink.includes('#');

  if (isAnchorLink) {
    return (
      <button className={props.className + " cta-btn btn-" + props.btnStyle}>
          <AnchorLink
            // to="/kontakt#contact-map-interactive-section"
            to={props.btnLink}
            title={props.btnText}
            // stripHash
          />
      </button>
    )
  } else {
    return (
      <button className={props.className + " cta-btn btn-" + props.btnStyle}>
          <AniLink
            // swipe
            // top="entry"
            cover
            direction="bottom"
            duration={0.75}
            entryOffset={180}
            to={props.btnLink}
            bg="#141414"
          >
            {props.className === 'go-back-btn' &&
              <FontAwesomeIcon icon={faBackwardStep} />
            }
            {props.btnText}
          </AniLink>
        </button>
    )
  }
}

export default Button