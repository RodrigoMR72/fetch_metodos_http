


const getById = (id) => {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => console.log(json))

    // catch captura erro, exibindo-o no console
        .catch(error => console.log(error))
        .finally(() => console.log('Terminou'))

}

getById(2);
getById(4);