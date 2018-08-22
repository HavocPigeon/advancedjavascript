import React, { Component } from 'react';
import axios from 'axios';

export default class AsyncAwait extends Component {
  state = {
    gods: [],
    error: null,
  }
  
  async componentDidMount() {
    // axios.get('https://apis.devmountain.com/gods/', {
    //     headers: {
    //         apikey: 'easton'
    //     }
    // }).then(response => {
    //   this.setState({ gods: response.data })
    // })
    try {
    const response = await axios.get('https://apis.devmountain.com/gods/', {
            headers: {
                apikey: 'easton'
            }
        })
        this.setState({gods: response.data})
        } catch (error){
            console.log(error)
            this.setState({
                error
            })
        }
  }
  
  render() {
    const { gods, error } = this.state;
    
    return (
      <div>
          {error 
          ? <div>Oh no, an error</div>
          : <div> Gods:
          {gods.map(x => <div key={x.name}>{x.name}</div>)}
          </div>}
      </div>
    );
  }
}