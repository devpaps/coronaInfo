console.log("Hello Corona!");

fetch("https://api.covid19api.com/country/sweden/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-08-27T00:00:00Z")
.then(function(response) {
    return response.json();       
})
.then(function(covid) { 

console.log("covid", covid);

coronaInfo = document.getElementById("coronaInfo")

for (i=0; i<covid.length; i++) {
    coronaInfo.insertAdjacentHTML("beforeend", "<div><div>Datum: "+covid[i].Date.slice(0,10)+"</div><div><strong>Antal bekräftade fall: "+covid[i].Cases+"</strong><br><br></div></div>")
}

});
