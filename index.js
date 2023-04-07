document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const collegeName = document.getElementById('collegeName');
    const appRound = document.getElementById('appRound');
    const appPlan = document.getElementById('appPlan');
    const ivyLeague = ['Harvard', 'Yale', 'Princeton', 'Columbia', 'Dartmouth', 'Brown', 'Cornell', 'Upenn']
  
    const cover = document.getElementById('cover');
    const addedColleges = new Set();
  
    form.addEventListener('submit', handleSubmit);
  
    cover.addEventListener('click', handleRemove);
  
    function handleSubmit(event) {
      event.preventDefault();
      let college = collegeName.value;
      console.log(college);
      let round = appRound.value;
      console.log(round);
      let plan = appPlan.value;
      console.log(plan);

      if(ivyLeague.includes(college)===false){
        return alert('Enter an Ivy League Institution!');
      }

      if (addedColleges.has(college)) {
        return alert('This college has already been added to the list.');
      }
  
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