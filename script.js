

const container = document.getElementById("card-containers");
const leftBtn = document.getElementById("left-arrow");
const rightBtn = document.getElementById("right-arrow");

rightBtn.addEventListener("click", () => {
container.scrollBy({
left: -400,
behavior: "smooth"
});
});

leftBtn.addEventListener("click", () => {
container.scrollBy({
left: 400,
behavior: "smooth"
});
});