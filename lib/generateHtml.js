const renderHtml = (data) => {
    console.log(data)

    let top = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <title>Document</title>
      </head>
      <body class="bg-secondary">
        <div class="h-100 p-5 text-white bg-dark rounded-3 text-center">
          <h1>My Team</h1>
        </div>
        <div class="container">
          <div
            class="
              row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3
              d-flex
              justify-content-center
            "
          >`;

    let bottom = `</div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
var html = "";

console.log(data.length)

for (let i = 0; i < data.length; i++){

    if (data[i].officeNumber) {

        let manager = `<div class="col d-flex justify-content-center">
        <div
          class="card border-white my-5 shadow-lg"
          style="width: 18rem; height: 15rem"
        >
          <div
            class="card-header bg-dark text-white border-white"
            style="height: 5rem"
          >
            <h5 class="card-title">${data[i].name}</h5>
            <h6 class="card-subtitle mb-2 py-2">☕ Manager</h6>
          </div>

          <div class="card-body bg-dark">
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-white border-secondary">ID: ${data[i].id}</li>
              <li class="list-group-item bg-white border-secondary">
                Email: <a href="mailto:${data[i].email}">${data[i].email}</a>
              </li>
              <li class="list-group-item bg-white border-secondary">
                Office Number: ${data[i].officeNumber}
              </li>
            </ul>
          </div>
        </div>
      </div>`;
  
      html += manager;
    }

    if (data[i].github) {

        let engineer = `<div class="col d-flex justify-content-center">
        <div
          class="card border-white my-5 shadow-lg"
          style="width: 18rem; height: 15rem"
        >
          <div
            class="card-header bg-dark text-white border-white"
            style="height: 5rem"
          >
            <h5 class="card-title">${data[i].name}</h5>
            <h6 class="card-subtitle mb-2 py-2">👓 Engineer</h6>
          </div>

          <div class="card-body bg-dark">
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-white border-secondary">ID: ${data[i].id}</li>
              <li class="list-group-item bg-white border-secondary">
                Email: <a href="mailto:${data[i].email}">${data[i].email}</a>
              </li>
              <li class="list-group-item bg-white border-secondary">
                GitHub: ${data[i].github}
              </li>
            </ul>
          </div>
        </div>
      </div>`;
  
      html += engineer;
    }

    if (data[i].school) {

        let intern = `<div class="col d-flex justify-content-center">
        <div
          class="card border-white my-5 shadow-lg"
          style="width: 18rem; height: 15rem"
        >
          <div
            class="card-header bg-dark text-white border-white"
            style="height: 5rem"
          >
            <h5 class="card-title">${data[i].name}</h5>
            <h6 class="card-subtitle mb-2 py-2">🎓 Intern</h6>
          </div>

          <div class="card-body bg-dark">
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-white border-secondary">ID: ${data[i].id}</li>
              <li class="list-group-item bg-white border-secondary">
                Email: <a href="mailto:${data[i].email}">${data[i].email}</a>
              </li>
              <li class="list-group-item bg-white border-secondary">
                School: ${data[i].school}
              </li>
            </ul>
          </div>
        </div>
      </div>`;
  
      html += intern;
    }
}
    let final = top + html + bottom;


    return final;
}

module.exports = renderHtml