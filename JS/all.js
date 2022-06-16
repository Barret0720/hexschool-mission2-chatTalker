// roll top
$(document).ready(function(){
    // ToTOP
    $(".backtop").click(function(){
        $('html , body').animate({ scrollTop:0 } , 500); 
    });

});

// swiper 套件JS 設定

function initSwiper() {

    const swiper = new Swiper(".comment-swiper", {
        /*  預設要顯示幾個卡片 */
        slidesPerView: 1,
        /* 斷點設定 */
        breakpoints: {
            /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
            768: {
                slidesPerView: 3
            },
            /* 螢幕寬度大於等於 451px 時切換為 2 欄 */
            450: {
                slidesPerView: 2
            },
            /* 更小時都顯示 1 欄 */
            0: {
                slidesPerView: 1
            }
        },
        /* 卡片元素的間隔 */
        spaceBetween: 16,
        pagination: {
            /* 我想將分頁圓點綁在哪個 class */
            el: ".swiper-pagination",
            /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
            clickable: true
        }
    });
}

/* 觸發自己定義的函式 */
initSwiper();

