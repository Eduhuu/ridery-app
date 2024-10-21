import express from "express"
import * as UserController from "../controllers/userController.js"
import * as VehicleController from "../controllers/vehicleController.js"
import auth from "../middleware/auth.js"
const router = express.Router()
router.post("/user", UserController.createUser)
router.post("/user/login", UserController.loginUser)

router.get("/vehicle", auth, VehicleController.getVehicles)
router.post("/vehicle", auth, VehicleController.createVehicle)
router.patch("/vehicle/:id", auth, VehicleController.patchVehicle)
router.delete("/vehicle/:id", auth, VehicleController.deleteVehicle)
export default router