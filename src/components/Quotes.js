import React from 'react'
import Quote from './Quote'

const Quotes = props => {
  return (
    <section className="quotes">
      <h2 className="heading-2">Quote List</h2>
      <ul className="quotes__list">
        {props.quotes.length === 0 && <p>No quotes, add one to get started</p>}
        {props.quotes.map((quote, index) => (
          <Quote
            key={index}
            quoteNumber={index + 1}
            quoteText={quote.quoteText}
            quoteAuthor={quote.quoteAuthor}
            deleteQuote={props.deleteQuote}
          />
        ))}
      </ul>
    </section>
  )
}

export default Quotes
