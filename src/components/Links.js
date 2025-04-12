import React from "react"
import About from "./About"

function Links (props) {
    return (
        <div>
            <h3>Links</h3>
            <a href={props.github} target="_blank" rel="noreferrer">{props.github}</a>
      <br />
      <a href={props.linkedin} target="_blank" rel="noreferrer">{props.linkedin}</a>

        </div>
    )
}

export default Links