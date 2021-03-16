const apiKEY = "52935d346fe24d9f97c12c83a9395377";
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
})

function calculate(event) {
    event.preventDefault();
    let key = "6acafc888400a003fac2c712";
    let quantity = document.getElementById("value").value;
    let apiURL = `https://v6.exchangerate-api.com/v6/${key}/pair/${selectFrom.value}/${selectTo.value}/${quantity}`;
    axios.get(apiURL).then(function (response) {
        console.log(response);
        let result = document.getElementById("result");
        result.innerHTML = `From ${selectFrom.value} to ${selectTo.value} are ${Math.round(response.data.conversion_result)}`;
    })
}

let form = document.querySelector("#form-currency");
form.addEventListener("submit", calculate);