const header = {
    'Content-type': 'application/json; charset=UTF-8'
}

const deletePost = async (id) => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method: 'DELETE',
    });

console.log("Deletado");


}

deletePost();