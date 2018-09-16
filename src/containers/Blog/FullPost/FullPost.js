import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
        newGoer: ''
    }

    componentDidMount() {
        this.loadData();
    }
    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get('http://localhost:5000/posts/' + this.props.match.params.id)
                    .then(response => {
                        // console.log(response);
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }
    deletePostHandler = () => {
        axios.delete('http://localhost:5000/posts/delete/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }
    updateGoerHandler = () => {
        if (this.state.newGoer === '') {
            alert("Name cannot be empty")

        }
        else {
            const rdata = {
                goer: this.state.newGoer

            };
            axios.post('http://localhost:5000/posts/join/' + this.props.match.params.id, rdata)
                .then(response => {
                    console.log(response);
                    console.log(rdata);

                });
        }
    }
    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <p>{this.state.loadedPost.startdate} to {this.state.loadedPost.enddate}</p>
                    <p>Goers:</p>
                    <ul>{this.state.loadedPost.goers.map(k => (
                        <li>{k}</li>
                    ))}</ul>
                    <div className="Edit row">
                        <div  >
                            {/* <button onClick={this.deletePostHandler} className="Delete">Delete</button>*/}
                        </div> <div><form>
                            <input type="text" placeholder="Name" value={this.state.newGoer} onChange={(event) => this.setState({ newGoer: event.target.value })}></input>
                            <button className="btn" onClick={this.updateGoerHandler}>Join</button>
                        </form></div>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;