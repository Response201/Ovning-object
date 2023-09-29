

class List {

name;
heigth;
water;


constructor(name, heigth, water){

this.firstname = name;
this.heigth = heigth;
this.water = water;

}

}

const Rose = new List("Rose", 3, true)
const Sunflower = new List("Sunflower", 5, false)
const Hibiskus = new List("Hibiskus", 2, true)
const whitezipp = new List("Whitezipp", 1, true)


const flowers = [Rose , Sunflower, Hibiskus, whitezipp]


for(let i = 0; i < flowers.length; i++){  

    const flowerName = document.createElement("h1")
  console.log(flowerName);
    
    flowerName.innerHTML = flowers[i].firstname;
    console.log(flowerName);

 



const flowerHeight = document.createElement("h3")
console.log(flowerHeight);
  
  flowerHeight.innerHTML = flowers[i].heigth;
  console.log(flowerHeight);

const flowerWater = document.createElement("input")
flowerWater.type = "checkbox";
flowerWater.checked = flowers[i].water;
const item = document.getElementById("container")
item.appendChild(flowerName);
item.appendChild(flowerHeight);
item.appendChild(flowerWater);
}
