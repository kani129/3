const swiper = new Swiper(".swiper", {
    // 基本設定
    direction: "horizontal", // 水平スライダー
    spaceBetween: 0,　//スライド間の余白
    loop: true, // ループ有効化
    speed: 1000,　//スライド速度
    autoplay: {
        delay: 3000, // 自動再生の間隔
    },
    // ページネーション
    pagination: {
        // el: 'ここに要素のクラス名を記述する', 
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true, // ページネーションのクリック有効化
    },

    // スクロールバー
    scrollbar: {
        el: '.swiper-scrollbar', // HTMLのクラス名と紐付け 
        draggable: true,         // マウスや指でドラッグ操作できるようにする（強く推奨） 
        hide: false,             // 操作が終わってもバーを非表示にせず、常に表示しておくか 
    },
    // スライドが切り替わる際のアニメーション
    effect: "fade",
});
