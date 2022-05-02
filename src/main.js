const contents = document.querySelector(".contents");

// json data 불러오기 
function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
}

// cloth(s) 출력
function displayItems(cloth) {
    contents.innerHTML = cloth.map(item => createHTML(item)).join('');
}

// cloth(s) html tag 만들기
function createHTML(item) {
    return `<section class="cont"><img src="img/${item.img}.png" alt=""><span>${item.info}</span></section>`;
}

// 모든 btn 관리
function allBtnEvent(event, cloth) {
    const btn = event.target;
    const value = event.target.dataset.value;

    btn.addEventListener("click", onButtonClick(cloth, value));
}

// 선택된 버튼으로 정렬하는 핸들러
function onButtonClick(cloth, value) {
    contents.innerHTML = "";
    const arr = cloth.filter(item => item.sort === value || item.color === value);
    displayItems(arr);
}


// main
loadItems().then(items => {
    const cloth = items;
    const btn = document.querySelector(".nav");
    displayItems(cloth);
    btn.addEventListener("click", (event) => allBtnEvent(event, cloth));
}).catch(console.log);


// function clickShapeHandler(event, cloth, str) {
//     event.preventDefault();
//     contents.innerHTML = "";
//     for (let i = 1; i < cloth.length; i++) {
//         if (cloth[i].sort === str) {
//             contents.innerHTML += `<section class="cont"><img src="img/${cloth[i].img}.png" alt=""><span>${cloth[i].info}</span></section> `;
//         }
//     }
// }

// function clickColorHandler(event, cloth, str) {
//     event.preventDefault();
//     contents.innerHTML = "";
//     for (let i = 1; i < cloth.length; i++) {
//         if (cloth[i].color === str) {
//             contents.innerHTML += `<section class="cont"><img src="img/${cloth[i].img}.png" alt=""><span>${cloth[i].info}</span></section> `;
//         }
//     }
// }
// const tShirt = document.querySelector("#t-shirt");
// const pants = document.querySelector("#pants");
// const skirt = document.querySelector("#skirt");
// const blue = document.querySelector("#blue");
// const yellow = document.querySelector("#yellow");
// const pink = document.querySelector("#pink");

// tShirt.addEventListener("click", (event) => clickShapeHandler(event, cloth, "t-shirts"));
// pants.addEventListener("click", (event) => clickShapeHandler(event, cloth, "pants"));
// skirt.addEventListener("click", (event) => clickShapeHandler(event, cloth, "skirts"));
// blue.addEventListener("click", (event) => clickColorHandler(event, cloth, "blue"));
// yellow.addEventListener("click", (event) => clickColorHandler(event, cloth, "yellow"));
// pink.addEventListener("click", (event) => clickColorHandler(event, cloth, "pink"));


// contents.addEventListener("scroll", function(event){
//     console.log(event.target.scrollTop);
// })


/**
 * 프로젝트 이름
 * 스택 (기술)
 * 주요 기능
 * ### 1. 
 * ### 2.
 * 아키텍쳐
 */