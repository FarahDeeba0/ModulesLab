// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

export async function getPhotos() {

  fetch("https://jsonplaceholder.typicode.com/photos")
      
      .then((response) => response.json())
      .then((json) => {
        let body =document.querySelector('body')
        console.log(json[0].thumbnailUrl)
        // console.log(json[1].thumbnailUrl)
        let image = document.createElement('img')
        image.setAttribute('src', json[0].thumbnailUrl)
        body.append(image)
      //   for (let i = 0; i < 3; i++) {
      //     for (let j = 0; j < 3; j++) {
      //         let image = document.createElement('img')
      //         image.setAttribute('src', json[i * i + j].thumbnailUrl)
      //         image.setAttribute('class', 'photo')
      //         photoContainer.appendChild(image)
      //         image.onclick = function() {
      //             let rand = Math.floor(Math.random() * 4999)
      //             image.setAttribute('src', json[rand].thumbnailUrl)
      //         }
      //     }
      //     photoContainer.appendChild(document.createElement('br'))
      // }

      });
}