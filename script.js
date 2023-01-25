//your code here

let user = {};
const imgElement = document.getElementById("img");
nameElement = document.getElementById("name");
infoButtons = Array.from(document.querySelectorAll("[data-id]"));
additionalInfo = document.getElementById("add-info");
fetchBtn = document.getElementById("getUser");
const fecthUserDetails = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();

  user = data.results[0];
  basicDetails(user);
};
const basicDetails = (user) => {
  nameElement.innerHTML = "";
  imgElement.innerHTML = "";
  const img = document.createElement("img");
  const name = document.createElement("span");

  img.src = user.picture.large;
  img.classList.add("img");
  imgElement.appendChild(img);
  name.textContent = user.name.first + " " + user.name.last;
  nameElement.appendChild(name);
};

const handleInfoButtonClick = (event) => {
  const info = [
    { id: "age", label: "Age", data: user.dob.age },
    {
      id: "phone",
      label: "phone",
      data: user.phone,
    },
    {
      id: "email",
      label: "email",
      data: user.email,
    },
  ];
  const id = event.target.dataset.id;
  const data = info.find((item) => item.id === id);
  createInfoelement(data);
};
const createInfoelement = (info) => {
  while (additionalInfo.firstChild) {
    additionalInfo.removeChild(additionalInfo.firstChild);
  }
  const label = document.createElement("span");
  const infodata = document.createElement("span");

  label.textContent = info.label;
  infodata.textContent = info.data;

  additionalInfo.appendChild(label);
  additionalInfo.appendChild(infodata);
};

infoButtons.map((btn) => btn.addEventListener("click", handleInfoButtonClick));
fetchBtn.addEventListener("click", fecthUserDetails);
document.addEventListener("DOMContentLoaded", fecthUserDetails);
