import Vehicle from "../db/models/vehicle.js";
import { vehicleSchema, vehicleSchemaForPatch } from "../db/schemas/vehicle.js";

const DEFAULT_PAGE_SIZE = 10;

const createQuery = (filter = {
    text: "",
    brand: true,
    model: true,
    state: true,
    year: true,
    yearLessThan: new Date().getFullYear(),
    yearGreaterThan: 0,
}) => {
    const query = {
        $or: []
    }
    if (filter.brand === "true") query.$or.push({ brand: new RegExp(filter.text, 'i') })
    if (filter.model === "true") query.$or.push({ model: new RegExp(filter.text, 'i') })
    if (filter.state === "true") query.$or.push({ state: new RegExp(filter.text, 'i') })
    if (filter.year === "true") query["year"] = { $lte: filter.yearLessThan, $gt: filter.yearGreaterThan }
    return query
}

export const getVehicles = async (req, res) => {
    try {
        const { page, sort, ...filter } = req.query;
        const options = {
            page: page ? page : 1,
            limit: filter.pageSize ? filter.pageSize : DEFAULT_PAGE_SIZE,
            sort: sort ? sort : "-createdAt",
        };
        const query = createQuery(filter)
        const vehicles = await Vehicle.paginate(query, options);
        res.status(200).json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocurrio un error innesperado." });
    }
};

export const createVehicle = async (req, res) => {
    try {
        try {
            await vehicleSchema.validate(req.body);
        } catch (err) {
            return res.status(400).json({ type: err.name, message: err.message });
        }

        const { brand, model, year, state } = req.body;

        const newVehicle = new Vehicle({
            brand,
            model,
            year,
            state,
        });

        try {
            const savedVehicle = await newVehicle.save();
            res.status(201).json(savedVehicle);
        } catch (err) {
            const error = parseErrors(err);
            res.status(400).json({ error });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocurrio un error innesperado." });
    }
};

export const patchVehicle = async (req, res) => {
    try {
        try {
            await vehicleSchemaForPatch.validate(req.body);
        } catch (err) {
            return res.status(400).json({ type: err.name, message: err.message });
        }
        const id = req.params.id
        const vehicle = await Vehicle.findByIdAndUpdate(id, { ...req.body }, { new: true })
        if (!vehicle) {
            res.status(404).json({ message: "No se encontro vehiculo." })
        }
        res.status(200).json(vehicle)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocurrio un error innesperado." });
    }
};


export const deleteVehicle = async (req, res) => {
    try {
        const id = req.params.id
        await Vehicle.findByIdAndDelete(id)
        res.status(200).json({})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocurrio un error innesperado." });
    }
}