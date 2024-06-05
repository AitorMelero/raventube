import { VideoType } from '@/types/types'
import { Video } from './Video'
import { Pagination } from './Pagination'

interface Props {
  videos: VideoType[]
  totalVideos: number
}

export const VideosContainer: React.FC<Props> = ({ videos = [], totalVideos }) => {
  return (
    <div className="home-page__videos">
      {videos.length === 0 ? (
        <p className="no-videos-message">There are no videos to show</p>
      ) : (
        <>
          {videos.map((video) => {
            return <Video key={video.id} videoData={video} />
          })}
          <Pagination totalVideos={totalVideos} />
        </>
      )}
    </div>
  )
}
