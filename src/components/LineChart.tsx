import { LineChart as LineChartMui } from '@mui/x-charts/LineChart'

export const LineChart = () => {
  // Uso datos estaticos para no hacer uso de la API de YouTube
  const uData = [3000, 2000, 2780, 1890, 2390, 3490]
  const pData = [1398, 9800, 3908, 4800, 3800, 4300]
  const xLabels = ['2019', '2020', '2021', '2022', '2023', '2024']

  return (
    <div className="line-chart">
      <LineChartMui
        height={300}
        sx={{
          minWidth: '300px',
          width: '80%',
        }}
        series={[
          { data: pData, label: 'subscribers', yAxisKey: 'leftAxisId', color: 'red' },
          { data: uData, label: 'views', yAxisKey: 'rightAxisId' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      />
    </div>
  )
}
