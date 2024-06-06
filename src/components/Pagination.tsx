import { useState } from 'react'

interface Props {
  totalVideos: number
  prevPage?: string
  nextPage?: string
  goPrevPage: () => void
  goNextPage: () => void
  currentPage: number
}

export const Pagination: React.FC<Props> = ({
  totalVideos,
  prevPage,
  nextPage,
  goPrevPage,
  goNextPage,
  currentPage,
}) => {
  const [numPags] = useState(totalVideos === 0 ? totalVideos : totalVideos / 12)

  const handlePrevPage = () => {
    goPrevPage()
  }

  const handleNextPage = () => {
    goNextPage()
  }

  return (
    <>
      {numPags === 0 ? (
        <></>
      ) : (
        <nav className="pagination-nav">
          <ul className="pagination pagination-sm pagination-nav__list">
            <li className="page-item">
              {prevPage ? (
                <a className="page-item__link" href="#" onClick={handlePrevPage}>
                  Prev
                </a>
              ) : (
                <p className="page-item__link--disabled">Prev</p>
              )}
            </li>
            <li className="page-item">
              <p>
                {currentPage} of {Math.ceil(numPags)}
              </p>
            </li>
            <li className="page-item">
              {nextPage ? (
                <a className="page-item__link" href="#" onClick={handleNextPage}>
                  Next
                </a>
              ) : (
                <p className="page-item__link--disabled">Next</p>
              )}
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}
