// const menu = 
// {
//     'key' : 1,
//     'key2' : 2
// }


// document.querySelector("html").onclick = function(){
//     alert('Ouch! Stop poking me!')
// }
//     console.log(menu.key);
//     console.log("something happened")
// }

// const value = () => 
// {
//     return new Promise((resolve, reject) => 
//     {   
//         if(false)
//         {
//             resolve(true)
//         }
//         else
//         {
//             reject(false)
//         }
//     })
// }

function Gigel(name, age, description)
{
    this.name = name;
    this.age = age;
    this.description = description;

    this.welcome = () =>
    {
        console.log(this.name);
    }
}

function aur()
{
    console.log('aur');
}

module.exports = aur;