
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dealerships').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all ([
        knex('dealerships').insert({make: 'Porsche', city: 'Toronto', province: 'ON', postal_code:'M5A 0B2', street:'68 Parliament St'}),
        knex('dealerships').insert({make: 'Porsche', city: 'Woodbridge', province: 'ON', postal_code:'L4L 8R1', street: '101 Auto Park Circle'})
      ])
    });
};
