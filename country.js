const loadCountries = () => {
  fetch(`https://restcountries.com/v3.1/all`)
  .then(res => res.json())
  .then(data => DisplayCountries(data))
};


const DisplayCountries=(countries)=>{

          console.log(countries)
          const AllCountries =countries.map(country =>getCountry(country));
          // console.log(AllCountries)
          const Container =document.getElementById("countries");
          Container.innerHTML=AllCountries.join(" ")
}

// distructuring use 
const getCountry =({name,flags,area}) =>{

          return`<div class="country">
          <h1>${name.common}</h1>
          <p>Area: ${area}</p>
          <img src="${flags.png}">
          </div>`
}

// original use 
// const getCountry =(country) =>{

//           return`<div class="country">
//           <h1>${country.name.common}</h1>
//           <img src="${country.flags.png}">
//           </div>`
// }


loadCountries()