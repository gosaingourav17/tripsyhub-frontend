import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import { Link } from 'react-router-dom';
import axios from '../../../axios';
import './Posts.css';
import Post from '../../../components/Post/Post';
class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('http://localhost:5000/posts')
            .then(response => {
                const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,


                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: true });
            });
    }


    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }
    render() {

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (<Link to={'/posts/' + post.id} key={post.id}> <Post

                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} /></Link>);
            });
        }

        return (
            <div>
                <h2>Join a existing trip:</h2>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                <section className="Posts responsive" >
                    {posts}
                </section>
            </div>

        );
    }
}
export default Posts;