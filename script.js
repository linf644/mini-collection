// define container 
let container = document.querySelector(".container");
// define img wrapper
let imgWrapper = document.querySelector(".img-wrapper");
imgWrapper.style.display = "flex";


// define the first word
let firstColor = document.querySelector("#mini");
// define the second word
let secondColor = document.querySelector("#sneaker");
// define the third word
let thirdColor = document.querySelector("#collection");

// hover over the first word "mini", and change the background color
firstColor.addEventListener("mouseover", function(){
    container.style.backgroundColor = "#d9e4dd";
})
firstColor.addEventListener("mouseout", function(){
    container.style.backgroundColor = "rgb(225, 229, 237)";
})
// hover over the second word "mini", and change the background color
secondColor.addEventListener("mouseover", function(){
    container.style.backgroundColor = "#faf3dd";
})
secondColor.addEventListener("mouseout", function(){
    container.style.backgroundColor = "rgb(225, 229, 237)";
})
// hover over the third word "mini", and change the background color
thirdColor.addEventListener("mouseover", function(){
    container.style.backgroundColor = "#faf4ff";
})
thirdColor.addEventListener("mouseout", function(){
    container.style.backgroundColor = "rgb(225, 229, 237)";
})



// create the first snkr img
let snkr1 = document.createElement("img");
snkr1.src = "./assets/img/snkr1.jpg";
snkr1.style.width = "45%";
snkr1.style.margin = "1rem";
// add the first img to the page
imgWrapper.append(snkr1);

// create the second snkr img
let snkr2 = document.createElement("img");
snkr2.src = "./assets/img/snkr2.jpg";
snkr2.style.width = "45%";
snkr2.style.margin = "1rem";
// add the second img to the page
imgWrapper.append(snkr2);

// click the first img, and have the description show up
snkr1.addEventListener("click", function(){

    // creat first text description
    let firstTxtName = document.createElement("div");
    firstTxtName.innerText = "Air Force 1";
    firstTxtName.classList.add("description");
    firstTxtName.style.left = "5rem";
    firstTxtName.style.top = "2rem";
    imgWrapper.append(firstTxtName);
    let firstTxtColor = document.createElement("div");
    firstTxtColor.innerText = "G-DRAGON X '07 'PARA-NOISE 2.0'";
    firstTxtColor.classList.add("description");
    firstTxtColor.style.left = "5rem";
    firstTxtColor.style.top = "6rem";
    imgWrapper.append(firstTxtColor);
})
// click the second img, and have the description show up
snkr2.addEventListener("click", function(){

    // create second text description
    let secondTxtName = document.createElement("div");
    secondTxtName.innerText = "AIR JORDAN 4 SP";
    secondTxtName.classList.add("description");
    secondTxtName.style.top = "2rem";
    secondTxtName.style.right = "24rem";
    imgWrapper.append(secondTxtName);
    let secondTxtColor = document.createElement("div");
    secondTxtColor.innerText = "OFF-WHITE X WMNS 'SAIL'";
    secondTxtColor.classList.add("description");
    secondTxtColor.style.top = "6rem";
    secondTxtColor.style.right = "14rem";
    imgWrapper.append(secondTxtColor);
})

// hover over img1 and have it bounce
snkr1.addEventListener("mouseover", function(){
    snkr1.classList.add("float");
})
snkr1.addEventListener("mouseout", function(){
    snkr1.classList.remove("float");
})
// hover over img2 and have it bounce
snkr2.addEventListener("mouseover", function(){
    snkr2.classList.add("float");
})
snkr2.addEventListener("mouseout", function(){
    snkr2.classList.remove("float");
})