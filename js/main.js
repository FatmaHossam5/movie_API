// Responsive sidebar initialization
let sideBar_width;

function initSidebar() {
  if (window.innerWidth >= 992) {
    // Desktop behavior
    sideBar_width = $(".movieCategory").innerWidth();
    $(".sideBar_content").css({ left: `-${sideBar_width}px` });
  } else {
    // Mobile/Tablet behavior
    $(".sideBar_content").css({ left: '-100vw' });
  }
}

$(document).ready(function () {
  initSidebar();
});

// Handle window resize
$(window).resize(function() {
  initSidebar();
  // Close sidebar on resize to prevent layout issues
  if ($(".sideBar_content").hasClass('show')) {
    closeSidebar();
  }
});
// Improved responsive sidebar toggle
function openSidebar() {
  if (window.innerWidth >= 992) {
    // Desktop behavior
    $(".sideBar_content").animate({left: "0px"}, 500, function(){
      $(".toggle").removeClass("fa-bars").addClass("fa-xmark");
      $(".nav-item").slideDown(500);
    });
  } else {
    // Mobile/Tablet behavior with overlay
    $(".sideBar_content").addClass('show').css({left: "0px"});
    $("body").addClass('sidebar-open');
    $(".toggle").removeClass("fa-bars").addClass("fa-xmark");
    $(".nav-item").slideDown(300);
  }
}

function closeSidebar() {
  if (window.innerWidth >= 992) {
    // Desktop behavior
    $(".nav-item").slideUp(500, function(){
      let width = $(".movieCategory").innerWidth();
      $(".sideBar_content").animate({left: `-${width}px`}, 500);
      $(".toggle").removeClass("fa-xmark").addClass("fa-bars");
    });
  } else {
    // Mobile/Tablet behavior
    $(".nav-item").slideUp(300, function(){
      $(".sideBar_content").removeClass('show').css({left: "-100vw"});
      $("body").removeClass('sidebar-open');
      $(".toggle").removeClass("fa-xmark").addClass("fa-bars");
    });
  }
}

$(".toggle").click(function(){
  if($(".sideBar_content").hasClass('show') || $(".sideBar_content").css("left") === "0px"){
    closeSidebar();
  } else {
    openSidebar();
  }
});

// Close sidebar when clicking outside on mobile
$(document).click(function(event) {
  if (window.innerWidth < 992 && $(".sideBar_content").hasClass('show')) {
    if (!$(event.target).closest('.sideBar_content, .toggle').length) {
      closeSidebar();
    }
  }
});

// Close sidebar on escape key
$(document).keyup(function(e) {
  if (e.keyCode === 27 && $(".sideBar_content").hasClass('show')) {
    closeSidebar();
  }
});



var movies=[];
getMovies("movie/now_playing");
 async function getMovies(movie){
  let response= await fetch(`https://api.themoviedb.org/3/${movie}?api_key=1c138bc3fffc56003b8bb56711b1f4ca`);
  let result= await response.json();
  movies=result.results;
  displayMovies();
 
}

function displayMovies(){
  let cartoona="";
  for(var i=0; i< movies.length ;i++ ){
    cartoona += `
    <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-3 px-2 px-md-3">
                <div class="movie position-relative overflow-hidden">
                    <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" class="img-fluid" alt="">
                    <div class="layer text-center position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center p-2">
                        <h2 class="h5 h-md-4">${movies[i].title}</h2>
                        <p class="small d-none d-md-block">${movies[i].overview}</p>
                        <p class="mb-1">Rate: ${movies[i].vote_average}</p>
                        <p class="small">${movies[i].release_date}</p>
                    </div>
                </div>
            </div>
    `
  }
  document.getElementById("movieCard").innerHTML=cartoona;
}

let category = document.querySelectorAll(".navbar .nav-link");
for(let i=0; i<category.length;i++){
  category[i].addEventListener("click",function(e){
      let currentList= $(e.target).attr("id")
      getMovies(currentList);
  })
 
}
let search_word=document.getElementById("searchApi");
$("#searchApi").keyup(function(){
  getSearchedMovies()
  search()
})
let searchMovies;
 async function getSearchedMovies(){
  searchMovies = search_word.value;
  let search= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1c138bc3fffc56003b8bb56711b1f4ca&query=${searchMovies}`);
  let result= await search.json();
  movies=result.results;
  displayMovies();
}
function search(term){
  
  var cartoona="";
  for(var i=0;i<movies.length;i++){
      if(movies[i]?.title.toLowerCase().includes(term.toLowerCase())==true)
      {
      cartoona += `
      <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-3 px-2 px-md-3">
                  <div class="movie position-relative overflow-hidden">
                      <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" class="img-fluid" alt="">
                      <div class="layer text-center position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center p-2">
                          <h2 class="h5 h-md-4">${movies[i].title}</h2>
                          <p class="small d-none d-md-block">${movies[i].overview}</p>
                          <p class="mb-1">Rate: ${movies[i].vote_average}</p>
                          <p class="small">${movies[i].release_date}</p>
                      </div>
                  </div>
              </div>
      `
      }
  }
  
 document.getElementById("movieCard").innerHTML=cartoona;
}

let userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPhone = document.getElementById("phone");
var userAge = document.getElementById("age");
var userPass = document.getElementById("pass");
var userRePass = document.getElementById("RePass");
var submitBtn = document.getElementById("submitBtn");
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");
var phoneAlert = document.getElementById("phoneAlert");
var ageAlert = document.getElementById("ageAlert");
var passAlert = document.getElementById("passAlert");
const inputs = document.getElementsByClassName("form-control");
const rePassAlert = document.getElementById("rePassAlert");


userName .onkeyup = function () {
  let reGexName = /^[A-Z][a-z A-Z 0-9]{3,}$/;
  if (!reGexName.test(userName .value)) {
    submitBtn.disabled = "true";
    userName .classList.add("is-invalid");
    userName .classList.remove("is-valid");
    nameAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    userName .classList.add("is-valid");
    userName .classList.remove("is-invalid");
    nameAlert.classList.add("d-none");
  }
};


userEmail.onkeyup = function () {
  let reGexEmail = /^([^0-9][a-z\d\.-]+)@(hotmail|gmail)\.com$/i;
  if (!reGexEmail.test(userEmail.value)) {
    submitBtn.disabled = "true";
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    emailAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    emailAlert.classList.add("d-none");
  }
};


userPhone.onkeyup = function () {
  let reGexPhone = /^01[0125][0-9]{8}$/;
  if (!reGexPhone.test(userPhone.value)) {
    submitBtn.disabled = "true";
    userPhone.classList.add("is-invalid");
    userPhone.classList.remove("is-valid");
    phoneAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    userPhone.classList.add("is-valid");
    userPhone.classList.remove("is-invalid");
    phoneAlert.classList.add("d-none");
  }
};


userAge.onkeyup = function () {
  let reGexAge = /^([2-7][0-9]|80$)/;
  if (!reGexAge.test(userAge.value)) {
    submitBtn.disabled = "true";
    userAge.classList.add("is-invalid");
    userAge.classList.remove("is-valid");
    ageAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    userAge.classList.add("is-valid");
    userAge.classList.remove("is-invalid");
    ageAlert.classList.add("d-none");
  }
};

userPass.onkeyup = function () {
  let reGexPass = /^[\w]{8,10}$/;
  if (!reGexPass.test(userPass.value)) {
    submitBtn.disabled = "true";
    userPass.classList.add("is-invalid");
    userPass.classList.remove("is-valid");
    passAlert.classList.remove("d-none");
  } else {
    submitBtn.removeAttribute("disabled");
    userPass.classList.add("is-valid");
    userPass.classList.remove("is-invalid");
    passAlert.classList.add("d-none");
  }
};


userRePass.onkeyup = function () {
  if (userRePass.value == userPass.value) {
    submitBtn.removeAttribute("disabled");
    userRePass.classList.add("is-valid");
    userRePass.classList.remove("is-invalid");
    rePassAlert.classList.add("d-none");
  } else {
    submitBtn.disabled = "true";
    userRePass.classList.add("is-invalid");
    userRePass.classList.remove("is-valid");
    rePassAlert.classList.remove("d-none");
  }
};
let contactUs = document.getElementById("inTouch");
contactUs.addEventListener("click", function () {
  // Close sidebar first on mobile
  if (window.innerWidth < 992 && $(".sideBar_content").hasClass('show')) {
    closeSidebar();
  }
  
  // Smooth scroll to contact section
  setTimeout(() => {
    let contactOffSet = $("#contactUs").offset().top;
    $("html, body").animate({ scrollTop: contactOffSet }, 1500);
  }, window.innerWidth < 992 ? 300 : 0);
});
