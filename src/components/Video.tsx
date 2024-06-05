import { VideoType } from '@/types/types'

interface Props {
  videoData: VideoType
}

export const Video: React.FC<Props> = ({ videoData }) => {
  const { name, imageUrl, videoDate, visits, hashmd5 } = videoData
  const md5String = hashmd5.toString()

  return (
    <div className="card video-card">
      <img src={imageUrl} className="card-img-top video-card__image" alt="Video Image" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text__container">
          <p className="card-text">
            <small className="video-card__text">{md5String}</small>
          </p>
          <p className="card-text">
            <small className="video-card__text">{visits}</small>
          </p>
          <p className="card-text">
            <small className="video-card__text">{videoDate}</small>
          </p>
        </div>
      </div>
    </div>
  )
}
