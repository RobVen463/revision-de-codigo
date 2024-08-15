const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Cambiado a '.name'
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...'; 
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();//agregar el .json
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (error) {
    handleError(error);//corrigeido variables
  }
}

function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  $n.textContent = `Algo salió mal: ${error}`;
}

displayUser('stolinski').catch(handleError);