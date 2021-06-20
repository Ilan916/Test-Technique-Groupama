import React, { Component } from 'react'
import ApiData from '../api.json'
import './Text.css'

export class Text extends Component {
    render() {
        const SubTitle = ApiData[0].subtitle ;
        const Texte = ApiData[0].content ;
        return (
            <div>
                <h2>{SubTitle}</h2>
                <p className="TextCard">{Texte}</p>
                
            </div>
        )
    }
}

export default Text
