const inquirer = require('inquirer');
const fs = require('fs');

const creatPage = (username, age, hobby, location, github, link) => {
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <title>Generated Portfolio</title>
    </head>

    <body>
      <div class="jumbotron">
        <h1 class="display-4">Hi, my name is ${username}</h1>
        <p class="lead">I'm ${age} years old and I love to, ${hobby}. That is a brief introduction to who I am, and what i enjoy doing</p>
        <hr class="my-4">
        <p>I'm located in ${location} and my git hub username is ${github}</p>
        <a class="btn btn-primary btn-lg" href="${link}" role="button">My Github</a>
      </div>
    </body>
  </html>
  `;
  };

  inquirer
  .prompt([
    {name: 'username', message: 'Whats your name?', type: 'input'},
    {name: 'age', message: 'How old are you?', type: 'input'},
    {name: 'hobby', message: 'Whats your favorite thing to do?', type: 'input'},
    {name: 'location', message: 'Where do live?', type: 'input'},
    {name: 'github', message: 'Whats your github username?', type: 'input'},
    {name: 'link', message: 'Add a link to your github account.', type: 'input'},
  ])
  .then((response) => {
    const text = creatPage(
      response.username,
      response.age,
      response.hobby,
      response.location,
      response.github,
      response.link,
    );
    console.log(response);
    fs.writeFile("index.html", text, (err) => {
      err ? console.log(err) : console.log("Success");
    });
  });


  