const getData = document.querySelector("#fetch");
const section1 = document.querySelector(".section-1");
const div = document.createElement("div");
const img = document.createElement("img")
const email = document.createElement("span");
const city = document.createElement("span");
const fullName = document.createElement("span");

div.classList.add("userInfo")
section1.append(div);

getData.addEventListener("click", () => {
    fetch("https://randomuser.me/api")
    .then((response) => {
        return response.json()
    }).then((data) => {
        showUserInfo(data);
    })
});

showUserInfo = (randomData) => {
    img.src = randomData.results[0].picture.medium;
    div.append(img);
    email.innerText = randomData.results[0].email;
    div.append(email);
    city.innerText = randomData.results[0].location.city;
    div.append(city);
    fullName.innerText = 
    `${randomData.results[0].name.title} ${randomData.results[0].name.first} ${randomData.results[0].name.last}`
    div.append(fullName);
}


