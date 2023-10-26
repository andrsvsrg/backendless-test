import chart from '../assets/chart.jpg'

function DummyChart() {
  return (
    <div className="dummy-wrapper">
      <div className="dummy-header">
        <h2>Charts</h2>
      </div>
      <img src={chart} alt="chart" />
    </div>
  )
}

export default DummyChart
