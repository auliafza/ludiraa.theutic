// Togle class active untuk search form
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) =>{
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//Klik di luar elemen
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});