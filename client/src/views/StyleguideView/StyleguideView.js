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
            <h5>SWoRD Heading 5</h5>
          </div>
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
        </div>

        {/* Lists */}
        <div className={classes.block}>
          <h1 className={classes.title}>Lists</h1>

          <h2 className={classes.subtitle}>Unordered list</h2>
          <div className={classes.example}>
            <ul>
              <li>List Example 1</li>
              <li>List Example 2</li>
              <li>List Example 3</li>
              <li>List Example 4</li>
            </ul>
          </div>

          <h2 className={classes.subtitle}>Ordered list</h2>
          <div className={classes.example}>
            <ol>
              <li>List Example 1</li>
              <li>List Example 2</li>
              <li>List Example 3</li>
              <li>List Example 4</li>
            </ol>
          </div>

          <h2 className={classes.subtitle}>Unstyled list</h2>
          <div className={classes.example}>
            <ul className='list--unstyled'>
              <li>List Example 1</li>
              <li>List Example 2</li>
              <li>List Example 3</li>
              <li>List Example 4</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default StyleguideView
