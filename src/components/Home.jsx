import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './Home.css';

export default class Home extends Component {
  static propTypes = {
    loadMore: PropTypes.func.isRequired
  }
  static defaultProps = {
    loadMore: () => { throw new Error('loadMore is not called'); },
  }
  state = {
    postData : [{
      id: new Date().getTime(),
      name: 'Nikhil T Nair',
      friend: 'Midhun Nair'
    }]
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
      const {postData} = this.state;
      const dt = {
        id: new Date().getTime(),
        name: 'Nikhil T Nair',
        friend: 'Midhun Nair'
      }
      postData.push(dt);
      this.setState({ postData: postData })
    }
  }

  render() {
    const { postData } = this.state;
    return (
      <div>
        <div className="statusContainer">
          <div className="status">update status | add photos/videos | create photo album </div>
          <hr />
          <div className="commentContainer">
            <textarea rows="4" cols="50" placeholder="What's in your mind, Nikhil" className="commentBox" type="text"></textarea>
          </div>
          <div className="submitContaier">
            <button className="btn btn-primary submitBtn">Share</button>
          </div> 
        </div>
        {
          postData.map((data, key) => <Post key={data.id} postInfo={data} />)
        }
      </div>
    )
  }
}
