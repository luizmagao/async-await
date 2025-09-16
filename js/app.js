import axios from 'axios';

axios.get('https://dattebayo-api.onrender.com/characters')
  .then(function (response) {
    // manipula a resposta da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula os erros
    console.log(error);
  })

const getAPI = () => {
    const result = fetch('https://dattebayo-api.onrender.com/characters')
                .then(response => response.json())
    return result;
}

const animes = getAPI()
    .then(data => {
        const characters = data.characters

        characters.forEach(element => {

            const container = document.querySelector('[data-container]')
            const dataCard = document.createElement('div')
            dataCard.dataset.card = ''
            dataCard.classList.add('card')
            dataCard.classList.add('m-2')

            const title = document.createElement('div')
            title.dataset.title = ''
            title.innerText = element.name
            dataCard.appendChild(title)

            const imageDiv = document.createElement('div')
            imageDiv.dataset.image = ''
            
            const image = document.createElement('img')
            image.src = element.images[0] ?? null

            imageDiv.appendChild(image)
            dataCard.appendChild(imageDiv)
            
            container.appendChild(dataCard)
            
        });

    })
