import Chart from 'chart.js';

export default ({ data, label }) => {
  const myChart = new Chart(document.getElementById('myChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: data.map(datum => datum[0]),
      datasets: [{
        label,
        data: data.map(datum => datum[1]),
      }],
    }
  });
};
