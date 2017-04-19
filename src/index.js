import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'

const API_KEY = 'AIzaSyDQP687G2lMOFgUA5j0np9QZi_4j4d6Y9M'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
