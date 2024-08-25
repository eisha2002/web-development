import express from "express";

import {getAllCoffee, getCoffeeById, createCoffee, updateCoffee, deleteCoffee} from "../controller/coffee.js";

const router = express.Router();

router.get('/', getAllCoffee);
router.get('/:id', getCoffeeById);
router.post('/', createCoffee);
router.patch('/:id', updateCoffee);
router.delete('/:id', deleteCoffee);

export default router;
