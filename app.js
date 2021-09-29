const apiCurrencies = "https://openexchangerates.org/api/currencies.json";

let selectFrom = document.getElementById("currency-from");
let selectTo = document.getElementById("currency-to");

axios.get(apiCurrencies).then(function (response) {
  let data = response.data;
  for (const key in data) {
    let opt = document.createElement("option");
    opt.value = key;
    opt.innerHTML = key;
    selectFrom.append(opt);
    let opt1 = document.createElement("option");
    opt1.value = key;
    opt1.innerHTML = key;
    selectTo.append(opt1);
  }
});

function calculate(event) {
  event.preventDefault();
  let key = config.KEY;
  let quantity = document.getElementById("value").value;
  let apiURL = `https://v6.exchangerate-api.com/v6/${key}/pair/${selectFrom.value}/${selectTo.value}/${quantity}`;
  if (quantity.length > 0) {
    axios.get(apiURL).then(function (response) {
      let result = document.getElementById("result");
      result.innerHTML = `From ${selectFrom.value} to ${
        selectTo.value
      } are ${new Intl.NumberFormat("de-DE").format(
        response.data.conversion_result
      )}`;
    });
  }
}

let form = document.querySelector("#form-currency");
form.addEventListener("submit", calculate);
