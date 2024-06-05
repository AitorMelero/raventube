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
        <nav aria-label="Page navigation example" className="pagination-nav">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}
