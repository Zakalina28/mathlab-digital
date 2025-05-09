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
  }
}