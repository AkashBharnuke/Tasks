async function apifunc() {
let Response = await fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817');
const data = await Response.json();

console.log("The data we got: ", data);
}

apifunc();