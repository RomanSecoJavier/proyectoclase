/*
todos los documentos con todos los campos
*/
db.coleccion01.find()
/*
{ "_id" : ObjectId("6156ce2309ae96fac8eaa5e0"), "nombre" : "pepe", "edad" : 20 }
{ "_id" : ObjectId("6156ce2409ae96fac8eaa5e1"), "nombre" : "paco", "edad" : 69 }
{ "_id" : ObjectId("6156ce2409ae96fac8eaa5e2"), "nombre" : "antonio", "edad" : 13 }
{ "_id" : ObjectId("6156ce2409ae96fac8eaa5e3"), "nombre" : "adolfo", "edad" : 54 }
...
*/
/*
todos los documentos con el campo edad 20
*/
db.coleccion01.find({edad: 20})
/*
{ "_id" : ObjectId("6156ce2309ae96fac8eaa5e0"), "nombre" : "pepe", "edad" : 20 }
*/
/*
Todos los documentos de la coleccion
*/
db.inventory.find({})
/*
Los que tinen el status que empiezan por la "D"
*/
db.inventory.find({status: "D"})

db.inventory.find({status: {$eq: "D" }})
/*
Valor de qty es 20
*/
db.inventory.find({qty: {$eq: 20 }})
db.inventory.find( { "item.name": { $eq: "ab" } } )
/*
*/
db.inventory.find({"item.code":{$eq: "123"}})