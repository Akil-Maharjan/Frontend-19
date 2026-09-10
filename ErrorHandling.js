

async function FetchProdcut(){

    
        const res = await fetch("https://fakestoreap.com/products");
        const data = await res.json();
        console.log(data)
    
    
}

  
FetchProdcut()