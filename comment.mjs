//fetch request -> JSON placeholder
//async helps things run in the background
//fetch API to fetch things--u need http method and url.. if not specified the default is get(get comments as data)
export async function getComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            return response.json()
        
            // console.log(response)
        })
        .then((data) => {
            console.log(data)
            for (let i = 0; i < 30; i++) {
                let commentElement = document.createElement('p');
                // let commentContainer = document.querySelector(".commentContainer");
                commentElement.innerHTML = data[i].body;
                document.body.appendChild(commentElement);

            }
        });
}