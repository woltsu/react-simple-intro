# react-simple-intro
## Demo  
![demo](https://raw.githubusercontent.com/woltsu/react-simple-intro/HEAD/demo.gif)  

## Usage
```
import React, { Component } from 'react';
import Intro from 'react-simple-intro'

class App extends Component {
  state = {
    introActive: true
  }

  render() {
    const slides = [
      {
        title: 'Title 1',
        image: '/image1',
        content: 'Place some content here.',
        color: '#59bbc4'
      },
      {
        title: 'Title 2',
        image: '/image2',
        content: 'It can really be anything...',
        color: '#8a8dee'
      },
      {
        title: 'Title 3',
        image: '/image3',
        content: 'Even a really long text! Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        color: '#6fc2b2'
      }
    ]
    return (
      <Intro slides={slides} active={this.state.introActive} onFinish={() => this.setState({ introActive: false })} />
    )
  }
}

export default App
```
