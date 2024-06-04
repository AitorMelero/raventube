import { Navbar } from '@/components/Navbar'
import { useToken } from '@/hooks/useToken'
import { Navigate } from 'react-router-dom'

export const HomePage = () => {
  const { token } = useToken()

  return (
    <>
      {token === null ? (
        <Navigate to={'/login'} />
      ) : (
        <div className="home-page">
          <header className="home-page__header">
            <button className="home-page__logout">Logout</button>
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
              <button>Search</button>
            </form>
            <section className="home-page__section">
              <Navbar />
              <div className="home-page__videos">
                <p className="no-videos-message">There are no videos to show</p>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  )
}
