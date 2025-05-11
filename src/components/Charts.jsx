import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Charts({ users, posts }) {
  const chartOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Users', 'Posts'],
    },
  };

  const chartSeries = [
    {
      name: 'Count',
      data: [users.length, posts.length],
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-4">Data Visualization</h3>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        width="100%"
        height={300}
      />
    </div>
  );
}