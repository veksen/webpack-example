import chart from 'chart.js';
import datasets from './datasets';
import './main.css';

const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      "Red",
      "Blue",
      "Yellow",
      "Green",
      "Purple",
      "Orange"
    ],
    datasets
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
