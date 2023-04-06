

// function getPosts() {
    
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     // Método para tratar a primeira promise
//     // Then - trata as promises
//     .then(response => response.json())
//     .then(json => console.log(json))

// }

// getPosts();

// OU

// const getPosts = () => {
    
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json))

// }

// getPosts();

// OU



const getPosts = (url) => {
    
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

}

getPosts('https://jsonplaceholder.typicode.com/posts');
