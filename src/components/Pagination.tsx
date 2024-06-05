import { useState } from 'react'

interface Props {
  totalVideos: number
}

export const Pagination: React.FC<Props> = ({ totalVideos }) => {
  const [numPags] = useState(totalVideos === 0 ? totalVideos : totalVideos / 12)

  return (
    <>
      {numPags === 0 ? (
        <></>
      ) : (
        <nav className="pagination-nav">
          <ul className="pagination pagination-sm pagination-nav__list">
            <li className="page-item">
              <a className="page-item__link" href="#">
                Prev
              </a>
            </li>
            <li className="page-item">
              <p>1 of {Math.ceil(numPags)}</p>
            </li>
            <li className="page-item">
              <a className="page-item__link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}
