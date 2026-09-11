


let products = [];
    const tbody = document.getElementById("tbody");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const price = document.getElementById("price");
    const category = document.getElementById("category");
    const image = document.getElementById("image");
      const form = document.getElementById("form");
    const modal = document.getElementById("forms-Data");
    const showAdd = document.getElementById("showAdd");
    const cancel = document.getElementById("cancel");
    let editing = null;
    const search = document.getElementById("search");
    function renderProducts(){
        let filteredProducts = products.filter((product)=>product.title.toLowerCase().includes(search.value.toLowerCase()));
        filteredProducts.sort((a ,b)=> b.id - a.id);
        tbody.innerHTML= "";
        filteredProducts.forEach((product)=>{
            tbody.innerHTML += `<tr class="border text-center">
                <td class="border-r">${product.id}</td>
                <td class="border-r max-w-[150px] truncate">${product.title}</td>
                <td class="border-r max-w-[250px] truncate">${product.description}</td>
                <td class="border-r">${product.price}</td>
                <td class="border-r">${product.category}</td>
                <td class="border-r"><img class="w-20 m-auto h-20" src=${product.image} /> </td>
                <td>
                <button class="bg-gray-500 px-4 py-1 border-none rounded-md cursor-pointer" onclick="viewProduct(${product.id})">View</button>
                <button class="bg-blue-500 px-4 py-1 border-none rounded-md cursor-pointer" onclick="editProduct(${product.id})">Edit</button>
                <button class="bg-red-500 px-4 py-1 border-none rounded-md cursor-pointer" onclick="deleteProduct(${product.id})">Delete</button>
                </td>
                 </tr>
                `
        })
  
    }

       function getData(){
             return {
                title : title.value,
                description : description.value,
                price : price.value,
                category : category.value,
                image : image.value
             }
       }

       async function getProdcuts(){
        try{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        products = data;
        renderProducts();
        }
        catch{
            tbody.innerHTML = `<tr class="border text-center"><td class="">No Data Found</td></tr>`
        }
       }
       search.addEventListener("input", renderProducts);
              

       showAdd.addEventListener("click", function(){
        modal.classList.remove("hidden");
       })
       cancel.addEventListener("click", function(){
        modal.classList.add("hidden");
       })

       async function addProduct(product){
        const res = await fetch("https://fakestoreapi.com/products", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(product)
        })
        const data = await res.json();
        products.push(data);
        renderProducts();
        modal.classList.add("hidden");
       }

       function viewProduct(id){
        const product = products.find((product) => product.id === id);
        sessionStorage.setItem("viewProduct", JSON.stringify(product));
        window.location.href = "ProductView.html";
       }

       function editProduct(id){
        const product = products.find((product) => product.id === id);
        title.value = product.title;
        description.value = product.description;
        price.value = product.price;
        category.value = product.category;
        image.value = product.image;
        editing = id;
        modal.classList.remove("hidden");
       }

       async function updateProduct(){
        const product = getData();
        const res = await fetch(`https://fakestoreapi.com/products/${editing}`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(product)
        })
        const data = await res.json();
        const index = products.findIndex((product) => product.id === editing);
        products[index] = data;
        renderProducts();
        modal.classList.add("hidden");
        editing = null;
       }

       async function deleteProduct(id){
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method : "DELETE",
        })
        products = products.filter((product) => product.id !== id);
        renderProducts();
       }

       form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if(editing){
            updateProduct(editing);
        }
        else{
            addProduct(getData());
        }
       })
       
       getProdcuts()