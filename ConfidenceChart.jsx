import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { day: 'Mon', confidence: 0.4 },
  { day: 'Tue', confidence: 0.6 },
  { day: 'Wed', confidence: 0.75 },
];

export default function ConfidenceChart() {
  return (
    <LineChart width={350} height={200} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" />
      <Line type="monotone" dataKey="confidence" stroke="#8884d8" />
    </LineChart>
  );
}