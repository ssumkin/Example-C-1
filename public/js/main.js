// 변수는 상단에
// 전역변수는 최대한 줄이고 지역변수로 넣기
// js에서는 쌍따옴표" 말고 따옴표' 쓰기

// 현 버전에서 적용시 작동 안함 나중에 넣기
const noticeListA = document.querySelectorAll("#notice li a"); 
const modalShadow = document.getElementById("modal-shadow");
const button = document.getElementById("button");


function noticeClickController(displayStatus) {
    const modal = document.getElementById('modal');
    
    modal.style.display = displayStatus;
    modalShadow.style.display = displayStatus; 
} 

for(let i=0; i<noticeListA.length; i++) {
    // call back 함수
    noticeListA[i].addEventListener('click', function() {  
        noticeClickController('block');
    });
}
 
button.addEventListener('click', function(){
    noticeClickController('none');
});

modalShadow.addEventListener('click', function(){
    noticeClickController('none');
}); 

// 이미지 슬라이드 js 생성 > 실행
let splide = new Splide( '.splide' , {
    type    : 'loop', 
    autoplay: true
});
splide.mount();