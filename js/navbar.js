const icon_click = document.querySelector(".expand-nav");
const menuList = document.querySelector(".menu-container>ul");
const bts = document.querySelectorAll(".menu-container>ul>li>a");

icon_click.addEventListener("click", () => {
  menuList.classList.toggle("menu-active");
  icon_click.classList.toggle("btn_clicked");
});

bts.forEach((x) => {
  x.addEventListener("click", (y) => {
    bts.forEach((btnX) => btnX.classList.remove("active"));

    y.currentTarget.classList.toggle("active");

    if (icon_click.classList.contains("btn_clicked")) {
      console.log("Activ");
      if (x.classList.contains("active")) {
        menuList.classList.toggle("menu-active");
        icon_click.classList.toggle("btn_clicked");
      }
    }
  });
});
