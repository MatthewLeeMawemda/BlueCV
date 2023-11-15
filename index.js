const articleEl1 = document.getElementById('i1');
const articleEl2 = document.getElementById('i2');
const articleEl3 = document.getElementById('i3');
const articleEl4 = document.getElementById('i4');
const divEl = document.getElementById('divTextArea');

let artickState1 = 1;
let artickState2 = 1;
let artickState3 = 1;
let artickState4 = 1;

articleEl1.addEventListener("click", () => {
  if (artickState1 == 1) {
    articleEl1.classList.remove("articleRetract");
    articleEl1.classList.add("articleExtended");
    divEl.classList.remove("activeTextArea");
    divEl.classList.add("activeTextArea");
    artickState1 = 0;
    console.log('on');
  } else {
    articleEl1.classList.remove("articleExtended");
    articleEl1.classList.add("articleRetract");
    divEl.classList.remove("activeTextArea");
    divEl.classList.add("activeTextArea");
    artickState1 = 1;
    console.log('off');
  }
});

articleEl2.addEventListener("click", () => {
  if (artickState2 == 1) {
    articleEl2.classList.add("articleExtended");
    articleEl2.classList.remove("articleRetract");
    artickState2 = 0;
    console.log('on');
  } else {
    articleEl2.classList.remove("articleExtended");
    articleEl2.classList.add("articleRetract");
    artickState2 = 1;
    console.log('off');
  }
});

articleEl3.addEventListener("click", () => {
  if (artickState3 == 1) {
    articleEl3.classList.add("articleExtended");
    articleEl3.classList.remove("articleRetract");
    artickState3 = 0;
    console.log('on');
  } else {
    articleEl3.classList.remove("articleExtended");
    articleEl3.classList.add("articleRetract");
    artickState3 = 1;
    console.log('off');
  }
});

articleEl4.addEventListener("click", () => {
  if (artickState4 == 1) {
    articleEl4.classList.add("articleExtended");
    articleEl4.classList.remove("articleRetract");
    artickState4 = 0;
    console.log('on');
  } else {
    articleEl4.classList.remove("articleExtended");
    articleEl4.classList.add("articleRetract");
    artickState4 = 1;
    console.log('off');
  }
});

