document.getElementById("check-btn").addEventListener("click", validatePhoneNumber);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        validatePhoneNumber();
    }
});

document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("results-div").innerText = '';
    document.getElementById("user-input").value = '';
});

function validatePhoneNumber() {
    const input = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");

    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    // Valid regex pattern for US phone numbers
    const validPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    // Check if the input is valid
    const isValid = validPhoneRegex.test(input);

    if (isValid) {
        resultsDiv.innerText = `Valid US number: ${input}`;
    } else {
        resultsDiv.innerText = `Invalid US number: ${input}`;
    }
}
