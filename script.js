function login() {
const user = document.getElementById("username").value;
const pass = document.getElementById("password").value;


if (user === "" || pass === "") {
alert("Username dan password harus diisi");
return;
}


if (pass !== "12345") {
alert("Password salah!");
return;
}


document.getElementById("user").innerText = user;
document.getElementById("loginPage").style.display = "none";
document.getElementById("mainPage").style.display = "block";
}


function logout() {
document.getElementById("mainPage").style.display = "none";
document.getElementById("loginPage").style.display = "block";
}


function classifyImage(type) {
let message = "";


if (type === "tercemar") {
message = "AI mendeteksi lingkungan tercemar 🧴⚠️. Edukasi: Kurangi plastik dan lakukan daur ulang.";
} else if (type === "hijau") {
message = "AI mendeteksi lingkungan hijau 🌳✨. Edukasi: Jaga kelestarian alam.";
} else if (type === "polusi") {
message = "AI mendeteksi polusi lingkungan 🏭😷. Edukasi: Kurangi emisi dan tingkatkan kesadaran sosial.";
}


document.getElementById("result").innerText = message;
}
