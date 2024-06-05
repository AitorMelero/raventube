import { ChannelType, SearchVideoAPI, VideoType } from '@/types/types'
import { TOKEN_NAME, YT_URL } from '@/utils/consts'
import { MD5 } from 'crypto-js'

async function callAPI(endpoint: string, errorMessage: string) {
  return fetch(endpoint).then((res) => {
    if (!res.ok) throw new Error(errorMessage)

    return res.json()
  })
}

export async function searchChannel(nameChannel: string): Promise<ChannelType | null> {
  const PART = 'snippet,statistics'
  const FOR_HANDLE = '@' + nameChannel.replaceAll(' ', '')
  const ACCEPT = 'application/json'
  const MAX_RESULT = '1'
  const token = localStorage.getItem(TOKEN_NAME)
  const endpoint = `${YT_URL}/channels?part=${PART}&forHandle=${FOR_HANDLE}&key=${token}&accept=${ACCEPT}&maxResults=${MAX_RESULT}`

  return callAPI(endpoint, 'Search Channel Error').then((data) => {
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
  const endpoint = `${YT_URL}/search?part=${PART}&channelId=${idChannel}&type=${TYPE}&key=${token}&accept=${ACCEPT}&maxResults=${MAX_RESULT}&order=${ORDER}`

  return await callAPI(endpoint, 'Search Videos error').then((data) => {
    if (data.pageInfo.totalResults === 0) return null

    const videos: VideoType[] = []
    const items = data.items as SearchVideoAPI[]

    items.forEach(async (item) => {
      const viewCount = await searchVideoCount(item.id.videoId)

      const video: VideoType = {
        id: item.id.videoId,
        name: item.snippet.title,
        imageUrl: item.snippet.thumbnails.high.url,
        videoDate: item.snippet.publishedAt.substring(0, 10),
        visits: viewCount,
        hashmd5: MD5(item.snippet.title),
      }

      videos.push(video)
    })

    return videos
  })
}

export async function searchVideoCount(idVideo: string): Promise<number> {
  const PART = 'snippet,statistics'
  const ACCEPT = 'application/json'
  const token = localStorage.getItem(TOKEN_NAME)
  const endpoint = `${YT_URL}/videos?part=${PART}&id=${idVideo}&key=${token}&accept=${ACCEPT}`

  return callAPI(endpoint, 'Search Video Count Error').then((data) => {
    if (data.pageInfo.totalResults === 0) return 0

    return data.items[0].statistics.viewCount as number
  })
}
