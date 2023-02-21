function waterCount() {
  let age = document.getElementById('age').value;
  let weight = Math.abs(document.getElementById('weight').value);
  let activity = Math.abs(document.getElementById('activity').value);
  let elem = document.querySelector('#results');
  let result;
  if (age <= 12) {
    result = 1.5;
  } else {
    result = Math.round((weight * 0.04 + activity * 0.4) * 100) / 100;
  }
  if (result > 5) {
    result = 5;
  } else {
  }
  if (document.getElementById('switch').checked) {
    result = Math.round(result * 0.9 * 100) / 100;
  } else {
  }

  elem.innerHTML = ` <p> Your Daily Water Intake is: ${result}l</p>`;
}
