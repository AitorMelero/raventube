import { ChannelType, SearchVideoAPI, VideoType } from '@/types/types'
import { TOKEN_NAME, YT_URL } from '@/utils/consts'
import { MD5 } from 'crypto-js'

export async function searchChannel(nameChannel: string): Promise<ChannelType | null> {
  const PART = 'snippet,statistics'
  const FOR_HANDLE = '@' + nameChannel
  const ACCEPT = 'application/json'
  const MAX_RESULT = '1'
  const token = localStorage.getItem(TOKEN_NAME)

  return fetch(
    `${YT_URL}/channels?part=${PART}&forHandle=${FOR_HANDLE}&key=${token}&accept=${ACCEPT}&maxResults=${MAX_RESULT}`,
  )
    .then((res) => {
      if (!res.ok) throw new Error('Search Channel Error')

      return res.json()
    })
    .then((data) => {
      if (data.pageInfo.totalResults === 0) return null

      const snippet = data.items[0].snippet
      const statistics = data.items[0].statistics

      return {
        id: data.items[0].id,
        title: snippet.title,
        customUrl: snippet.customUrl,
        description: snippet.description,
        imageUrl: snippet.thumbnails.high.url,
        statistics: {
          viewCount: statistics.viewCount,
          subscriberCount: statistics.subscriberCount,
          videoCount: statistics.videoCount,
        },
      }
    })
}

export async function searchVideos(idChannel: string): Promise<VideoType[] | null> {
  const PART = 'snippet'
  const TYPE = 'video'
  const ACCEPT = 'application/json'
  const MAX_RESULT = '12'
  const ORDER = 'date'
  const token = localStorage.getItem(TOKEN_NAME)

  return fetch(
    `${YT_URL}/search?part=${PART}&channelId=${idChannel}&type=${TYPE}&key=${token}&accept=${ACCEPT}&maxResults=${MAX_RESULT}&order=${ORDER}`,
  )
    .then((res) => {
      if (!res.ok) throw new Error('Search Video Error')

      return res.json()
    })
    .then((data) => {
      if (data.pageInfo.totalResults === 0) return null

      const videos: VideoType[] = []
      const items = data.items as SearchVideoAPI[]

      items.forEach((item) => {
        const video: VideoType = {
          id: item.id.videoId,
          name: item.snippet.title,
          imageUrl: item.snippet.thumbnails.high.url,
          videoDate: item.snippet.publishedAt.substring(0, 10),
          visits: 100,
          hashmd5: MD5(item.snippet.title),
        }

        videos.push(video)
      })

      return videos
    })
}
