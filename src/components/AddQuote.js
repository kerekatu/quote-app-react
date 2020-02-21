import React, { Component } from 'react'

export default class AddQuote extends Component {
  state = {
    quoteText: null,
    quoteAuthor: null
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    })
  }

  handleAddQuote = e => {
    e.preventDefault()
    this.props.addQuote(this.state)
  }

  render() {
    return (
      <section className="control">
        <h2 className="heading-2">Add Quote</h2>
        <form className="control__form" onSubmit={this.handleAddQuote}>
          <input
            type="text"
            className="control__input"
            placeholder="enter quote here"
            name="quoteText"
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="control__input"
            placeholder="enter author here"
            name="quoteAuthor"
            onChange={this.handleChange}
          />
          <button className="control__btn">Add Quote</button>
        </form>
      </section>
    )
  }
}
