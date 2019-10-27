import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'

const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('hario')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
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
