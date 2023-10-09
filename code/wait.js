// Rastgele bir sayı oluştur
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Kod satırı oluştur
function createCodeLine() {
    const codeLine = document.createElement("div");
    codeLine.classList.add("code");
    codeLine.style.left = Math.random() * window.innerWidth + "px";
    codeLine.style.opacity = Math.random(); // Rastgele saydamlık
    const randomNumber = getRandomNumber(1, 1000); // 1 ile 100 arasında rastgele bir sayı oluştur
    codeLine.textContent = `${randomNumber}`; // İçerik
    document.body.appendChild(codeLine);

    setTimeout(() => {
        codeLine.remove();
    }, 5000); // Kod satırının ekranda kalma süresi (ms)
}

// Belirli aralıklarla kod satırı oluştur
setInterval(createCodeLine, 40); // Kod satırı oluşturma aralığı (ms)
