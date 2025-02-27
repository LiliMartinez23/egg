document.getElementById("submit").addEventListener("click", function() {
    let selectedValue = document.getElementById("eggs").value;

    if (selectedValue) {
        window.location.href = selectedValue + ".html";
    }
    else {
        alert("Please select an option before submitting.");
    }
});