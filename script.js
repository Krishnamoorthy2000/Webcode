async function getNationality() {
  const Name = document.getElementById("Name").value;
  const apiUrl = `https://api.nationalize.io?name=${Name}`;


  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
console.log(data);
    const resultDiv = document.getElementById("result");
    if (data.country && data.country.length > 0) {
      const countryName = data.country[0].country_id;
      const probability = (data.country[0].probability * 100).toFixed(2);
      resultDiv.innerHTML = `Based on our prediction, ${probability}% of people with the name ${Name} are from ${countryName}.`;
    } else {
      resultDiv.innerHTML = `Sorry, we could not find any nationality data for the name ${Name}.`;
    }
  } catch (error) {
    console.error(error);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Sorry, an error occurred while getting the data from the API.";
  }
}