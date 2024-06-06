import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToken } from './useToken'
import { ChannelType, VideoType } from '@/types/types'
import {
  searchChannel as searchChannelService,
  searchVideos as searchVideosService,
} from '@/services/search'

interface HomePageHookType {
  token: string | null
  isSearching: boolean
  isSearchingVideos: boolean
  search: string
  channel: ChannelType | undefined
  isVideos: boolean
  videos: VideoType[]
  currentPage: number
  handleLogout: () => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  onChangeSearch: (event: React.FormEvent<HTMLInputElement>) => void
  handleChangeView: (clickVideos: boolean) => void
  searchVideos: (channelId: string, pageToken?: string) => Promise<void>
  goPrevPage: () => void
  goNextPage: () => void
}

export const useHomePage = (): HomePageHookType => {
  const { token, deleteToken } = useToken()
  const [isSearching, setIsSearching] = useState(false)
  const [isSearchingVideos, setIsSearchingVideos] = useState(false)
  const [search, setSearch] = useState('')
  const [channel, setChannel] = useState<ChannelType | undefined>()
  const [isVideos, setIsVideos] = useState(true)
  const [videos, setVideos] = useState<VideoType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  const goPrevPage = () => {
    if (channel && videos.length > 0) {
      searchVideos(channel.id, videos[0].prevPageToken)
      setCurrentPage(currentPage - 1)
    }
  }

  const goNextPage = () => {
    if (channel && videos.length > 0) {
      searchVideos(channel.id, videos[0].nextPageToken)
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    setCurrentPage(1)
    if (channel) {
      searchVideos(channel.id)
    }
  }, [channel])

  const handleLogout = () => {
    deleteToken()
    navigate('/login')
  }

  const handleChangeView = (clickVideos: boolean) => {
    setIsVideos(clickVideos)
  }

  const onChangeSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const searchChannel = async () => {
    setIsSearching(true)
    setIsSearchingVideos(true)
    setVideos([])
    setChannel(undefined)

    // No buscamos si el campo de busqueda esta vacio
    if (search === '') {
      setIsSearching(false)
      setIsSearchingVideos(false)
      return
    }

    // Simulamos una espera de 2 segundos para que parezca mas real la busqueda
    setTimeout(async () => {
      const result = await searchChannelService(search)

      setIsSearching(false)

      if (result !== null) {
        setChannel(result)
      } else {
        setIsSearchingVideos(false)
      }
    }, 2000)
  }

  const searchVideos = async (channelId: string, pageToken?: string) => {
    setIsSearchingVideos(true)
    setTimeout(async () => {
      const result = await searchVideosService(channelId, pageToken)

      if (result !== null) {
        setVideos(result)
      }
      setIsSearchingVideos(false)
    }, 1000)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchChannel()
  }

  return {
    token,
    isSearching,
    isSearchingVideos,
    search,
    channel,
    isVideos,
    videos,
    currentPage,
    handleLogout,
    handleSubmit,
    onChangeSearch,
    handleChangeView,
    searchVideos,
    goPrevPage,
    goNextPage,
  }
}
