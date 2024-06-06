import { VideoType } from '@/types/types'

interface Props {
  videoData: VideoType
}

export const Video: React.FC<Props> = ({ videoData }) => {
  const { name, imageUrl, videoDate, visits, hashmd5 } = videoData
  const md5String = hashmd5.toString()

  return (
    <div className="card video-card">
      <img
        src={imageUrl}
        className="card-img-top video-card__image"
        alt="Video Image"
        height={200}
        onError={(event) => (event.currentTarget.src = './channel-image.jpg')}
      />
      <div className="card-body">
        <h5 className="video-card__title">{name}</h5>
        <div className="card-text__container">
          <p className="card-text">
            <small className="video-card__text--md5">{md5String}</small>
          </p>
          <p className="video-card__container--text">
            <small className="video-card__text">{visits + ' views'}</small>
            <small className="video-card__text">{'Published at ' + videoDate}</small>
          </p>
        </div>
      </div>
    </div>
  )
}
