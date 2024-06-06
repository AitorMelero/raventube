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

// Custom Hook para gestionar datos y comportamientos de la pantalla de Home
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

  // Cada vez que cambia el canal, buscamos los videos
  useEffect(() => {
    setCurrentPage(1)
    if (channel) {
      searchVideos(channel.id)
    }
  }, [channel])

  // Vamos a la pagina previa de videos
  const goPrevPage = () => {
    if (channel && videos.length > 0) {
      searchVideos(channel.id, videos[0].prevPageToken)
      setCurrentPage(currentPage - 1)
    }
  }

  // Vamos a la siguiente pagina de videos
  const goNextPage = () => {
    if (channel && videos.length > 0) {
      searchVideos(channel.id, videos[0].nextPageToken)
      setCurrentPage(currentPage + 1)
    }
  }

  // Logout
  const handleLogout = () => {
    deleteToken()
    navigate('/login')
  }

  // Cambiamos la vista de videos a dashboard o viceversa
  const handleChangeView = (clickVideos: boolean) => {
    setIsVideos(clickVideos)
  }

  // Cambiamos el valor de busqueda del input
  const onChangeSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  // Buscamos los videos del canal y gestionamos la pantalla
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

  // Submit del contenedor de busqueda
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

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
