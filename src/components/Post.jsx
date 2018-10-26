import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import './Post.css';
export default class Post extends Component {
  render() {
    const {postInfo } = this.props;
    return (
      <div className="postContainer">
        <div className="profileSection">
          <Image src="assets/prof.png" className="profileImage" />
          <div>
            <span><strong>{postInfo.name}</strong> with {postInfo.friend} and 15 others. </span>< br/>
            <span>4hrs.</span>
          </div>
        </div>
        <div className="wallSection">
          <Image src="assets/wall.jpg" className="wallImage"/>
        </div>
        <div className="actionBlock">
          <a href="/" className="actionBtn">Like</a>
          <a href="/" className="actionBtn">Comment</a>
          <a href="/" className="actionBtn">Share</a>
          <hr />
        </div>
        <div className="likeBlock">
          <span><strong>Hameed</strong> and 5 others like this</span>
        </div>
        <div className="commentSection">
          <Image src="assets/prof.png" className="profileImage" />
          <input type="text" className="comment" />
        </div>
      </div>
    );
  }
}