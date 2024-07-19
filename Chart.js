<script>
  // Get the canvas element
  const ctx = document.getElementById('myChart').getContext('2d');

  // Create the chart
  const myChart = new Chart(ctx, {
    type: 'bar', // Choose the chart type
    data: {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      datasets: [{
        label: 'M',
        data: [50, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Your data for each month
        backgroundColor: '#6c757d',
        borderColor: '#6c757d',
        borderWidth: 1
      }, {
        label: 'S',
        data: [10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Your data for each month
        backgroundColor: '#28a745',
        borderColor: '#28a745',
        borderWidth: 1
      }, {
        label: 'A',
        data: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Your data for each month
        backgroundColor: '#ffc107',
        borderColor: '#ffc107',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Get the canvas element for the second chart
  const ctx2 = document.getElementById('myChart2').getContext('2d');

  // Create the second chart
  const myChart2 = new Chart(ctx2, {
    type: 'bar', // Choose the chart type
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'April', 'Mei', 'Juni', 'Juli', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
      datasets: [{
        label: 'M',
        data: [25, 10, 100, 0, 5, 0, 0, 0, 0, 0, 0, 0], // Your data for each month
        backgroundColor: '#6c757d',
        borderColor: '#6c757d',
        borderWidth: 1
      }, {
        label: 'S',
        data: [25, 10, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0], // Your data for each month
        backgroundColor: '#28a745',
        borderColor: '#28a745',
        borderWidth: 1
      }, {
        label: 'A',
        data: [25, 10, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0], // Your data for each month
        backgroundColor: '#ffc107',
        borderColor: '#ffc107',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>