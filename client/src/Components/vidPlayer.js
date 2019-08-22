import React, { Component } from 'react'

import ReactPlayer from 'react-player'

import Navbar from './Navbar'

class Video extends Component {
    render () {
        return (
        <div>
        <Navbar />
        <ReactPlayer url='https://vimeo.com/247003506' playing />
        <ReactPlayer url='https://vimeo.com/196279477' />
        <ReactPlayer url='https://vimeo.com/185302989'  />
        <ReactPlayer url='https://www.youtube.com/watch?v=kFU-Sv6q7HU' />
        <ReactPlayer url='https://vimeo.com/196351548' />
        </div>
        )
    }
}

export default Video;