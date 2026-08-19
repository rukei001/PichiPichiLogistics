"use strict";

{
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
const menuIcon = menuButton.querySelector(".material-symbols-outlined");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  
  // 読み上げ用の設定
  menuButton.setAttribute("aria-expanded", isOpen);

  if (isOpen) {
    // アイコンばつじるし
    menuIcon.textContent = "close";
    // 読み上げくん
    menuButton.setAttribute("aria-label", "メニューを閉じる");
  } else {
    // アイコン三本線メニュー
    menuIcon.textContent = "menu";
    // 読み上げくん
    menuButton.setAttribute("aria-label", "メニューを開く");
  }
});

// スマホでお問い合わせを押すとメニューひらきっぱになる可能性があるので
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuIcon.textContent = "menu";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");
  });
});
}