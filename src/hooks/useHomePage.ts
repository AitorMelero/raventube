import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CryptoJS from 'crypto-js'
import { useToken } from './useToken'
import { ChannelType, VideoType } from '@/types/types'
import { searchChannel as searchChannelService } from '@/services/search'

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
      searchVideos(result)
    }

    setIsSearching(false)
  }

  const searchVideos = (channel: ChannelType) => {
    const id = 'UCSf6S_PAhXsqGMTPDiKgdRg'
    // const idChannel = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'
    // const imageUrl = 'https://i.ytimg.com/vi/oWDrQa6jymc/hqdefault.jpg'
    const imageUrl = 'https://i.ytimg.com/vi/3YeGBlKZdp4/hqdefault.jpg'
    const name = 'Google I/O 2013 Highlights'
    const videoDate = '2013-06-04T21:13:09Z'
    const visits = 25

    const newVideo: VideoType = {
      id,
      name,
      imageUrl,
      videoDate,
      visits,
      hashmd5: CryptoJS.MD5(name),
    }

    setVideos([
      newVideo,
      newVideo,
      newVideo,
      newVideo,
      newVideo,
      newVideo,
      newVideo,
      newVideo,
      newVideo,
      newVideo,
      newVideo,
      newVideo,
    ])
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
