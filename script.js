<!DOCTYPE html><html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MathLab Digital</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <header>
    <h1>MathLab Digital</h1>
    <nav>
      <ul>
        <li><a href="#beranda">Beranda</a></li>
        <li><a href="#materi">Materi</a></li>
        <li><a href="#simulasi">Simulasi</a></li>
        <li><a href="#kuis">Kuis</a></li>
      </ul>
    </nav>
  </header>  <main>
    <section id="beranda" class="content-section">
      <h2>Selamat Datang di MathLab Digital</h2>
      <p>Platform interaktif untuk pembelajaran matematika SMK Teknik, khususnya materi Regresi Linier Sederhana.</p>
    </section><section id="materi" class="content-section">
  <h2>Materi: Regresi Linier Sederhana</h2>
  <p>
    Regresi linier sederhana digunakan untuk memodelkan hubungan antara satu variabel bebas (X) dan satu variabel terikat (Y).
  </p>
  <h3>1. Tujuan</h3>
  <ul>
    <li>Menentukan hubungan antara X dan Y</li>
    <li>Memperkirakan nilai Y dari X</li>
  </ul>
  <h3>2. Rumus Regresi</h3>
  <p><strong>Y = aX + b</strong></p>
  <h3>3. Menghitung a dan b</h3>
  <p>
    a = (nΣXY - ΣXΣY) / (nΣX² - (ΣX)²)<br>
    b = (ΣY - aΣX) / n
  </p>
  <h3>4. Contoh Soal</h3>
  <table border="1" cellpadding="6">
    <tr><th>X</th><th>Y</th></tr>
    <tr><td>1</td><td>2</td></tr>
    <tr><td>2</td><td>4</td></tr>
    <tr><td>3</td><td>5</td></tr>
    <tr><td>4</td><td>4</td></tr>
    <tr><td>5</td><td>5</td></tr>
  </table>
  <h3>5. Interpretasi</h3>
  <p>
    Koefisien a menunjukkan arah dan kekuatan hubungan antara X dan Y.
  </p>
</section>

<section id="simulasi" class="content-section">
  <h2>Simulasi Regresi Linier</h2>
  <p>Masukkan nilai X dan Y (pisahkan dengan koma):</p>
  <input type="text" id="xValues" placeholder="Contoh: 1,2,3,4,5"><br><br>
  <input type="text" id="yValues" placeholder="Contoh: 2,4,5,4,5"><br><br>
  <button onclick="jalankanRegresi()">Jalankan Simulasi</button>
  <div id="hasilRegresi" style="margin-top:20px;"></div>
  <canvas id="grafikRegresi" width="600" height="400" style="margin-top:20px;"></canvas>
</section>

<section id="kuis" class="content-section">
  <h2>Kuis Regresi Linier</h2>
  <p>(Kuis interaktif akan ditambahkan di tahap berikutnya.)</p>
</section>

  </main>  <footer>
    <p>&copy; 2025 Zakalina Natalia Puspitasari - MathLab Digital</p>
  </footer>  <script src="script.js"></script></body>
</html>
