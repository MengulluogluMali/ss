window.addEventListener("load", function() {
    setTimeout(function() {
        // Blur ekranı kaybetmek için fade efekti
        document.getElementById("intro").classList.add("fade-out");

        // Ana içeriği göster
        document.getElementById("main-content").classList.add("active");
    }, 2000); // 3 saniye bekletme
});


const image = document.getElementById( 'productImg' );
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener( 'click', function(){
    image.src = './img/1.png';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[1].addEventListener( 'click', function(){
    image.src = './img/2.png';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[2].addEventListener( 'click', function(){
    image.src = './img/3.png';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
window.onload = function() {
    document.body.classList.add('light-mode'); // Sayfa yüklendiğinde light-mode sınıfını ekle
    document.body.classList.remove('trans');
};

// Sayfa yüklendiğinde 3 saniye boyunca intro ekranda kalsın
