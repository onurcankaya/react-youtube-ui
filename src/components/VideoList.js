import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = (props) => {
  const videoItems = props.videos.map(video =>
    <VideoListItem
      video={video}
      key={video.etag}
    />
  )

  return (
    <div>
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    </div>
  )
}

export default VideoList
