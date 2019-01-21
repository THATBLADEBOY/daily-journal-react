import React, { Component } from "react"

class JournalList extends Component {

    render() {
        return (
            <React.Fragment>
            {
                this.props.entries.map(theEntry =>
                <div key={theEntry.id}>
                    <br />
                    <h3 className="entry-date-header">{theEntry.date}</h3>
                    <h3 className="entry-concept-header">{theEntry.concept}</h3>
                    <p className="entry-entry-p">{theEntry.entry}</p>
                    <p className="entry-mood-p">Mood: {theEntry.mood}</p>
                </div>
                )
            }  
            </React.Fragment>
        )
    }
}

export default JournalList