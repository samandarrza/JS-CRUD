const baseURL = 'https://jsonplaceholder.typicode.com';
const content = document.getElementById('content');
const getData = () =>{
const fetchData = fetch(`${baseURL}/users`)
.then((res)=>res.json())
.then((data)=>{
    data?.map((item)=>(
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
    ))
})

return fetchData;
}
getData();
