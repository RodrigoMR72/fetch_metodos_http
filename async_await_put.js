const header = {
    'Content-type': 'application/json; charset=UTF-8'
}

const updatePost = async (id, body) => {

    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    let options = {
        method: 'PUT',
        body: body
    }

    let response = await fetch(url, options, header);
    let json = await response.json();


}

updatePost(2, {
    title: 'Teste Update',
    body: 'Teste Update body',
    UserId: 10

});