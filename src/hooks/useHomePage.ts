import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CryptoJS from 'crypto-js'
import { useToken } from './useToken'
import { ChannelStatistics, ChannelType, VideoType } from '@/types/types'

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

  const searchChannel = () => {
    setIsSearching(true)
    const id = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'
    const title = 'Google for Developers'
    const customUrl = '@googledevelopers'
    const description =
      'Subscribe to join a community of creative developers and learn the latest in Google technology — from AI and cloud, to mobile and web.\n\nExplore more at developers.google.com\n\n'
    const imageUrl =
      'https://yt3.ggpht.com/vY3uYs71A_JwVcigyd2tVRHwuj05_cYktQSuzRCxta-9VFxHFtKjGrwG9WFi8ijXITBL3CwPQQ=s800-c-k-c0x00ffffff-no-rj'
    const statistics: ChannelStatistics = {
      viewCount: '280095510',
      subscriberCount: '2370000',
      videoCount: '6196',
    }

    const channel: ChannelType = {
      id,
      title,
      customUrl,
      description,
      imageUrl,
      statistics,
    }

    setChannel(channel)

    searchVideos(channel)

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

    console.log(channel)

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
