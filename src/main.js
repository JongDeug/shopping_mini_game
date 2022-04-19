const cloth = [
    {
        img: "blue_p",
        color: "blue",
        sort : "pants",
        info: "man, large size"
    },
    {
        img: "blue_s",
        color: "blue",
        sort : "skirts",
        info: "female, small size"
    },
    {
        img: "blue_t",
        color: "blue",
        sort : "t-shirts",
        info: "female, small size"
    },
    {
        img: "pink_t",
        color: "blue",
        sort : "t-shirts",
        info: "female, small size"
    },
    {
        img: "pink_s",
        color: "blue",
        sort : "skirts",
        info: "female, small size"
    },
    {
        img: "pink_p",
        color: "blue",
        sort : "pants",
        info: "female, small size"
    },
    {
        img: "yellow_t",
        color: "blue",
        sort : "t-shirts",
        info: "female, small size"
    },
    {
        img: "yellow_s",
        color: "blue",
        sort : "skirts",
        info: "female, small size"
    },
    {
        img: "yellow_p",
        color: "blue",
        sort : "pants",
        info: "female, small size"
    },
    {
        img: "yellow_t",
        color: "blue",
        sort : "t-shirts",
        info: "female, small size"
    },
    {
        img: "blue_s",
        color: "blue",
        sort : "skirts",
        info: "female, small size"
    },
    {
        img: "blue_p",
        color: "blue",
        sort : "pants",
        info: "female, small size"
    },
    {
        img: "pink_t",
        color: "blue",
        sort : "t-shirts",
        info: "female, small size"
    },
    {
        img: "yellow_t",
        color: "blue",
        sort : "t-shirts",
        info: "female, small size"
    },
    {
        img: "pink_t",
        color: "blue",
        sort : "t-shirts",
        info: "female, small size"
    },
];

const contents = document.querySelector(".contents");


function landing(){
    for(let i=0; i<cloth.length; i++){
        contents.innerHTML += `<section class="cont"><img src="img/${cloth[i].img}.png" alt=""><span>${cloth[i].info}</span></section> `;
    }
}
landing();

const tShirt = document.querySelector("#t-shirt");
const pants = document.querySelector("#pants");
const skirt = document.querySelector("#skirt");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const pink = document.querySelector("#pink");

tShirt.addEventListener("click", function(){
    contents.innerHTML = "";
    for(let i=0; i<cloth.length; i++){
        if(cloth[i].sort === "t-shirts"){
            contents.innerHTML += `<section class="cont"><img src="img/${cloth[i].img}.png" alt=""><span>${cloth[i].info}</span></section> `;
        }
    }
})

// contents.addEventListener("scroll", function(event){
//     console.log(event.target.scrollTop);
// })