// Simulasi Regresi function jalankanRegresi() { const xInput = document.getElementById("xValues").value.split(',').map(Number); const yInput = document.getElementById("yValues").value.split(',').map(Number);

if (xInput.length !== yInput.length || xInput.includes(NaN) || yInput.includes(NaN)) { document.getElementById("hasilRegresi").innerText = "Data tidak valid. Pastikan jumlah X dan Y sama dan berupa angka."; return; }

const n = xInput.length; const sumX = xInput.reduce((a, b) => a + b, 0); const sumY = yInput.reduce((a, b) => a + b, 0); const sumXY = xInput.reduce((acc, x, i) => acc + x * yInput[i], 0); const sumX2 = xInput.reduce((acc, x) => acc + x * x, 0);

const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX); const b = (sumY - a * sumX) / n;

const hasil = Persamaan regresi: y = ${a.toFixed(2)}x + ${b.toFixed(2)}; document.getElementById("hasilRegresi").innerText = hasil; }

// Kuis 1 function cekJawaban1() { const jawaban = document.getElementById("jawaban1").value; const hasil = (jawaban == 4) ? "Benar!" : "Salah, coba lagi."; document.getElementById("hasil1").innerText = hasil; }

// Kuis 2 function cekKuis2() { const pilihan = document.querySelector('input[name="soal2"]:checked'); if (!pilihan) { document.getElementById("hasilKuis2").innerText = "Pilih salah satu jawaban."; return; } const hasil = (pilihan.value == "14") ? "Jawaban benar!" : "Jawaban salah."; document.getElementById("hasilKuis2").innerText = hasil; }

// Scroll ke atas function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
