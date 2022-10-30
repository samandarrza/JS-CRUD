const baseURL = 'https://jsonplaceholder.typicode.com';
const content = document.getElementById('content');
const add = document.getElementById('add');
let i = 0;
add.addEventListener('click', () => {
i++;
    if (i<=10) {
        const fetchData = fetch(`${baseURL}/users/${i}`)
            .then((res) => res.json())
            .then((item) => {
                content.innerHTML += `<div class="col-md-1">
                <input type="checkbox" name="" id="">
                </div>
                <div class="col-md-2">
                <p>${item.name}</p>
                </div>
                <div class="col-md-3">
                <p>${item.email}</p>
                </div>
                <div class="col-md-3">
                <p>${item.address.street}, ${item.address.suite}, ${item.address.city}</p>
                </div>
                <div class="col-md-2">
                <p>${item.phone}</p>
                </div>
                <div class="col-md-1">
                <p><i class="las size la-pen"></i><i class="las size la-trash"></i></p>
                </div>`
            }) 
            return fetchData;   
    }
});