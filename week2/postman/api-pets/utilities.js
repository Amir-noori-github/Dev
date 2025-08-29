/* // The data model for pet is as follows
{
    "name": "Buddy",
    "species": "Dog",
    "age": 1,
    "color": "Brown",
    "weight": 2
  }
 */
let petArray = [];
let nextId = 1;

const getAll = () => petArray;

const addOne = (name, species, age, color, weight) => {
  if (!name || !species || !age || !color || !weight) return false;

  const newPet = { id: nextId++, name, species, age, color, weight };
  petArray.push(newPet);
  return newPet;
};

const findById = (id) => petArray.find((p) => p.id == id) || false;

const updateOneById = (id, updatedData) => {
  const pet = findById(id);
  if (!pet) return false;

  Object.keys(updatedData).forEach((key) => {
    if (pet.hasOwnProperty(key) && updatedData[key] !== undefined) {
      pet[key] = updatedData[key];
    }
  });

  return pet;
};

const deleteOneById = (id) => {
  const found = findById(id);
  if (!found) return false;

  const initialLength = petArray.length;
  petArray = petArray.filter((p) => p.id != id);
  return petArray.length < initialLength;
};

// Run demo if file is executed directly
if (require.main === module) {
  console.log(addOne("Buddy", "Dog", 3, "Brown", 20));
  console.log(addOne("Mittens", "Cat", 2, "Black", 10));
  console.log("getAll:", getAll());
  console.log("findById:", findById(1));
  console.log("updateOne:", updateOneById(1, { age: 4, weight: 22 }));
  console.log("findById after update:", findById(1));
  console.log("deleteOneById:", deleteOneById(1));
  console.log("findById after delete:", findById(1));
}

const Pet = { getAll, addOne, findById, updateOneById, deleteOneById };
module.exports = Pet;
