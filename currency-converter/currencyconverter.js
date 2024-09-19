const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from-dropdown select");
const tocurr = document.querySelector(".to-dropdown select");
const msg = document.querySelector(".msg");

for(let select of dropdown) {
    for (code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        select.append(newOption);
    }
    select.addEventListener("change",(evt) => {
        flag(evt.target);
    });
}

const flag = (element) => {
    let code = element.value;
    let countryCode = countryList[code];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

btn.addEventListener("click", async(evt) => {
       evt.preventDefault();
       let amt = document.querySelector(".amount input");
       let amtval = amt.value;
       if(amtval === "" || amtval < 1){
            amtval = 1;
       }
       const urlb = `${url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
       let response = await fetch(urlb);
       let data = await response.json();
       let rate = data[tocurr.value.toLowerCase()];
       let totalamount = amtval * rate;
       msg.innerText = `${amtval}${fromcurr.value}=${totalamount}${tocurr.value}`;
});
