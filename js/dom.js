document.getElementById("salut").onclick = async () => 
{
    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/values");

    xhr.onload = () => 
    {
        if(xhr.status == 200)
        {
            console.log("working")           
        }

        const data = xhr.response;
        //console.log(data);

        const variable = `<h1>` + data["value"] + `<h1>`
        const stuff = document.getElementById("salut")
        stuff.insertAdjacentHTML("beforeend", variable)
    }
    
    xhr.send();
    
    // const response = await fetch('http://localhost:8080/values')
    // const data = await response.json();

    // const variable = `<h1>` + data.value + `<h1>`
    // const stuff = document.getElementById("salut")
    // stuff.insertAdjacentHTML("beforeend", variable)
}