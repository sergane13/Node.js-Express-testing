document.getElementById("salut").onclick = async () => 
{
    // ----GET xhr----

    //xhr = new XMLHttpRequest();
    
    // xhr.open("GET", "http://localhost:8080/values");

    // xhr.onload = () => 
    // {
    //     if(xhr.status == 200)
    //     {
    //         console.log("working")           
    //     }

    //     const data = xhr.response;
    //     console.log(data);

    //     const variable = `<h1>` + JSON.parse(data).value + `<h1>`
    //     const stuff = document.getElementById("salut")
    //     stuff.insertAdjacentHTML("beforeend", variable)
    // }
    

    
    // ---- POST xhr----

    // xhr.open("POST", "http://localhost:8080/yolo", true);  

    // xhr.setRequestHeader('Content-Type', 'application/json')

    // xhr.send(JSON.stringify({
    //     "vaue": "value"
    // }));

    // xhr.onload = () => {
    //     console.log('sent');
    // }



    // ---- GET fetch ----

    // const response = await fetch('http://localhost:8080/values')
    // const data = await response.json();

    // const variable = `<h1>` + data.value + `<h1>`
    // const stuff = document.getElementById("salut")
    // stuff.insertAdjacentHTML("beforeend", variable)




    // ---- POST fetch ----

    // let user = {
    //     name: 'John',
    //     surname: 'Smith'
    //   };
      
    // let response = await fetch('http://localhost:8080/yolo', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    //  });
}