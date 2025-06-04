import fs from "fs"



let foods = [
    {
        "idFood": 1,
        "name": " la Thieboudienne",
        "description": " Le plat national sénégalais, à base de riz, de poisson (souvent du mérou), de légumes et de condiments. C'est un plat unique qui se décline en plusieurs variantes, notamment la version rouge à la tomate",
        "allergies": "sesame,mollusques,crustaces,poissons"
    },
    {
        "idFood": 2,
        "name": " Yassa",
        "description": " Un plat à base de poulet ou de poisson mariné au citron et aux oignons, connu pour son équilibre entre acidité et douceur",
        "allergies": "sesame,mollusques,crustaces,poissons"
    },

    {
        "idFood": 3,
        "name": " Mafé",
        "description": "Un ragoût traditionnel à base de viande (poulet, bœuf, etc.) avec une sauce à base de pâte d'arachide, souvent accompagné de riz ou de couscous ",
        "allergies": "arachide"
    },
    {
        "idFood": 4,
        "name": " Accras",
        "description": " Des beignets de poisson, souvent épicés, servis en accompagnement ou comme snack.",
        "allergies": "morues,oeufs,gluten"
    },
    {
        "idFood": 5,
        "name": "Thiéré",
        "description": "Un couscous de mil, souvent accompagné de sauces à base de viande, de poulet ou de poisson. Il existe différentes variétés de Thiéré, chacune avec sa propre sauce.",
        "allergies": "riz,viande,epices"
    }
];
let personnes = [
    {
        "idpersonne": 1,
        "name": " la Thieboudienne",
        "description": " Le plat national sénégalais, à base de riz, de poisson (souvent du mérou), de légumes et de condiments. C'est un plat unique qui se décline en plusieurs variantes, notamment la version rouge à la tomate",
        "allergies": "sesame,mollusques,crustaces,poissons"
    },
    {
        "idpersonne": 2,
        "name": " Yassa",
        "description": " Un plat à base de poulet ou de poisson mariné au citron et aux oignons, connu pour son équilibre entre acidité et douceur",
        "allergies": "sesame,mollusques,crustaces,poissons"
    },

    {
        "idpersonne": 3,
        "name": " Mafé",
        "description": "Un ragoût traditionnel à base de viande (poulet, bœuf, etc.) avec une sauce à base de pâte d'arachide, souvent accompagné de riz ou de couscous ",
        "allergies": "arachide"
    },
    {
        "idpersonne": 4,
        "name": " Accras",
        "description": " Des beignets de poisson, souvent épicés, servis en accompagnement ou comme snack.",
        "allergies": "morues,oeufs,gluten"
    },
    {
        "idpersonne": 5,
        "name": "Thiéré",
        "description": "Un couscous de mil, souvent accompagné de sauces à base de viande, de poulet ou de poisson. Il existe différentes variétés de Thiéré, chacune avec sa propre sauce.",
        "allergies": "riz,viande,epices"
    }
];


const controller = {

    createFood: async (req, res) => {

        let newItems = req.body;
        const { name, description, allergies } = req.body;

        const data2 = await fs.promises.readFile('./database.json', 'utf8');
        foods = JSON.parse(data2 || '[]');

        // Forcer en tableau si un seul objet est reçu
        if (!Array.isArray(newItems)) {
            newItems = [newItems];
        }

        let idcourant = foods.length + 1;

        newItems.map((item) => {
            foods.push({ idFood: idcourant, name, description, allergies }

            );
        });

        await fs.promises.writeFile('./database.json', JSON.stringify(foods, null, 2), 'utf8');
        res.status(201).send(foods);
    },

    getAllFood: async (req, res) => {
        const data2 = await fs.promises.readFile('./database.json', 'utf8');
        res.status(201).send(foods);
    },

    updateFood: async (req, res) => {


        const { name, description, allergies } = req.body;
        const idFood = parseInt(req.params.idFood);

        const data = await fs.promises.readFile("./database.json", "utf8");
        let foods = JSON.parse(data);
        let foodUpdated = false;

        for (let i = 0; i < foods.length; i++) {
            if (parseInt(foods[i].idFood) === idFood) {
                foods[i].name = name;
                foods[i].description = description;
                foods[i].allergies = allergies;
                foodUpdated = true;
                break;
            }
        }

        if (!foodUpdated) {
            return res.status(404).json({ message: "food non trouvé" });
        }

        await fs.promises.writeFile("./database.json", JSON.stringify(foods, null, 2), "utf8");
        res.status(200).json({ message: "Food mis à jour avec succès" });
    },
    deleteFood: async (req, res) => {
        const idFood = parseInt(req.params.idFood);

        if (!idFood) return res.status(400).json({ error: "ID manquant" });

        const data = await fs.promises.readFile("./database.json", "utf8");
        let foods = JSON.parse(data);


        let fooddelete = false;

        for (let i = 0; i < foods.length; i++) {
            if (parseInt(foods[i].idFood) === idFood) {
                foods.splice(i, 1);
                fooddelete = true;
                break;
            }
        }
        if (!fooddelete) {
            return res.status(404).json({ message: "book non trouvé" });
        }

        await fs.promises.writeFile("./database.json", JSON.stringify(foods, null, 5), "utf8");
        res.status(200).json({ message: "Food supprime avec succès" });
    },




    createpersonne: async (req, res) => {

        let newItems = req.body;
        const { name, description, allergies } = req.body;

        const data2 = await fs.promises.readFile('./databasepersonne.json', 'utf8');
        personnes = JSON.parse(data2 || '[]');

        // Forcer en tableau si un seul objet est reçu
        if (!Array.isArray(newItems)) {
            newItems = [newItems];
        }

        let idcourant = personnes.length + 1;

        newItems.map((item) => {
            personnes.push({ idpersonne: idcourant, name, description, allergies }

            );
        });

        await fs.promises.writeFile('./databasepersonne.json', JSON.stringify(personnes, null, 2), 'utf8');
        res.status(201).send(personnes);
    },

    getAllpersonne: async (req, res) => {
        const data2 = await fs.promises.readFile('./databasepersonne.json', 'utf8');
        res.status(201).send(personnes);
    },

    updatepersonne: async (req, res) => {


        const { name, description, allergies } = req.body;
        const idpersonne = parseInt(req.params.idpersonne);

        const data = await fs.promises.readFile("./databasepersonne.json", "utf8");
        let personnes = JSON.parse(data);
        let personneUpdated = false;

        for (let i = 0; i < personnes.length; i++) {
            if (parseInt(personnes[i].idpersonne) === idpersonne) {
                personnes[i].name = name;
                personnes[i].description = description;
                personnes[i].allergies = allergies;
                personneUpdated = true;
                break;
            }
        }

        if (!personneUpdated) {
            return res.status(404).json({ message: "personne non trouvé" });
        }

        await fs.promises.writeFile("./database.json", JSON.stringify(personnes, null, 2), "utf8");
        res.status(200).json({ message: "personne mis à jour avec succès" });
    },
    deletepersonne: async (req, res) => {
        const idpersonne = parseInt(req.params.idpersonne);

        if (!idpersonne) return res.status(400).json({ error: "ID manquant" });

        const data = await fs.promises.readFile("./databasepersonne.json", "utf8");
        let personnes = JSON.parse(data);


        let personnedelete = false;

        for (let i = 0; i < personnes.length; i++) {
            if (parseInt(personnes[i].idpersonne) === idpersonne) {
                personnes.splice(i, 1);
                personnedelete = true;
                break;
            }
        }
        if (!personnedelete) {
            return res.status(404).json({ message: "personne non trouvé" });
        }

        await fs.promises.writeFile("./database.json", JSON.stringify(personnes, null, 5), "utf8");
        res.status(200).json({ message: "personne supprime avec succès" });
    }

}

export default controller;