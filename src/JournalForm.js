import React, { Component } from "react"
import JournalList from "./JournalEntryList"

class JournalForm extends Component {

    state = {
        entries: []
    }

    componentDidMount() {
        const newState = {}
    
        fetch("http://localhost:5002/entries")
            .then(r => r.json())
            .then(entries => newState.entries = entries)
            .then(() => this.setState(newState))
    }


    render() {
        return (
            <React.Fragment>
              <h1>Daily Journal</h1>
              <h4>Date</h4>
              <input type="date"></input>
              <h4>Concept</h4>
              <input type="text"></input>
              <h4>Entry</h4>
              <input type="text"></input>
              <h4>Mood</h4>
              <select>
                  <option id="good--option">Good</option>
                  <option id="great--option">Great</option>
                  <option id="ok--option">Ok</option>
                  <option id="ehhh--option">Ehhh</option>
              </select>
              <button>Add Entry</button>
              <JournalList entries={this.state.entries} />
            </React.Fragment>
        )
    }
}

export default JournalForm