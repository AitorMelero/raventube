import { ChannelType, SearchVideoAPI, VideoType } from '@/types/types'
import { callAPI, callAPISimulation } from '@/utils/api'
import { MD5 } from 'crypto-js'
import { isTestUser } from './login'
import { getEnvVariables } from '@/utils/envVariables'

export async function searchChannel(nameChannel: string): Promise<ChannelType | null> {
  const PART = 'snippet,statistics,brandingSettings'
  const FOR_HANDLE = '@' + nameChannel.replaceAll(' ', '')
  const ACCEPT = 'application/json'
  const MAX_RESULT = '1'
  const endpoint = `/channels?part=${PART}&forHandle=${FOR_HANDLE}&accept=${ACCEPT}&maxResults=${MAX_RESULT}`

  // Comprobamos si el usario es el de test llamar a la API real o a la de simulacion
  const apiCall = isTestUser(localStorage.getItem(getEnvVariables().VITE_TOKEN_NAME))
    ? callAPISimulation('channel', 'Search Local Channel Error', FOR_HANDLE)
    : callAPI(endpoint, 'Search Channel Error')

  return apiCall
    .then((data) => {
      if (data.pageInfo.totalResults === 0) return null

      const snippet = data.items[0].snippet
      const statistics = data.items[0].statistics
      const brandingSettings = data.items[0].brandingSettings

      return {
        id: data.items[0].id,
        title: snippet.title,
        customUrl: snippet.customUrl,
        description: snippet.description,
        imageUrl: snippet.thumbnails.high.url,
        date: snippet.publishedAt.substring(0, 10),
        statistics: {
          viewCount: statistics.viewCount,
          subscriberCount: statistics.subscriberCount,
          videoCount: statistics.videoCount,
        },
        tags: brandingSettings.channel.keywords,
      }
    })
    .catch(() => null)
}

export async function searchVideos(idChannel: string): Promise<VideoType[] | null> {
  const PART = 'snippet'
  const TYPE = 'video'
  const ACCEPT = 'application/json'
  const MAX_RESULT = '12'
  const ORDER = 'date'
  const endpoint = `/search?part=${PART}&channelId=${idChannel}&type=${TYPE}&accept=${ACCEPT}&maxResults=${MAX_RESULT}&order=${ORDER}`

  // Comprobamos si el usario es el de test llamar a la API real o a la de simulacion
  const apiCall = isTestUser(localStorage.getItem(getEnvVariables().VITE_TOKEN_NAME))
    ? callAPISimulation('videos', 'Search Local Videos Error', idChannel)
    : callAPI(endpoint, 'Search Videos Error')

  return apiCall
    .then((data) => {
      if (data.pageInfo.totalResults === 0) return null

      const videos: VideoType[] = []
      const items = data.items as SearchVideoAPI[]

      items.forEach(async (item) => {
        const video: VideoType = {
          id: item.id.videoId,
          name: item.snippet.title,
          imageUrl: item.snippet.thumbnails.high.url,
          videoDate: item.snippet.publishedAt.substring(0, 10),
          // No hago la busqueda de las visualizaciones reales
          // para no gastar en exceso la cuota de la API
          visits: Math.floor(Math.random() * 1000000),
          hashmd5: MD5(item.snippet.title),
        }

        videos.push(video)
      })

      return videos
    })
    .catch(() => null)
}
