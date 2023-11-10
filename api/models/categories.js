const defaultCategories = [
{
     id: 1,
     name: "Bags"
},
{
    id: 2,
    name: "Cosmetics"
},
{
    id: 3,
    name: "Clothing"
},
{
    id: 4,
    name: "Watches"
}
];

function getCategorie(name){
    defaultCategories.forEach(categorie => {
        if(categorie===name){
            return categorie;
        }
    });
}

