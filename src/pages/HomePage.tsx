import { Navigate } from 'react-router-dom'
import { Dashboard } from '@/components/Dashboard'
import { Navbar } from '@/components/Navbar'
import { VideosContainer } from '@/components/VideosContainer'
import { useHomePage } from '@/hooks/useHomePage'
import { ChannelInfo } from '@/components/ChannelInfo'

export const HomePage = () => {
  // Los datos principales y el comportamiento de la pantalla
  // los gestionamos con un custom hook: useHomePage
  const {
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
    goPrevPage,
    goNextPage,
  } = useHomePage()

  return (
    <>
      {token === null ? (
        <Navigate to={'/login'} />
      ) : (
        <div className="home-page">
          <header className="home-page__header">
            <button className="btn home-page__button--logout" onClick={handleLogout}>
              Logout
            </button>
          </header>
          <main className="home-page__main">
            <h1 className="home-page__title">RavenTube</h1>
            <form method="post" className="home-page__form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                id="formControl"
                placeholder="Search a channel"
                value={search}
                onChange={onChangeSearch}
              />
              <button className="btn btn-secondary" type="submit" disabled={isSearching}>
                Search
              </button>
            </form>
            <section className="home-page__section">
              <ChannelInfo channel={channel} isLoading={isSearching} />
              <Navbar isVideos={isVideos} handleChangeView={handleChangeView} />
              <hr className="home-page__separator" />
              {isVideos ? (
                <VideosContainer
                  videos={videos}
                  totalVideos={channel ? Number(channel.statistics.videoCount) : 0}
                  goPrevPage={goPrevPage}
                  goNextPage={goNextPage}
                  currentPage={currentPage}
                  isSearchingVideos={isSearchingVideos}
                />
              ) : (
                <Dashboard channel={channel} isSearching={isSearching} />
              )}
            </section>
          </main>
        </div>
      )}
    </>
  )
}
