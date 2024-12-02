document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputData");
    const confirmBtn = document.getElementById("confirmBtn");

    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            confirmBtn.classList.add("active");
        } else {
            confirmBtn.classList.remove("active");
        }
    });
});
