fetch("https://disease.sh/v3/covid-19/all")
  .then(function (response) {
    if (response.status != 200) {
      console.log(response.status);
      return;
    }

    response.json().then(function (data) {
      const covidall = data;
      document
        .getElementById("worldactivecase")
        .insertAdjacentHTML("beforeend", `${covidall.active}`);
        document
        .getElementById("worldrecoveredcase")
        .insertAdjacentHTML("beforeend", `${covidall.recovered}`);
        document
        .getElementById("worlddeathcase")
        .insertAdjacentHTML("beforeend", `${covidall.deaths}`);
        document
        .getElementById("worldtotalcase")
        .insertAdjacentHTML("beforeend", `${covidall.cases}`);
       
    });
  })

  .catch(function (err) {
    console.log(err);
  });

var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var country = document.getElementById("country").value;

  fetch("https://disease.sh/v3/covid-19/countries/" + country)
    .then(function (response) {
      if (response.status != 200) {
        alert(response.status)
        return;
      }

      response.json().then(function (data) {
        const countries = data;
         const countriesInfo = data.countryInfo;
         if (data.countryInfo === undefined) {
          alert(data.countryInfo)
         }
         document
         .getElementById("titlecase").innerHTML = countries.country + ` ` + `<img src="${countriesInfo.flag}" alt="" srcset="" width="32px">`
        document
          .getElementById("activecase").innerHTML = countries.active
          document
          .getElementById("deathcase").innerHTML = countries.deaths
          document
          .getElementById("recoveredcase").innerHTML = countries.recovered
          document
          .getElementById("totalcase").innerHTML = countries.cases
          document
          .getElementById("criticalcase").innerHTML = countries.critical
          document
          .getElementById("populationcase").innerHTML = countries.population
      });
    })

    .catch(function (err) {
      console.log(err);
     
    });
});
