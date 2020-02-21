import React from 'react'

const Quote = props => (
  <li className="quotes__item">
    <div className="quotes__text">
      <h3 className="heading-3">Quote {props.quoteNumber}</h3>
      <p>{props.quoteText}</p>
      <p>~ {props.quoteAuthor}</p>
    </div>
    <button
      className="quotes__btn"
      onClick={() => {
        props.deleteQuote(props.quoteText)
      }}
    >
      Remove
    </button>
  </li>
)

export default Quote
