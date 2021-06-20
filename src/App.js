import React, { Component}  from 'react'
import './App.css'
import img from './image.jpg'
import Text from './components/Text'
import BtnTest from './components/Button'
import Titre from './components/Title'
import ApiData from './api.json'



export class App extends Component {

    state ={
      altImg : 'image test',
      count : 0,
      color : '#00a174',
      altChevron : 'image chevron'
    }

    componentDidMount () {
      const count = localStorage.getItem('count')
      const color = localStorage.getItem('color')

      this.setState({color})

      if (count) {
        this.setState({count})
      } else {
        this.setState({ count: 0 })
      }
    }

    componentDidUpdate () {
      const { count, color } = this.state
      localStorage.setItem('count', count)
      localStorage.setItem('color', color)
    }

    ChangeColorText = () => {
      this.setState({ count : this.state.count + 1 });
      var randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
      this.setState({ color : randomColor});  
    }

    render() {

    const Title = ApiData[0].title ;

    return (
      <div className="BoxCard">
        <img className="ImgBanner" alt={this.state.altImg}  src={img} />
        <Titre
          color={this.state.color}
          content={Title}
        />
        <Text />
        <span className="counterEx" style={{display: this.state.count <= 0 ? 'none' : 'block' }} >{this.state.count}</span>
        <BtnTest
          PlusUn={this.ChangeColorText}
          nbrUn={this.state.count}
          altText={this.state.altChevron}
        />       
      </div>
    )
  }
}

export default App

