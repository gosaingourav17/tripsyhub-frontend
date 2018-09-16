import React, { Component } from 'react';

import Posts from './Posts/Posts';
import logins from './Logins/logins';
import photo from './photo/photo';
import featured from './featured/featured';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import firebase from "firebase"
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theUser: ''
        };

    }


    render() {



        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><img id="logo" src="https://image.ibb.co/fLetN9/sdds.png"></img></li>
                            <li><NavLink to="/featured"><strong>Feautured Trips</strong></NavLink></li>
                            <li > <NavLink to="/posts/" exact ><strong>JoinTrips</strong></NavLink></li>
                            <li><NavLink to="/new-post"><strong>MakeYourTrips</strong></NavLink></li>
                            <li><NavLink to="/login"><strong>MyPage</strong></NavLink></li>
                            <li><NavLink to="/uploads"><strong>Photo of the week</strong></NavLink></li>


                        </ul>
                    </nav>
                    <img className="responsive" alt=" " height="auto" width="100%" src="https://www.flightcentre.co.za/sites/flightcentre.co.za/files/styles/fcl_blog_slideshow/public/fcl-blog/travelling-alone.jpg?itok=qVputIm5"></img>
                </header>
                <Switch>

                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/login" component={logins} />
                    <Route path="/uploads" component={photo} />
                    <Route path="/featured" component={featured} />
                    <Redirect from="/" to="posts" />

                </Switch>
            </div>
        );
    }
}

export default Blog; 