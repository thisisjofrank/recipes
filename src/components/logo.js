import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo">
    <Link to="/">
      <img className="logo" alt="sparkleheart" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/sparkling-heart_1f496.png" />
      {props.title}
      </Link>
  </div>
)

export default Logo