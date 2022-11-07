const api_url = "https://api.itbook.store/1.0/new"
getapi(api_url);

async function getapi(url) {
    
    let response = await fetch(url)
    let x = await response.json()
    let hasil = x.books
    if (hasil.length > 0) {
        var temp = "";
        hasil.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.title + "</td>";
            temp += "<td>" + itemData.subtitle + "</td>";
            temp += "<td>" + itemData.isbn13 + "</td>";
            temp += "<td>" + itemData.price + "</td>";
            temp += "<td>" + "<img src='"+ itemData.image +"'> </img>" + "</td>";
            temp += "<td>" + "<a href=" + itemData.url + ">link</a>" + "</td>";
        });
        let data = document.getElementById('bookId')
        data.innerHTML = temp;
        data.createElement('tbody')
    }

}

async function detailBooks(){
    let detail = document.getElementById('isbn').value;
    const url =`https://api.itbook.store/1.0/books/${detail}`
    let response = await fetch(url)
    let x = await response.json()
    let hasil = x
        let temp = ""
            temp += "<tr>";
            temp += "<td>" + hasil.title + "</td>";
            temp += "<td>" + hasil.subtitle + "</td>";
            temp += "<td>" + hasil.isbn13 + "</td>";
            temp += "<td>" + hasil.price + "</td>";
            temp += "<td>" + "<img src='"+ hasil.image +"'> </img>" + "</td>";
            temp += "<td>" + "<a href=" + hasil.url + ">link</a>" + "</td>";
            temp += "<td>" + hasil.rating + "</td>";
            temp += "<td>" + hasil.year + "</td>";
            temp += "<td>" + hasil.publisher + "</td>";
            temp += "<td>" + hasil.desc + "</td>";
        document.getElementById("detail").innerHTML = temp
        document.getElementById("detailsBookId").classList.remove("hidden")
}