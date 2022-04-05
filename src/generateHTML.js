

generateHTML = (employees) => {
  // array for cards
  cardArray = [];
  for (let employee of employees) {
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);

      cardArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      cardArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      cardArray.push(internCard);
    }
  }

  // join cardArray to create html string
  const employeeCards = cardArray.join("");

  // call generatePage function passing in employee Cards
  // to generate and return team page html
  const generateTeamPage = generatePage(employeeCards);
  return generateTeamPage;
};

function generatePage(employeeCards) {
  return `<!doctype html>
      <html lang="en">
          <head>
              <!-- Required meta tags -->
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" rel="stylesheet">
              <!-- Bootstrap CSS -->
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
              <!-- Font Awesome-->
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossorigin="anonymous"
              />
              <!-- Custom Styles -->
              <link rel="stylesheet" href="./style.css">
              <title>Team Profile</title>
          </head>
          <body>
              <header class="header">
                  <div class="row">
                      <div class="col header_text text-center">
                          <h1>Our Team</h1>
                      </div>
                  </div>
              </header>
              <main>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-12">
                      <div class="row justify-content-center">
                        ${employeeCards}
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <footer class="footer pt-3">
                  Amazing Team Profile Generator
                  <br />
                  @ 2021. All Rights Reserved
              </footer>
              <!-- Bootstrap -->
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
          </body>
      </html>`;
}

const generateEngineer = function (engineer) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

const generateManager = function (manager) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

const generateIntern = function (intern) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
};

module.exports = generateHTML;
