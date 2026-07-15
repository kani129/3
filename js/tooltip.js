// 要素の取得（クラス名にlinkを含む要素をすべて取得）
const links = document.querySelectorAll("[class*='link']");

// メソッドの定義
links.forEach((link) => {
    // リンクの「次の要素」がツールチップである、という前提で設定する
    const tooltip = link.nextElementSibling;

    if (tooltip && tooltip.matches("[class*='tooltip']")) {
        link.addEventListener("mouseenter", () => tooltip.showPopover());
        link.addEventListener("mouseleave", () => tooltip.hidePopover());
        link.addEventListener("focus", () => tooltip.showPopover());
        link.addEventListener("blur", () => tooltip.hidePopover());
    }
});

// スマホでのタッチスタート有効
document.body.addEventListener("touchstart", function () { }, { passive: true });

