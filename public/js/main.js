// const noticeListA = document.querySelectorAll("#notice > li > a");
// const modal = document.getElementById("modal");
// const modalShadow = document.getElementById("modal-shadow");
// const button = document.getElementById("button");
 
// for(let i=0; i<noticeListA.length; i++) {
//     noticeListA[i].addEventListener('click', function(){
//         modal.style.display = "block";
//         modalShadow.style.display = "block";
//     });
// }

// button.addEventListener('click', function(){
//     modal.style.display = "none";
//     modalShadow.style.display = "none";
// });

// modalShadow.addEventListener('click', function(){
//     modal.style.display = "none";
//     modalShadow.style.display = "none";
// }); 

// 이미지 슬라이드 js 생성 > 실행
let splide = new Splide( '.splide' , {
    type    : 'loop', 
    autoplay: true
});
splide.mount();
