interface Props {
  title: string
  data: string
}

export const DataContainer: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="">
      <div className="dashboard-data">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{data}</h6>
      </div>
    </div>
  )
}
