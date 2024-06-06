interface Props {
  title: string
  data: string
  classStyles: string
}

export const DataContainer: React.FC<Props> = ({ title, data, classStyles }) => {
  return (
    <div className={classStyles}>
      <p className="dashboard-data__title">{title}</p>
      <p className="mb-2 dashboard-data__text">{data}</p>
    </div>
  )
}
