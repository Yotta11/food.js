import { Router } from "express";
import controller from "../controllers/controller.js"



const router=Router();

router.post("/food",controller.createFood);
router.get("/food",controller.getAllFood);
router.put("/food/:id",controller.updateFood);
router.delete("/food/:id",controller.deleteFood);


export default router;
