import { useState } from 'react'
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
  search: string
  channel: ChannelType | undefined
  isVideos: boolean
  videos: VideoType[]
  handleLogout: () => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  onChangeSearch: (event: React.FormEvent<HTMLInputElement>) => void
  handleChangeView: (clickVideos: boolean) => void
}

export const useHomePage = (): HomePageHookType => {
  const { token, deleteToken } = useToken()
  const [isSearching, setIsSearching] = useState(false)
  const [search, setSearch] = useState('')
  const [channel, setChannel] = useState<ChannelType | undefined>()
  const [isVideos, setIsVideos] = useState(true)
  const [videos, setVideos] = useState<VideoType[]>([])
  const navigate = useNavigate()

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
    setVideos([])
    setChannel(undefined)

    // No buscamos si el campo de busqueda esta vacio
    if (search === '') {
      setIsSearching(false)
      return
    }

    const result = await searchChannelService(search)

    if (result !== null) {
      setChannel(result)
      searchVideos(result.id)
    }

    setIsSearching(false)
  }

  const searchVideos = async (channelId: string) => {
    const result = await searchVideosService(channelId)

    if (result !== null) {
      setVideos(result)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchChannel()
  }
  return {
    token,
    isSearching,
    search,
    channel,
    isVideos,
    videos,
    handleLogout,
    handleSubmit,
    onChangeSearch,
    handleChangeView,
  }
}
