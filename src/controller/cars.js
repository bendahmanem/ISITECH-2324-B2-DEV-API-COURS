import { mockCars } from "../data/mock.js";

export const getCars = (req, res) => {
  res.json(mockCars);
};

export const getCar = (req, res) => {
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
};

export const createCar = (request, response) => {
  const bodyContent = request.body;
  const id = mockCars.length + 1;
  const newCar = { id, ...bodyContent };
  mockCars.push(newCar);
  response.status(201).json(newCar);
};

export const udpateCar = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const bodyContent = request.body;
  const car = mockCars.find((car) => car.id === id);
  if (car) {
    const updatedCar = { ...car, ...bodyContent };
    const index = mockCars.findIndex((car) => car.id === id);
    mockCars[index] = updatedCar;
    response.json(updatedCar);
  } else {
    response.status(404).json({ message: "Car not found" });
  }
};

export const deleteCar = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const car = mockCars.find((car) => car.id === id);
  if (car) {
    mockCars = mockCars.filter((car) => car.id !== id);
    response.status(204).end();
  } else {
    response.status(404).json({ message: "Car not found" });
  }
};
