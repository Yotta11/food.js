import fs from "fs"
import path from "path"


let foods=[
    {
        "idFood":1,
        "name":" la Thieboudienne",
        "description" :" Le plat national sénégalais, à base de riz, de poisson (souvent du mérou), de légumes et de condiments. C'est un plat unique qui se décline en plusieurs variantes, notamment la version rouge à la tomate",
        "allergies":"sesame,mollusques,crustaces,poissons"
    },
    {
        "idFood":2,
        "name":" Yassa",
        "description" :" Un plat à base de poulet ou de poisson mariné au citron et aux oignons, connu pour son équilibre entre acidité et douceur",
        "allergies":"sesame,mollusques,crustaces,poissons"
    },

    {
        "idFood":3,
        "name":" Mafé",
        "description" :"Un ragoût traditionnel à base de viande (poulet, bœuf, etc.) avec une sauce à base de pâte d'arachide, souvent accompagné de riz ou de couscous ",
        "allergies":"arachide"
    },
    {
        "idFood":4,
        "name":" Accras",
        "description" :" Des beignets de poisson, souvent épicés, servis en accompagnement ou comme snack.",
        "allergies":"morues,oeufs,gluten"
    },
    {
        "idFood":5,
        "name":"Thiéré",
        "description" :"Un couscous de mil, souvent accompagné de sauces à base de viande, de poulet ou de poisson. Il existe différentes variétés de Thiéré, chacune avec sa propre sauce.",
        "allergies":"riz,viande,epices"
    }
];
const controller={

    createFood: async (req, res) => {

      let newItems = req.body;
const {name,description,allergies}=req.body;
      
        const data2 = await fs.promises.readFile('./database.json', 'utf8');
        foods = JSON.parse(data2 || '[]');

      // Forcer en tableau si un seul objet est reçu
      if (!Array.isArray(newItems)) {
        newItems = [newItems];
      }

      let idcourant = foods.length + 1;

      newItems.map((item) => {
        foods.push( {idFood: idcourant,name,description,allergies}
        
        );
      });
    
      await fs.promises.writeFile('./database.json', JSON.stringify(foods, null, 2), 'utf8');
      res.status(201).send(foods); 
    },
    
getAllFood :(req,res) =>{


},

updateFood: (req,res) =>{


},
deleteFood: (req,res) =>{


}




}
export default controller;