//1. a. Get all the countries from Asia continent /region using Filter function :

const getCountries = () =>
  {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        var filterasia = countries.filter((n) => n.region === "Asia");     
        console.log(filterasia);

    }
  }

getCountries();

//1. b. Get all the countries with a population of less than 2 lakhs using Filter function :

const GetCountries = () =>
  {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        var filterpop = countries.filter((n)=>n.population < 200000); 
        console.log(filterpop);
 

    }
}

GetCountries();

//1. c. Print the following details name, capital, flag using forEach function :

const GeTCountries = () =>
  {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        countries.forEach(n => console.log (`country - ${n.name.common}, Capital - ${n.capital}, 
        flag - ${n.flag}`));


    }
  }

GeTCountries();

//1. d. Print the total population of countries using reduce function :

const GETCountries = () =>
  {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        var populationreduce = countries.map(n=>n.population);
        var Totalpopulation = populationreduce.reduce((a,b) => (a + b))
        
        console.log(Totalpopulation);
       

    }
  }

GETCountries();

