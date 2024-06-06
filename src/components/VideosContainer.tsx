import { VideoType } from '@/types/types'
import { Video } from './Video'
import { Pagination } from './Pagination'
import { Spinner } from './Spinner'

interface Props {
  videos: VideoType[]
  totalVideos: number
  goPrevPage: () => void
  goNextPage: () => void
  currentPage: number
  isSearchingVideos: boolean
}

export const VideosContainer: React.FC<Props> = ({
  videos = [],
  totalVideos,
  goPrevPage,
  goNextPage,
  currentPage,
  isSearchingVideos,
}) => {
  return (
    <div className="home-page__videos">
      {isSearchingVideos ? (
        <div className="no-videos-message">
          <Spinner />
        </div>
      ) : videos.length === 0 ? (
        <p className="no-videos-message">There are no videos to show</p>
      ) : (
        <>
          {videos.map((video) => {
            return <Video key={video.id} videoData={video} />
          })}
          <Pagination
            totalVideos={totalVideos}
            prevPage={videos[0].prevPageToken}
            nextPage={videos[0].nextPageToken}
            goPrevPage={goPrevPage}
            goNextPage={goNextPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  )
}
