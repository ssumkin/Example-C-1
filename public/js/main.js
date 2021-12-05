// 변수는 상단에
// 전역변수는 최대한 줄이고 지역변수로 넣기
// js에서는 쌍따옴표" 말고 따옴표' 쓰기 
const notice = document.getElementById("notice");
const gallery = document.getElementById("gallery");
const noticeListA = document.querySelectorAll("#notice li a"); 
const modalShadow = document.getElementById("modal-shadow");
const button = document.getElementById("button");

/**
 * 
 * @param {String} displayStatus 
 */
// 모달창 display 변경 함수
function noticeClickController(displayStatus) {
    const modal = document.getElementById('modal');
    
    modal.style.display = displayStatus;
    modalShadow.style.display = displayStatus; 
} 

// 공지사항 글 클릭시 모달창 show 되도록 하는 부분
for(let i=0; i<noticeListA.length; i++) {
    // call back 함수
    noticeListA[i].addEventListener('click', function() {  
        noticeClickController('block');
    });
}

// 모달 버튼 클릭시 모달창 hide
button.addEventListener('click', function(){
    noticeClickController('none');
});

// 모달 뒤 그림자 클릭시 모달창 hide
modalShadow.addEventListener('click', function(){
    noticeClickController('none');
}); 

// 공지사항 갤러리 스타일 변경
notice.classList.add('active');
gallery.classList.add('none');


// 이미지 슬라이드 js 생성 > 실행
let splide = new Splide( '.splide' , {
    type    : 'loop', 
    autoplay: true
});
splide.mount();