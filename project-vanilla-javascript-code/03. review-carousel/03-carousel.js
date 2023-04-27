const infoObject = {
  name: ["Susan Smith", "Anna Johnson", "Peter Jones", "Bill Anderson"],
  job: ["WEB DEVELOPER", "WEB DESIGNER", "INTERN", "THE BOSS"],
  info: [
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  ],
};

const imgArray = [
  "./img/01.jpg",
  "./img/02.jpg",
  "./img/03.jpg",
  "./img/04.jpg",
];

const items = document.querySelectorAll(".info__items");
const btn = document.querySelectorAll(".btn");
const leftBtn = document.querySelector(".left__btn");
const rightBtn = document.querySelector(".right__btn");
const img = document.querySelector(".image");
let cnt = 0;

// 오른쪽 버튼을 눌렀을 때, 오른쪽 방향으로 계속 넘어가기. 4를 넘어가는 순간에 undefined가 뜨기 때문에, %을 이용하자.
// 왼쪽 버튼을 눌렀을 때, 왼쪽 방향으로 계속 넘어가기. -1이 되는 순간에 바로 4로 변경하기.
// 계속 클릭 카운트를 세어줘야 한다.

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "left__btn") {
      cnt -= 1;
      if (cnt < 0) {
        cnt = 3;
      }
      items.forEach((item) => {
        let objectKey = item.id;
        item.innerText = infoObject[objectKey][cnt % imgArray.length];
        img.setAttribute("src", imgArray[cnt % imgArray.length]);
      });
    } else {
      cnt += 1;
      items.forEach((item) => {
        let objectKey = item.id;
        item.innerText = infoObject[objectKey][cnt % imgArray.length];
        img.setAttribute("src", imgArray[cnt % imgArray.length]);
      });
    }
  });
});

// Surprise Me : 랜덤하게 인물 가져오기.

const randomClick = () => {
  let randomIdx = Math.floor(Math.random() * imgArray.length);
  items.forEach((item) => {
    let targetKey = item.id;
    item.innerText = infoObject[targetKey][randomIdx];
    img.setAttribute("src", imgArray[randomIdx]);
  });
};
