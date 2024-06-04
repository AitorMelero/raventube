import { VideoType } from '@/types/types'
import { Video } from './Video'

interface Props {
  videos: VideoType[]
}

export const VideosContainer: React.FC<Props> = ({ videos = [] }) => {
  return (
    <div className="home-page__videos">
      {videos.length === 0 ? (
        <p className="no-videos-message">There are no videos to show</p>
      ) : (
        videos.map((video) => {
          return <Video key={video.id} videoData={video} />
        })
      )}
    </div>
  )
}
