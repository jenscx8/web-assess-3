import axios from 'axios';

const btn = document.getElementById('get-random-fossil');
btn.addEventListener('click', async () => {
  try {
    const response = await axios.get('/random-fossil.json');
    const fossil = response.data;

    const fossilImage = document.getElementById('random-fossil-image');
    fossilImage.src = fossil.img;

    const fossilName = document.getElementById('random-fossil-name');
    fossilName.textContent = fossil.name;
  } catch (error) {
    console.error('Error retrieving random fossil:', error);
  }
});
