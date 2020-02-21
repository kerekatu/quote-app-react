import React, { Component } from 'react'

export default class EditQuote extends Component {
  state = {
    quoteText: this.props.quotes[0].quoteText
  }

  handleChange = e => {
    this.setState({ quoteText: e.target.value })
    console.log(e.target.value)
    console.log(this.state)
  }

  // ! TODO: Add functionality to handleEditQuote - pass component's state to QuoteApp.js and concat it

  handleEditQuote = e => {
    e.preventDefault()
    this.props.editQuote(this.state.quoteText)
  }

  render() {
    const test =
      this.props.quotes.length === 0 ? (
        'No items to edit'
      ) : (
        <section className="edit">
          <h2 className="heading-2">Edit Quote</h2>
          <form className="edit__form" onSubmit={this.handleEditQuote}>
            <select className="edit__select" onChange={this.handleChange}>
              {this.props.quotes.map((quote, index) => (
                <option
                  className="edit__option"
                  value={quote.quoteText}
                  key={index}
                >{`Quote ${index + 1}`}</option>
              ))}
            </select>
            <input
              type="text"
              name="quoteText"
              className="edit__input"
              value={this.state.quoteText}
              onChange={this.handleChange}
            />
            <button className="edit__btn">Submit</button>
          </form>
        </section>
      )
    return <>{test}</>
  }
}
