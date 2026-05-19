import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Legend, Tooltip);

export default function SyllabusChart({ data, onSelectDomain }) {
  const labels = Object.keys(data);

  const chartData = {
    labels,
    datasets: [
      {
        data: labels.map((label) => data[label].weight),
        backgroundColor: labels.map((label) => data[label].color),
        borderColor: '#ffffff',
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          color: '#57534e',
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`,
        },
      },
    },
    onClick: (_event, elements, chart) => {
      if (elements[0]) {
        onSelectDomain(chart.data.labels[elements[0].index]);
      }
    },
    onHover: (event, elements) => {
      event.native.target.style.cursor = elements.length ? 'pointer' : 'default';
    },
  };

  return (
    <div className="chart-container" role="img" aria-label="Clickable syllabus weighting chart">
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
