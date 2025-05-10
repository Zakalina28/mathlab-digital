// script.js function jalankanRegresi() { const xInput = document.getElementById("xValues").value; const yInput = document.getElementById("yValues").value; const xArray = xInput.split(",").map(Number); const yArray = yInput.split(",").map(Number);

if (xArray.length !== yArray.length || xArray.includes(NaN) || yArray.includes(NaN)) { alert("Pastikan jumlah nilai X dan Y sama dan valid!"); return; }

const n = xArray.length; const sumX = xArray.reduce((a, b) => a + b, 0); const sumY = yArray.reduce((a, b) => a + b, 0); const sumXY = xArray.reduce((sum, x, i) => sum + x * yArray[i], 0); const sumX2 = xArray.reduce((sum, x) => sum + x * x, 0);

const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX); const b = (sumY - a * sumX) / n;

let hasilHTML = <p><strong>Persamaan regresi:</strong> Y = ${a.toFixed(2)}X + ${b.toFixed(2)}</p>; document.getElementById("hasilRegresi").innerHTML = hasilHTML;

const yPrediksi = xArray.map(x => a * x + b);

const ctx = document.getElementById("grafikRegresi").getContext("2d"); if (window.regresiChart) window.regresiChart.destroy();

window.regresiChart = new Chart(ctx, { type: "line", data: { labels: xArray, datasets: [ { label: "Data Asli", data: yArray, borderColor: "blue", backgroundColor: "lightblue", tension: 0.3 }, { label: "Regresi", data: yPrediksi, borderColor: "red", fill: false, tension: 0.3 } ] }, options: { responsive: true, scales: { x: { title: { display: true, text: "X" } }, y: { title: { display: true, text: "Y" } } } } }); }
