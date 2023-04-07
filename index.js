document.addEventListener('DOMContentLoaded', () =>{
   const form = document.getElementById('form');
   const collegeName = document.getElementById('collegeName');
   const appRound = document.getElementById('appRound');
   const appPlan = document.getElementById('appPlan');

   const cover = document.getElementById('cover')
   
   form.addEventListener('submit', handleSubmit)

   function handleSubmit(event){
    event.preventDefault();
    let college = collegeName.value
    console.log(college)
    let round=appRound.value
    console.log(round)
    let plan = appPlan.value
    console.log(plan)

    let Ivy = ['Harvard', 'Yale', 'Princeton', 'Columbia', 'Dartmouth', 'Brown', 'Upenn', 'Cornell'];

    if(Ivy.includes(college)===false){
        return alert('Enter a Valid Ivy League name');
    }

    fetch(`http://localhost:3000/${college}`)
    .then( res => res.json())
    .then(data => {
        
        console.log(data[0].name)
        
        cover.innerHTML +=`
        
        <div class="box">
                <img src="${data[0].img}" alt="${college}">
                <div id="description">
                    <h2>${data[0].name}</h2>
                    <h3>${data[0].location}</h3>
                    <p>Acceptance Rate: ${data[0].acceptanceRate}%</p>
                    <a href=${data[0].weblink}>Click to see website</a>
                    <p>I intend to apply: ${round}</p>
                    <p>Application Plan: ${plan}</p>
                    <button type='click' id='${college}' class='Btn'>Remove From List</button>
                </div>
        </div>
        
        `
        document.getElementById(college).addEventListener('click', handleDelete)
        function handleDelete(event) {
            event.target.parentNode.parentNode.remove();
        }
        
    }
    )
    .catch( (error) => {
        console.log(error);
    })
   }
    
   
})
