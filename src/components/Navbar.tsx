interface Props {
  isVideos: boolean
  handleChangeView: (clickVideos: boolean) => void
}

export const Navbar: React.FC<Props> = ({ isVideos, handleChangeView }) => {
  return (
    <ul className="nav justify-content-center gap-3">
      <li>
        <button
          className={`${isVideos ? 'navbar-button--selected' : 'navbar-button'}`}
          onClick={() => handleChangeView(true)}
        >
          Videos
        </button>
      </li>
      <li>
        <button
          className={`${isVideos ? 'navbar-button' : 'navbar-button--selected'}`}
          onClick={() => handleChangeView(false)}
        >
          Dashboard
        </button>
      </li>
    </ul>
  )
}
