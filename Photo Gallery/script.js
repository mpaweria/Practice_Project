window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky1", window.scrollY > 0 && window.scrollY < 615);
    header.classList.toggle("sticky2", window.scrollY > 615 && window.scrollY < 1230);
});
