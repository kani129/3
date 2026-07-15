// 確認するというボタンの取得と機能実装
const showButton = document.querySelector("#confirm-button");

showButton.addEventListener("click", () => {
    // 入力フォームの内容を確認画面へ
    const formName = document.querySelector("#name");
    const formEmail = document.querySelector("#email");
    const formSubject = document.querySelector("#subject");
    const formComments = document.querySelector("#comments");
    const confirmName = document.querySelector("#confirm-name");
    const confirmEmail = document.querySelector("#confirm-email");
    const confirmSubject = document.querySelector("#confirm-subject");
    const confirmComments = document.querySelector("#confirm-comments");
    confirmName.value = formName.value;
    confirmEmail.value = formEmail.value;
    confirmSubject.value = formSubject.value;
    confirmComments.value = formComments.value;
    // valueは入力フォームの中身のこと
    // =以降のものを=以前のものに代入している
});
// 登録ボタンの処理
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", () => {
    // 入力フォームをクリアして確認画面を閉じる
    const formName = document.querySelector("#name");
    const formEmail = document.querySelector("#email");
    const formSubject = document.querySelector("#subject");

    const formComments = document.querySelector("#comments");


    const dialog = document.querySelector("#modal");

    // 以下の3行はフォームの中を空にして閉じる処理
    formName.value = "";
    formEmail.value = "";
    formSubject.value = "";

    formComments.value = "";
    dialog.close();
});

// トーストの処理
const button = document.querySelector("#submit-button");
const toast = document.querySelector("#toast");

button.addEventListener("click", () => {
    // トーストを表示
    toast.showPopover();

    // 2秒後（2000ミリ秒後）に自動で閉じる
    setTimeout(() => {
        toast.hidePopover();
    }, 2000);
});
