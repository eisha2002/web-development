import Coffee from "../model/coffeeModel.js";

export const getAllCoffee= async (req,res) => {
    try {
        const coffee = await Coffee.findAll();
        res.json(coffee);
    } catch (error) {
        res.json({message: error.message});
    }
}
export const getCoffeeById= async (req,res) => {
    try {
        const coffee = await Coffee.findAll({
            where: {id: req.params.id}
        });
        res.json(coffee[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}
export const createCoffee = async (req,res) => {
    try {
        await Coffee.create(req.body);
        res.json({message: "Coffee created"});
    } catch (error) {
        res.json({message: error.message});
    }
}
export const updateCoffee= async (req,res) => {
    try {
        await Coffee.update(req.body, {
            where:{id: req.params.id}
        });
        res.json({message: "Coffee updated"});
    } catch (error) {
        res.json({message: error.message});
    }
}
export const deleteCoffee= async (req,res) => {
    try {
        await Coffee.destroy({
            where: {id: req.params.id}
        });
        res.json({message: "coffee deleted"});
    } catch (error) {
        res.json({message: error.message});
    }
}
