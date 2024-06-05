import { ChannelType } from '@/types/types'
import { TOKEN_NAME, YT_URL } from '@/utils/consts'

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
      if (!res.ok) throw new Error('Search Error')

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
