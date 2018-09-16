import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        startdate: '',
        enddate: '',
        submitted: false
    }

    postDataHandler = () => {

        const data = {
            title: this.state.title,
            content: this.state.content,
            startdate: this.refs.datestart.value,
            enddate: this.refs.dateend.value,


        };
        axios.post('http://localhost:5000/new-post', data)
            .then(response => {
                console.log(response);
                console.log(data);
                this.setState({ submitted: true })
            });
    }

    render() {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />;
        }
        return (

            <div className="NewPost">
                {redirect}
                <h1>New Trip</h1>
                <label>TripTo:</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Details</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Start Date:</label>
                <input type="date" ref="datestart" />
                <label>End Date:</label>
                <input type="date" ref="dateend" />

                <button onClick={this.postDataHandler}>Add Trip</button>
            </div>
        );
    }
}

export default NewPost;