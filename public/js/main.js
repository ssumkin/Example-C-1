// 변수는 상단에
// 전역변수는 최대한 줄이고 지역변수로 넣기
// js에서는 쌍따옴표" 말고 따옴표' 쓰기 
const notice = document.getElementById('notice');
const gallery = document.getElementById('gallery'); 
const tabMenu1 = document.getElementById('tab-menu1');
const tabMenu2 = document.getElementById('tab-menu2');
const noticeListA = document.querySelectorAll('#notice li a'); 
const modalShadow = document.getElementById('modal-shadow');
const button = document.getElementById('button');
const headerMenu = document.getElementById('header-menu');
const header = document.getElementById('header'); 

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

// 화면 767px 이하일 때 헤더메뉴 숨겨놨다가 메뉴버튼 클릭시 보이도록 구성
headerMenu.addEventListener('click', function() {
    let headerLeft = header.offsetLeft;

    if(headerLeft < 0) {
        header.style.left = '0';  
        headerMenu.style.left = '5%'; 
    } else {
        header.style.left = '-300px'; 
        headerMenu.style.left = 'calc(165%)';
    }

});

// 공지사항 글 클릭시 모달창 show 되도록 하는 부분
for(let i=0; i<noticeListA.length; i++) {
    // call back 함수
    noticeListA[i].addEventListener('click', function() {  
        noticeClickController('block');
    });
}

// 모달 버튼 클릭시 모달창 hide
button.addEventListener('click', function() {
    noticeClickController('none');
});

// 모달 뒤 그림자 클릭시 모달창 hide
modalShadow.addEventListener('click', function() {
    noticeClickController('none');
}); 
  
// 공지사항 갤러리 탭 전환
tabMenu1.addEventListener('click', function() {
    if(notice.classList != 'tab-menu-on') {
        notice.style.zIndex = '200';
        gallery.style.zIndex = '100';
        notice.classList.replace('tab-menu-off','tab-menu-on');
        gallery.classList.replace('tab-menu-on','tab-menu-off');
    }
});

tabMenu2.addEventListener('click', function() {
    if(gallery.classList != 'tab-menu-on') {
        gallery.style.zIndex = '200';
        notice.style.zIndex = '100';
        gallery.classList.replace('tab-menu-off','tab-menu-on');
        notice.classList.replace('tab-menu-on','tab-menu-off');
    }
})

// 이미지 슬라이드 js 생성 > 실행
let splide = new Splide( '.splide' , {
    type    : 'loop', 
    autoplay: true
});
splide.mount(); 