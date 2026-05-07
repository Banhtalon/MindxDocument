import { app, auth, db } from './firebase-config.js';

const searchInput = document.getElementById('search-input');
const pokeImage = document.getElementById('pokemon-image');
const pokeName = document.getElementById('pokemon-name');
const pokeType = document.getElementById('pokemon-type');
const pokeHeight = document.getElementById('pokemon-height');
const pokeWeight = document.getElementById('pokemon-weight');
const pokeBio = document.getElementById('pokemon-bio');

// Lắng nghe sự kiện nhấn phím Enter
searchInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      fetchPokemonData(query);
    }
  }
});

async function fetchPokemonData(pokemonQuery) {
  try {
    // Hiển thị trạng thái đang tải
    pokeName.innerText = 'Loading...';
    pokeBio.innerText = 'Please wait...';

    // 1. Gọi API lấy thông tin cơ bản
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`
    );

    if (!response.ok) {
      throw new Error('Không tìm thấy Pokemon!');
    }

    const data = await response.json();

    // 2. Gọi API thứ 2 để lấy thông tin mô tả (Bio/Flavor Text)
    const speciesResponse = await fetch(data.species.url);
    const speciesData = await speciesResponse.json();

    // Lấy đoạn text tiếng Anh đầu tiên làm Bio
    const bioEntry = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === 'en'
    );
    const bioText = bioEntry
      ? bioEntry.flavor_text.replace(/\f/g, ' ')
      : 'No biography available.';

    // 3. Cập nhật giao diện (DOM Manipulation)
    pokeName.innerText = data.name;
    pokeHeight.innerText = data.height / 10 + 'm'; // API trả về decimet
    pokeWeight.innerText = data.weight / 10 + 'kg'; // API trả về hectogram
    pokeType.innerText = data.types.map((t) => t.type.name).join(', ');
    pokeBio.innerText = bioText;

    // Lấy ảnh đẹp nhất hiện có
    pokeImage.src =
      data.sprites.other['official-artwork'].front_default ||
      data.sprites.front_default;
  } catch (error) {
    alert(error.message);
    pokeName.innerText = 'Not Found';
    pokeBio.innerText = 'Please try another name or ID.';
    pokeImage.src = ''; // Xóa ảnh nếu lỗi
  }
}
