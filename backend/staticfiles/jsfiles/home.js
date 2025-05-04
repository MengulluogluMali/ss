// Sayfa yüklendiğinde 3 saniye boyunca intro ekranda kalsın
window.addEventListener("load", function() {
    setTimeout(function() {
        // Blur ekranı kaybetmek için fade efekti
        document.getElementById("intro").classList.add("fade-out");

        // Ana içeriği göster
        document.getElementById("main-content").classList.add("active");
    }, 2000); // 3 saniye bekletme
});
