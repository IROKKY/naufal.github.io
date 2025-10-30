// Ambil elemen musik dan tombol
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Flag untuk mengetahui apakah musik sudah dimulai
let musicStarted = false;

// Mulai musik otomatis setelah klik pertama di mana pun di halaman
document.addEventListener("click", () => {
  if (!musicStarted) {
    bgMusic.play().catch(() => {}); // agar tidak error di browser
    musicStarted = true;
    musicBtn.textContent = "🔇 Pause Music";
  }
});

// Hubungkan tombol ke fungsi
musicBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // supaya klik tombol tidak restart musik
  toggleMusic();
});
