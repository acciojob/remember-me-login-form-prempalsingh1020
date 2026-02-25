//your JS code here. If required.
 const form = document.getElementById("loginForm");
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const checkbox = document.getElementById("checkbox");
        const existingBtn = document.getElementById("existing");

        // 🔹 Check if credentials already exist on page load
        window.addEventListener("load", () => {
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingBtn.style.display = "block";
            }
        });

        // 🔹 Form submission
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // prevent page reload

            const username = usernameInput.value;
            const password = passwordInput.value;

            alert(`Logged in as ${username}`);

            if (checkbox.checked) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                existingBtn.style.display = "block";
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                existingBtn.style.display = "none";
            }
        });

        // 🔹 Login as existing user
        existingBtn.addEventListener("click", function () {
            const savedUsername = localStorage.getItem("username");

            if (savedUsername) {
                alert(`Logged in as ${savedUsername}`);
            }
        });