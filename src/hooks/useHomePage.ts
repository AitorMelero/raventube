import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CryptoJS from 'crypto-js'
import { useToken } from './useToken'
import { VideoType } from '@/types/types'

interface HomePageHookType {
  token: string | null
  search: string
  isVideos: boolean
  videos: VideoType[]
  handleLogout: () => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  onChangeSearch: (event: React.FormEvent<HTMLInputElement>) => void
  handleChangeView: (clickVideos: boolean) => void
}

export const useHomePage = (): HomePageHookType => {
  const { token, deleteToken } = useToken()
  const [search, setSearch] = useState('')
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
    search,
    isVideos,
    videos,
    handleLogout,
    handleSubmit,
    onChangeSearch,
    handleChangeView,
  }
}
