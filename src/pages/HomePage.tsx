import { Dashboard } from '@/components/Dashboard'
import { Navbar } from '@/components/Navbar'
import { VideosContainer } from '@/components/VideosContainer'
import { useToken } from '@/hooks/useToken'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const { token, deleteToken } = useToken()
  const [isVideos, setIsVideos] = useState(true)
  const navigate = useNavigate()

  const handleLogout = () => {
    deleteToken()
    navigate('/login')
  }

  const handleChangeView = (clickVideos: boolean) => {
    setIsVideos(clickVideos)
  }

  return (
    <>
      {token === null ? (
        <Navigate to={'/login'} />
      ) : (
        <div className="home-page">
          <header className="home-page__header">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </header>
          <main className="home-page__main">
            <h1 className="home-page__title">RavenTube</h1>
            <form className="home-page__form">
              <input
                type="text"
                className="form-control"
                id="formControl"
                placeholder="Search a channel"
              />
              <button className="btn btn-secondary">Search</button>
            </form>
            <section className="home-page__section">
              <Navbar isVideos={isVideos} handleChangeView={handleChangeView} />
              <hr className="home-page__separator" />
              {isVideos ? <VideosContainer /> : <Dashboard />}
            </section>
          </main>
        </div>
      )}
    </>
  )
}
