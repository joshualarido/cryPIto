document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting
        clearErrors();

        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const birthday = document.getElementById("birthday");
        const gender = document.getElementById("gender");

        let isValid = true;

        // Username validation
        if (username.value.trim() === "") {
            showError(username, "Username is required");
            isValid = false;
        }

        // Email validation
        if (!validateEmail(email.value)) {
            showError(email, "Invalid email address");
            isValid = false;
        }

        // Password validation
        if (password.value.length < 6) {
            showError(password, "Password must be at least 6 characters");
            isValid = false;
        }

        // Birthday validation
        if (!isAtLeast18(birthday.value)) {
            showError(birthday, "You must be at least 18 years old");
            isValid = false;
        }

        // Gender validation
        if (gender.value === "none") {
            showError(gender, "Please select a gender");
            isValid = false;
        }

        if (isValid) {
            alert("Registration successful!");
            form.submit(); // Submit form or trigger backend call
        }
    });

    function showError(input, message) {
        let error = document.createElement("small");
        error.className = "error-message";
        error.textContent = message;
        input.classList.add("input-error");
        input.parentNode.appendChild(error);
    }

    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach(error => error.remove());

        const inputs = document.querySelectorAll(".input-error");
        inputs.forEach(input => input.classList.remove("input-error"));
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }

    function isAtLeast18(dateString) {
        const today = new Date();
        const dob = new Date(dateString);
        const age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        return age > 18 || (age === 18 && m >= 0 && today.getDate() >= dob.getDate());
    }
});
