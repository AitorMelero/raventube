import { ChannelType } from '@/types/types'
import { DataContainer } from './DataContainer'
import { LineChart } from './LineChart'

interface Props {
  channel: ChannelType | undefined
}

export const Dashboard: React.FC<Props> = ({ channel }) => {
  return (
    <div className="home-page__videos">
      {channel === undefined ? (
        <p className="no-videos-message">There are no dashboard to show</p>
      ) : (
        <div>
          <section id="dashboard-section" className="dashboard-section">
            <DataContainer title="Subscribers" data={channel.statistics.subscriberCount} />
            <DataContainer title="Views" data={channel.statistics.viewCount} />
            <DataContainer title="Video Count" data={channel.statistics.videoCount} />
            <DataContainer title="Creation Date" data={channel.date} />
            <DataContainer title="Tags" data={channel.tags} />
          </section>
          <section>
            <LineChart />
          </section>
        </div>
      )}
    </div>
  )
}
