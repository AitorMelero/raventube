import { ChannelType } from '@/types/types'
import { Spinner } from './Spinner'

interface Props {
  channel: ChannelType | undefined
  isLoading?: boolean
}

export const ChannelInfo: React.FC<Props> = ({ channel, isLoading = false }) => {
  return (
    <section className="channel-info__section">
      {channel === undefined && !isLoading ? (
        <p className="channel-info__message--error">There is no channel to show</p>
      ) : channel !== undefined ? (
        <div className="channel-info__container">
          <div className="channel-info__image-container">
            <img
              className="channel-info__image"
              src={channel.imageUrl}
              onError={(event) => (event.currentTarget.src = './channel-image.jpg')}
            />
          </div>
          <article className="channel-info__article">
            <h3 className="channel-info__title">{channel.title}</h3>
            <p className="channel-info__main-data">{`${channel.customUrl + ' - ' + channel.statistics.subscriberCount + ' subscribers'}`}</p>
            <p className="channel-info__description">{channel.description}</p>
          </article>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  )
}
