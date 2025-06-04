import { Router } from "express";
import controller from "../controllers/controller.js"



const router=Router();
//food
router.post("/food",controller.createFood);
router.get("/food",controller.getAllFood);
router.put("/food/:idFood",controller.updateFood);
router.delete("/food/:idFood",controller.deleteFood);



//personnes

router.post("/personne",controller.createpersonne);
router.get("/personne",controller.getAllpersonne);
router.put("/personne/:idpersonne",controller.updatepersonne);
router.delete("/personne/:idpersonne",controller.deletepersonne);

export default router;
