
const bag = {
    book: "Math",
    notebook: "Physics",
    lunch: "Sandwich",
    bottle: "Water"
};
const marks=[10,20]
const [phy, math]=marks;
console.log(phy);
const{book,notebook,lunch}=bag;
console.log(book);
console.log(notebook);
console.log(lunch);
let house = "Global House";
function bedroom(){
    let bed = "My Bed";
    console.log(house);
    console.log(bed);
}

bedroom();
