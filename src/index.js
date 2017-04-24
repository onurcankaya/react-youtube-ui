import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
const API_KEY = 'AIzaSyDQP687G2lMOFgUA5j0np9QZi_4j4d6Y9M'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'v60'}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="video-items">
          <VideoDetails video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          />
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
