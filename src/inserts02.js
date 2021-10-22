db.inventory.deleteMany({})
db.inventory.insertMany([
{ _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
{ _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
{ _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
{ _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
{ _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] }
])

db.inventory.find( { "item.name": {$eq: "ab"} } )
db.inventory.find( { tags: { $eq: "B" } } )
db.inventory.find( { qty: {$eq: 20} } )
db.inventory.find( { tags: [ "A", "B" ] } )
db.inventory.find({$and: [{"item.name": {$eq:"cd"}}, {"item.code": {$eq:"123"}}]})
db.inventory.find({"item.name": {$eq: "cd"}, "item.code": {$eq:"123"}})
db.inventory.find({$and:[{qty:{$gte:15}}, {qty:{$lte:20}}]})
db.inventory.find({qty:{$gte:15}, qty:{$lte:20}})
db.inventory.find({$or:[{qty:{$eq:20}}, {"item.code":{$eq:"456"}}]})
db.inventory.find({$or:[{qty:{$eq:20}}, {qty:{$eq:15}}]})