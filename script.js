const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `<h5>please give a valid height ${height}</h5>`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `<h5>please give a valid height ${weight}</h5>`;
  } else {
    var bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }

  const res = document.querySelector('#res');

  bmi <= 18.6
    ? (res.innerHTML = `<h3>You are Under-wight !</h3>`)
    : bmi > 18.6 && bmi < 24.9
    ? (res.innerHTML = '<h3>You are Normal-wighted !</h3>')
    : bmi > 24.9
    ? (res.innerHTML = '<h3>You are Over-weighted !</h3>')
    : (res.innerHTML = '<h3></h3>');
  // if (bmi <= 18.6) {
  //   res.innerHTML = `<h3>You are Under-wight !</h3>`;
  // } else if (bmi > 18.6 && bmi < 24.9) {
  //   res.innerHTML = '<h3>You are Normal-wighted !</h3>';
  // } else if (bmi >= 24.9) {
  //   res.innerHTML = '<h3>You are Over-weighted !</h3>';
  // } else {
  //   res.innerHTML = '<h3></h3>';
  // }
});
