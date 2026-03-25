const form = document.getElementById('callForm');
const cardDisplay = document.getElementById('cardDisplay');
const closeBtn = document.getElementById('closeBtn');
const addBtn = document.getElementById('addBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let cards = [];
let currentIndex = 0;

function showCard(index) {
  if (cards.length === 0) {
    cardDisplay.innerHTML = `<p style="text-align:center;color:#888;">No cards yet 😅</p>`;
    return;
  }

  const card = cards[index];
  cardDisplay.innerHTML = `
    <div class="card-item">
      <img src="${card.img}" alt="photo" />
      <div class="info">
        <h3>${card.name}</h3>
        <p>Home town: ${card.town}</p>
        <p>Purpose: ${card.purpose}</p>
        <small>Category: ${card.category}</small>
      </div>
      <div class="actions">
        <button class="call-btn">Call</button>
        <button class="msg-btn">Message</button>
      </div>
    </div>
  `;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const img = document.getElementById('imgUrl').value || 'https://via.placeholder.com/60';
  const name = document.getElementById('fullName').value || 'Unknown';
  const town = document.getElementById('homeTown').value || '-';
  const purpose = document.getElementById('purpose').value || 'No purpose';
  const category = document.querySelector('input[name="category"]:checked')?.value || 'General';
  
  cards.push({ img, name, town, purpose, category });
  currentIndex = cards.length - 1;
  showCard(currentIndex);

  // hide form and show display
  form.classList.add('hidden');
  cardDisplay.classList.remove('hidden');
  form.reset();
});

addBtn.addEventListener('click', () => {
  form.classList.toggle('hidden');
  cardDisplay.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
  form.classList.add('hidden');
  cardDisplay.classList.remove('hidden');
});

nextBtn.addEventListener('click', () => {
  if (cards.length === 0) return;
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
});

prevBtn.addEventListener('click', () => {
  if (cards.length === 0) return;
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
});

// initial empty message
showCard(currentIndex);
