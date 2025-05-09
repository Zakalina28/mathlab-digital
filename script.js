function jalankanSimulasi() {
  const output = document.getElementById('outputSimulasi');
  const x = [1, 2, 3, 4, 5];
  const y = x.map(n => 2 * n + 1);
  output.innerHTML = 'x = [' + x.join(', ') + ']<br>y = [' + y.join(', ') + '] (model: y = 2x + 1)';
}

function cekJawaban() {
  const jawaban = document.getElementById('jawaban').value;
  const hasil = document.getElementById('hasilKuis');
  if (jawaban == '4') {
    hasil.textContent = 'Benar!';
    hasil.style.color = 'green';
  } else {
    hasil.textContent = 'Coba lagi.';
    hasil.style.color = 'red';
 function cekKuisPG() {
  const jawaban = document.querySelector('input[name="soal1"]:checked');
  const hasil = document.getElementById("hasilKuisPG");
  if (!jawaban) {
    hasil.textContent = "Silakan pilih jawaban terlebih dahulu.";
  } else if (jawaban.value === "15") {
    hasil.textContent = "Jawaban benar!";
  } else {
    hasil.textContent = "Jawaban salah. Coba lagi!";
    function cekKuisPG() {
  const jawaban = document.querySelector('input[name="soal1"]:checked');
  const hasil = document.getElementById("hasilKuisPG");
  if (!jawaban) {
    hasil.textContent = "Silakan pilih jawaban terlebih dahulu.";
  } else if (jawaban.value === "15") {
    hasil.textContent = "Jawaban benar!";
  } else {
    hasil.textContent = "Jawaban salah. Coba lagi!";
  }
}

function gambarGrafik() {
  const ctx = document.getElementById("chartRegresi").getContext("2d");
  const dataX = [1, 2, 3, 4, 5];
  const dataY = [2, 4, 6, 8, 10];

  new Chart(ctx, {
    type: "line",
    data: {
      labels: dataX,
      datasets: [{
        label: "y = 2x",
        data: dataY,
        borderColor: "blue",
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
  }
}
  }
}
