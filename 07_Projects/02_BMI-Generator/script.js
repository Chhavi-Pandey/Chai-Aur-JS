let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give valid weight ${weight}`;
    }else {
       let bmi =  (weight/((height*height)/10000)).toFixed(2);
       //show results

    //    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi < 18.6){
        results.innerHTML = `<span>${bmi}</span> - Under Weight`;
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `<span>${bmi}</span>- Normal Weight`;
    }
    if(bmi > 24.9){
       results.innerHTML = `<span>${bmi}</span>- Over Weight`;
    }
   }
});