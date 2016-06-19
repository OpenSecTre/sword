import React, { Component } from 'react'
import classes from './_styles.scss'

export class StyleguideView extends Component {
  render () {
    return (
      <div>
        {/* HEADINGS */}
        <div className={classes.block}>
          <h1 className={classes.title}>Headings</h1>

          <div className={classes.example}>
            <h1>SWoRD Heading 1</h1>
            <h2>SWoRD Heading 2</h2>
            <h3>SWoRD Heading 3</h3>
            <h4>SWoRD Heading 4</h4>
          </div>

          <pre className={classes.code}>
            &lt;h1&gt;SWoRD Heading 1&lt;/h1&gt;<br />
            &lt;h2&gt;SWoRD Heading 2&lt;/h2&gt;<br />
            &lt;h3&gt;SWoRD Heading 3&lt;/h3&gt;<br />
            &lt;h4&gt;SWoRD Heading 4&lt;/h4&gt;<br />
          </pre>
        </div>

        {/* PARAGRAPHS */}
        <div className={classes.block}>
          <h1 className={classes.title}>Paragraphs</h1>

          <div className={classes.example}>
            <p>
              Sword basic text example with nothing special.
              Sword basic text example with nothing special.
              Sword basic text example with nothing special.
              Sword basic text example with nothing special.
            </p>
            <p>
              Sword basic text example with nothing special.
              Sword basic text example with nothing special.
            </p>
          </div>

          <pre className={classes.code}>
          &lt;p&gt;<br />
            Sword basic text example with nothing special...<br />
          &lt;/p&gt;<br />
          &lt;p&gt;<br />
            Sword basic text example with nothing special...<br />
          &lt;/p&gt;<br />
          </pre>
        </div>
      </div>
    )
  }
}

export default StyleguideView
