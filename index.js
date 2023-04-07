//fires when initial HTML document has completely loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    //grabbing html elements from the DOM and storing them in variables
    const form = document.getElementById('form');
    const collegeName = document.getElementById('collegeName');
    const appRound = document.getElementById('appRound');
    const appPlan = document.getElementById('appPlan');
    const cover = document.getElementById('cover');

    const addedColleges = new Set();  //keeps track of colleges already in our college list
    //an array containing names of all the Ivy league colleges in the US
    const ivyLeague = ['Harvard', 'Yale', 'Princeton', 'Columbia', 'Dartmouth', 'Brown', 'Cornell', 'Upenn']
  
    form.addEventListener('submit', handleSubmit);//handles submit events in our form element
  
    cover.addEventListener('click', handleRemove);//handles click events in our cover element
  
    function handleSubmit(event) {
      event.preventDefault();//cancels default submit action if not given explicit instructions

      //stores our form input values into variables
      let college = collegeName.value;
      console.log(college);
      let round = appRound.value;
      console.log(round);
      let plan = appPlan.value;
      console.log(plan);

      //Checks if the input college name is part of the Ivy league schools and alerts the user if it isn't
      if(ivyLeague.includes(college)===false){
        return alert('Enter an Ivy League Institution!');
      }

      //Checks if the input college name is already in our list and alerts the user if so
      if (addedColleges.has(college)) {
        return alert('This college has already been added to the list.');
      }
  
      //fetch request to display the user's input college on our DOM
      fetch(`http://localhost:3000/${college}`)
        .then(res => res.json())
        .then(data => {
          console.log(data[0].name);
  
          cover.innerHTML += `
            <div class="box">
              <img src="${data[0].img}" alt="${college}">
              <div id="description">
                <h2>${data[0].name}</h2>
                <h3>${data[0].location}</h3>
                <p>Acceptance Rate: ${data[0].acceptanceRate}%</p>
                <a href=${data[0].weblink} target='-blank'>Visit ${college}'s Website</a>
                <p>I intend to apply: ${round}</p>
                <p>Application Plan: ${plan}</p>
                <button type='button' class='Btn'>Delete College</button>
              </div>
            </div>
          `;
          addedColleges.add(college);
          console.log(cover);
        })
        .catch((error) => {
          alert(error);
        });
        form.reset();
    }
  
    function handleRemove(event) {
      if (event.target.classList.contains('Btn')) {
        const box = event.target.closest('.box');
        box.remove();

        const college = box.querySelector('img').alt;
        addedColleges.delete(college);
      }
    }
  });