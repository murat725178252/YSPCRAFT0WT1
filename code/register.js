document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun otomatik gönderilmesini engelle

    const minecraftName = document.getElementById("minecraft-name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sunucuya POST isteği gönder
    fetch("code/reg.php", {
        method: "POST",
        body: JSON.stringify({ minecraftName, username, email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(message => {
        document.getElementById("registrationMessage").textContent = message;
    });
});
