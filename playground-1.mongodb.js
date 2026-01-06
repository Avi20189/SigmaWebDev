
use('GarazewalaDB');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { 'item': 'Brake Pad', 'brand': 'Bosch', 'price': 2500, 'quantity': 2, 'date': new Date('2024-03-01T08:00:00Z') },
  { 'item': 'Oil Filter', 'brand': 'Mann', 'price': 450, 'quantity': 1, 'date': new Date('2024-03-01T09:00:00Z') },
  { 'item': 'Air Filter', 'brand': 'Mahle', 'price': 900, 'quantity': 3, 'date': new Date('2024-03-15T09:00:00Z') },
  { 'item': 'Spark Plug', 'brand': 'NGK', 'price': 650, 'quantity': 4, 'date': new Date('2024-04-04T11:21:39.736Z') },
  { 'item': 'Clutch Plate', 'brand': 'Valeo', 'price': 4200, 'quantity': 1, 'date': new Date('2024-04-04T21:23:13.331Z') },
  { 'item': 'Fuel Pump', 'brand': 'Delphi', 'price': 7800, 'quantity': 1, 'date': new Date('2025-06-04T05:08:13Z') },
  { 'item': 'Timing Belt', 'brand': 'Gates', 'price': 3200, 'quantity': 2, 'date': new Date('2025-09-10T08:43:00Z') },
  { 'item': 'Shock Absorber', 'brand': 'Monroe', 'price': 5600, 'quantity': 2, 'date': new Date('2026-02-06T20:20:13Z') },

]); 



// Print a message to the output window.
console.log(`Done inserting data`);
