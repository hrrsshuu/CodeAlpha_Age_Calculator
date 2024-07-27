const form = document.querySelector('form');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;

  const age = getAge(dob);

  resultElement.textContent = `${name} is ${age.years} years, ${age.months} months, and ${age.days} days old.`;
});

function getAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }
  if (days < 0) {
    months--;
    days += getDaysInMonth(birthDate.getMonth(), birthDate.getFullYear());
  }

  return {
    years: years,
    months: months,
    days: days
  };
}

function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}