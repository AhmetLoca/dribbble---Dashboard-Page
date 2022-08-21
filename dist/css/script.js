
const labels = ['Feb 14', 'Feb 15', 'Feb 16', 'Feb17', 'Feb 18', 'Feb 19', 'Feb 20'];
const datapoints = [14, 15, 17, 17, 20, 18, 17];
const datapoints2 = [15, 13, 14, 18, 17, 16, 15];

const data = {
  labels: labels,
  datasets: [
    {

      data: datapoints,
      borderColor: "#6e6eef",
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }, {

      data: datapoints2,
      borderColor: "#686495",
      fill: false,
      tension: .4
    }
  ]
};

const ctx = document.getElementById('myChart').getContext('2d');
const config = {
  type: 'line',
  data: data,
  options: {
    elements: {
      point: {
        radius: 0,
        hoverRadius: 5
      }
    },
    responsive: true,
    plugins: {
      legend: false,
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        },
        grid: {
          display: false
        }
      },
      y: {
        display: true,
        suggestedMin: 0,
        suggestedMax: 20,
        ticks: {
          stepSize: 5
        }
      }
    }
  },
};
const myChart = new Chart(ctx, config);