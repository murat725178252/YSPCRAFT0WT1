document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerbtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("myModal");
    const signupForm = document.getElementById("signupForm");
    const usernameA = document.querySelector(".username-a");

    // localStorage'dan kullanıcı bilgilerini al
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    // Eğer kaydedilmiş kullanıcı bilgileri varsa, kullanıcı adını göster
    if (savedName) {
        usernameA.textContent = `Hoş geldiniz, ${savedName}!`;
        usernameA.style.display = "block";
    }

    // Eğer kaydedilmiş kullanıcı bilgileri ve oturum açıldıysa hoş geldin mesajını göster
    if (savedName && userIsLoggedIn(savedEmail, savedPassword)) {
        alert(`Tekrar Hoşgeldiniz, ${savedName}!`);
        hideRegisterButton();
    }

    // Eğer oturum açıksa hesap oluşturma butonunu gizle
    function hideRegisterButton() {
        registerBtn.style.display = "none";
    }

    registerBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Eğer kaydedilmiş kullanıcı bilgileri varsa uyarı ver
        if (savedName || savedEmail) {
            alert("Zaten kayıtlı bir hesap bulunmaktadır.");
            return;
        }

        // Kullanıcı bilgilerini localStorage'e kaydet
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Kullanıcı adını <a> elementine ekleyin ve görünür yapın
        usernameA.textContent = `Hoş geldiniz, ${name}!`;
        usernameA.style.display = "block";

        alert(`Hesap Oluşturuldu:\nAd: ${name}\nE-Mail: ${email}\nŞifre: ${password}`);

        hideRegisterButton();
        signupForm.reset();
        modal.style.display = "none";
    });

    // Kullanıcı girişini kontrol eden işlev
    function userIsLoggedIn(email, password) {
        // Burada kullanıcı girişini kontrol etmek için gerekli mantığı ekleyin
        // Örnek: localStorage'dan kaydedilmiş kullanıcı e-posta ve şifre ile karşılaştırın
        // Eğer oturum açıldıysa true döndürün, aksi takdirde false döndürün.
        // Bu sadece örnek bir işlevdir, gerçek uygulama kullanımına uygun şekilde özelleştirilmelidir.
        return true; // Örnek: Her zaman oturum açılmış gibi gösterir.
    }
});
