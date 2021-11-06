let password = '********';
let email = 'davion@mail.io';
let name = 'Davion Garcia';
let age = 28;
let country = 'Japan';
let salary = 12000;
let gitHub = 'Vektur';
let job = 'Carpentry'
let pets = false;
let hobby = 'Chess'
let sport = 'Soccer'
let passion = 'Snowboarding'
let height = '6ft 2in'
let college = 'Seattle Central College'
let future = 'Sony Dev'
let music = 'Lofi'
let show = 'Fullmetal Alchemist'
let movie = 'The Prestige'
let team = 'Man Utd'
let brand = 'Puma'

document.write(
  `<div>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    <li>Password: ${password}</li>
    <li>Age: ${age}</li>
    <li>Work: ${job}</li>
  </div>`)

document.write(
  `<div>
    <li>Future Job: ${future}</li>
    <li>Salary: ${salary}/mth</li>
    <li>Github: ${gitHub}</li>
    <li>College: ${college}</li>
    <li>Country: ${country}</li>
  </div>`)

document.write(
  `<div>
      <li>Hobby: ${hobby}</li>
      <li>Sport: ${sport}</li>
      <li>Passion: ${passion}</li>
      <li>Team: ${team}</li>
      <li>Height: ${height}</li>
  </div>`)

  document.write(
    `<div>
        <li>Show: ${show}</li>
        <li>Movie: ${movie}</li>
        <li>Music: ${music}</li>
        <li>Pets ${pets}</li>
        <li>Brand: ${brand}</li>
    </div>`)