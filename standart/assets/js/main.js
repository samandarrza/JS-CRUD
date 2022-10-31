const baseURL = 'https://jsonplaceholder.typicode.com';
const content = document.getElementById('content');
const getData = () => {
    const fetchData = fetch(`${baseURL}/users`)
        .then((res) => res.json())
        .then((data) => {
            data?.map((item) => (
                content.innerHTML += `<div class="row">
                <div class="col-md-1">
        <input type="checkbox" name="" id="">
        </div>
        <div class="col-md-2">
        <p>${item.name}</p>
        </div>
        <div class="col-md-3">
        <p>${item.email}</p>
        </div>
        <div class="col-md-3">
        <p>${item.address.street}</p>
        </div>
        <div class="col-md-2">
        <p>${item.phone}</p>
        </div>
        <div class="col-md-1">
        <p><i id="edit" class="las size la-pen"></i><i id="del" class="las size la-trash"></i></p>
        </div>
        </div>`
            ))
        })

    return fetchData;
}
getData();

let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let inputAddress = document.getElementById('inputAddress');
let inputPhone = document.getElementById('inputPhone');
content.addEventListener('click', e => {
    if (e.target.id === "edit") {
        e.target.parentElement.parentElement.parentElement.innerHTML = `<div class="col-md-1">
        <input type="checkbox" name="" id="">
        </div>
        <div class="col-md-2">
        <p>${inputName.value}</p>
        </div>
        <div class="col-md-3">
        <p>${inputEmail.value}</p>
        </div>
        <div class="col-md-3">
        <p>${inputAddress.value}</p>
        </div>
        <div class="col-md-2">
        <p>${inputPhone.value}</p>
        </div>
        <div class="col-md-1">
        <p><i id="edit" class="las size la-pen"></i><i id="del" class="las size la-trash"></i></p>
        </div>`
    }
})
content.addEventListener('click', e => {
    if (e.target.id === "del") {
        e.target.parentElement.parentElement.parentElement.remove();
    }
})

let add = document.getElementById('add');
add.addEventListener('click', () => {
    let modalName = document.getElementById('modalName');
    let modalEmail = document.getElementById('modalEmail');
    let modalAddress = document.getElementById('modalAddress');
    let modalPhone = document.getElementById('modalPhone');

    const fetchData = fetch(`${baseURL}/users`, {
        method: 'POST',
        body: JSON.stringify({
            name: modalName.value,
            email: modalEmail.value,
            street: modalAddress.value,
            phone: modalPhone.value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => res.json())
        .then((item) => (
            content.innerHTML += `<div class="row">
            <div class="col-md-1">
    <input type="checkbox" name="" id="">
    </div>
    <div class="col-md-2">
    <p>${item.name}</p>
    </div>
    <div class="col-md-3">
    <p>${item.email}</p>
    </div>
    <div class="col-md-3">
    <p>${item.street}</p>
    </div>
    <div class="col-md-2">
    <p>${item.phone}</p>
    </div>
    <div class="col-md-1">
    <p><i id="edit" class="las size la-pen"></i><i id="del" class="las size la-trash"></i></p>
    </div>
    </div>`
        ))
    return fetchData;
})