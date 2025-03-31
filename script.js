// モーダル表示用
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = "<img src='' alt='拡大画像'>";
    document.body.appendChild(modal);
  
    const modalImg = modal.querySelector("img");
  
    document.querySelectorAll(".grid img").forEach(img => {
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.style.display = "flex";
      });
    });
  
    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });