import React, { Component } from 'react';

import firebase from 'firebase';

import './photo.css';



class photo extends Component {

    constructor(props) {
        super(props)
        this.state = {

            pcent: 0

        }
        this.fileSelectHandler = this.fileSelectHandler.bind(this);
    }


    fileSelectHandler = event => {
        console.log(event.target.files[0]);


        let stref = firebase.storage().ref('imgs/' + event.target.files[0].name);
        var task = stref.put(event.target.files[0]);
        task.on('state_changed',
            function progress(snapshot) {
                console.log('uploading');
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(percentage);
                var p = document.getElementById('uploader');
                p.value = percentage;

            },
            function error(err) {
                alert("You need to be logged in,img size<10mb")
            },

            function complete() {

            }



        );
    }
    render() {
        return (

            <div className="Photo">
                <h1 className="text">Photo of the week:</h1>
                <img className="responsive" src="https://preview.ibb.co/c5Hr9p/IMG_20171002_122233_1.jpg"></img>
                <h3>Kasol,Himachal Pradesh</h3>
                <br />
                <h3>You can upload your Travel photo to be evaluated for photo of the week:</h3>
                <div className="bod">
                    <progress value={this.state.pcent} max="100" id="uploader">0%</progress>
                    <br />
                    <div className="row">
                        <input
                            style={{ display: 'none' }}
                            type="file"
                            value="upload"
                            id="filebutton"
                            className="inner"
                            onChange={this.fileSelectHandler}
                            ref={fileInput => this.fileInput = fileInput} />
                        <button onClick={() => this.fileInput.click()}>Upload</button>
                    </div> </div>


            </div>


        );





    }
}
export default photo;