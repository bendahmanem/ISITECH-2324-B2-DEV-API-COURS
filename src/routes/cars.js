import express from "express";

const router = express.Router();

const mockCars = [
  { id: 1, brand: "Audi", model: "A3" },
  { id: 2, brand: "Renault", model: "Clio" },
  { id: 3, brand: "Peugeot", model: "208" },
  { id: 4, brand: "BMW", model: "Serie 1" },
  { id: 5, brand: "Mercedes", model: "Classe A" },
  { id: 6, brand: "Citroen", model: "C3" },
  { id: 7, brand: "Ford", model: "Fiesta" },
  { id: 8, brand: "Opel", model: "Corsa" },
  { id: 9, brand: "Toyota", model: "Yaris" },
  { id: 10, brand: "Volkswagen", model: "Polo" },
];

// GET http://localhost:3001/cars
router.get("/", (request, response) => {
  response.json(mockCars);
});

// GET http://localhost:3001/cars/1
router.get("/:id", (request, response) => {
  const id = parseInt(request.params.id, 10);
  console.log(id);
  if (isNaN(id)) {
    response.status(400).json({ message: "Invalid id" });
  }
  const car = mockCars.find((car) => car.id === id);
  if (car) {
    response.json(car);
  } else {
    response.status(404).json({ message: "Car not found" });
  }
});

// POST http://localhost:3001/cars
router.post("/", (request, response) => {
  const bodyContent = request.body;
  const id = mockCars.length + 1;
  const newCar = { id, ...bodyContent };
  mockCars.push(newCar);
  response.status(201).json(newCar);
});

// PUT http://localhost:3001/cars/1 creer une route qui
// permet de modiier une voiture

// DELETE http://localhost:3001/cars/1 creer une route qui
// permet de supprimer une voiture

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;