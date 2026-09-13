const memories = [
  { caption: "Berawal dari kamu yang minta buat gantiin jadwal piket", img: "foto 1.jpeg" },
  { caption: "Seiring berjalan nya waktu kita dah deket, nde foto iku sek sama sama gengsi gae foto ber 2 wkwkw tapi lucuu", img: "foto 2.jpeg" },
  { caption: "Nah ini kita pas first date ihiyyy, nde situ aku nangis pas moleh ne karena wedi ga ketemu kamu lagi, TEYUS GA LAMA KAMU PACARIN AAARRRGGGG", img: "foto 3.jpeg" },
  { caption: "Itu foto waktu kita awal awal pacaran, TAK TERHINGGA BAHAGIA KUUU", img: "foto 4.jpeg" },
  { caption: "Dan itu kita yang sekarang, dan seterus nyaa bakal selalu sama sama", img: "foto 5.jpeg" },
  { caption: "1 tahun kita bikin banyak banget momen, ayoo kita bikin banyak momen yang lebih bahagia lagi di hari hari dan tahun berikutnya, LOVE U SAYANGKUUU", img: "foto 6.jpeg" }
];

const grid = document.getElementById('grid');

memories.forEach(function (m) {
  const card = document.createElement('div');
  card.className = 'polaroid';

  card.innerHTML = `
    <div class="tape"></div>
    <div class="polaroid-frame">
      ${m.img
        ? `<img src="${m.img}" alt="${m.caption}">`
        : `<span class="placeholder-mark">ganti<br>dengan foto</span>`
      }
    </div>
    <div class="polaroid-caption">${m.caption}</div>
  `;
  grid.appendChild(card);
});

const startDate = new Date('2025-09-14T00:00:00');

function updateCounter() {
  const now = new Date();
  const diffMs = now - startDate;               
  const totalSeconds = Math.floor(diffMs / 1000);

  const days = Math.floor(totalSeconds / 86400);            
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById('dayCount').textContent = days;
  document.getElementById('hh').textContent = String(hours).padStart(2, '0');
  document.getElementById('mm').textContent = String(minutes).padStart(2, '0');
  document.getElementById('ss').textContent = String(seconds).padStart(2, '0');
}

updateCounter();               
setInterval(updateCounter, 1000);

const openBtn = document.getElementById('openBtn');
const letterBody = document.getElementById('letterBody');

openBtn.addEventListener('click', function () {
  const isOpen = letterBody.classList.contains('open');

  if (isOpen) {
  
    letterBody.style.maxHeight = '0px';
    letterBody.classList.remove('open');
    openBtn.textContent = 'pencet en sayang';
  } else {
  
    letterBody.classList.add('open');
    letterBody.style.maxHeight = letterBody.scrollHeight + 'px';
    openBtn.textContent = 'dah celecai cintaa';
  }
});
