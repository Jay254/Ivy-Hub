document.addEventListener('DOMContentLoaded', () =>{
   const form = document.getElementById('form');
   const collegeName = document.getElementById('collegeName');
   const appRound = document.getElementById('appRound');
   const appPlan = document.getElementById('appPlan');
//    const h2 = document.createElement('h2');
//    const h3 = document.createElement('h3');
//    const p = document.createElement('p');
//    const a = document.createElement('a');
//    const img = document.createElement('img');
//    const p1 = document.createElement('p');

   const cover = document.getElementById('cover')
   
   form.addEventListener('submit', handleSubmit)

   function handleSubmit(event){
    event.preventDefault();
     
    console.log(collegeName.value)
    console.log(appRound.value)
    console.log(appPlan.value)

    fetch(`http://localhost:3000/${collegeName.value}`)
    .then( res => res.json())
    .then(data => {
        
        console.log(data[0].name)
        
        cover.innerHTML +=`
        <div class="box">
                <img src="${data[0].img}" alt="${collegeName.value}">
                <div id="description">
                    <h2>${data[0].name}</h2>
                    <h3>${data[0].location}</h3>
                    <p>Acceptance Rate: ${data[0].acceptanceRate}%</p>
                    <a href=${data[0].weblink}>Click to see website</a>
                    <p>I intend to apply: ${appRound.value}</p>
                    <p>Application Plan: ${appPlan.value}</p>
                    <button type='button' id='Btn'>Remove From List</button>
                </div>
        </div>
        `
    }
    )
    .catch( (error) => {
        alert(error);
    })

    form.reset();
    
   }

   



})
