let formLogin  = document.querySelector(".loginForm")
let user_box = document.querySelector("#username");
let pass_box = document.querySelector("#password");
let check_box = document.querySelector("#checkbox");
let sub_box = document.querySelector("#submit");

let exit_btn = document.querySelector("#existing");

exit_btn.style.display = "none";


// let obj = {};

formLogin.addEventListener("submit",handleSubmit);

function handleSubmit(e) {
	e.preventDefault();

	let username = user_box.value;
	let userpass = pass_box.value;

	if(check_box.checked){
		 localStorage.setItem("username", username);
        localStorage.setItem("password", userpass);
		exit_btn.style.display = "inline-block";
		
	}
	alert(`Logged in as ${username}`);
}











