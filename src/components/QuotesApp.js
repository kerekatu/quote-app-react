import React, { Component } from 'react'
import Quotes from './Quotes'
import AddQuote from './AddQuote'
import EditQuote from './EditQuote'

export default class QuotesApp extends Component {
  state = {
    quotes: [
      {
        quoteText: "When you can't find the sunshine, be the sunshine!",
        quoteAuthor: 'Person 1'
      },
      {
        quoteText: 'The grass is greener where you water it',
        quoteAuthor: 'Person 2'
      },
      {
        quoteText: 'Learn from yesterday, live for today, hope for tommorow',
        quoteAuthor: 'Person 3'
      },
      {
        quoteText: 'You do not find the happy life. You make it.',
        quoteAuthor: 'Person 4'
      },
      {
        quoteText: 'I am the one who knocks!',
        quoteAuthor: 'Person 5'
      }
    ]
  }

  handleAddQuote = quoteToAdd => {
    let quotes = [...this.state.quotes, quoteToAdd]
    this.setState({
      quotes
    })
  }

  handleDeleteQuote = quoteToRemove => {
    this.setState(prevState => ({
      quotes: prevState.quotes.filter(
        quote => quoteToRemove !== quote.quoteText
      )
    }))
  }

  // handleEditQuote = quoteToEdit => {
  // }

  render() {
    const title = 'Quotes App'

    return (
      <>
        <h1>{title}</h1>
        <main className="main-content">
          <Quotes
            quotes={this.state.quotes}
            deleteQuote={this.handleDeleteQuote}
          />
          <AddQuote addQuote={this.handleAddQuote} />
          <EditQuote
            quotes={this.state.quotes}
            editQuote={this.handleEditQuote}
          />
        </main>
      </>
    )
  }
}
