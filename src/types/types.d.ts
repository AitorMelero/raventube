export interface LoginType {
  username: string
  password: string
}

export interface VideoType {
  id: string
  name: string
  imageUrl: string
  videoDate: string
  visits: number
  hashmd5: CryptoJS.lib.WordArray
}

// Tipo de la API que nos interesa
export interface SearchVideoAPI {
  id: {
    videoId: string
  }
  snippet: {
    publishedAt: string
    title: string
    thumbnails: {
      high: {
        url: string
      }
    }
  }
}

export interface ChannelStatistics {
  viewCount: string
  subscriberCount: string
  videoCount: string
}

export interface ChannelType {
  id: string
  title: string
  customUrl: string
  description: string
  imageUrl: string
  statistics: ChannelStatistics
  date: string
  tags: string
}
