import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {byAgeData} = props

  return (
    <PieChart width={1000} height={300}>
      <Pie
        cx="70%"
        cy="40%"
        data={byAgeData}
        startAngle={0}
        endAngle={360}
        innerRadius="0%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="18-44" fill="#fecba6" />
        <Cell name="44-60" fill="#b3d23f" />
        <Cell name="Above 60" fill="#a44c9e" />
      </Pie>
      <Legend
        iconType="circle"
        layout="vertical"
        verticalAlign="center"
        align="middle"
      />
    </PieChart>
  )
}

export default VaccinationByAge
