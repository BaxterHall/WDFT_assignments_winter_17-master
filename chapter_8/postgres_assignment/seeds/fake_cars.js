
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
      knex('cars').insert({make: "Porsche", model: "911 Carrera", year: 2017, dealership_id: 1 }),
      knex('cars').insert({make: "Porsche", model: "718 Cayman", year: 2017, dealership_id: 2 }),
      knex('cars').insert({make: "Porsche", model: "550 Spyder", year: 1955, dealership_id: 1 }),
      knex('cars').insert({make: "Porsche", model: "911 Targa", year: 1969, dealership_id: 2 })
      ])
  })
};
