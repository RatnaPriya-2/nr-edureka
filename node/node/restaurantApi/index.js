const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const PORT = 5000;

var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); //inbuilt middleware

const MONGO_URL = "mongodb://localhost:27017";
let db;

app.get("/", function (req, res) {
  res.send("hello world");
});

//  get locations

app.get("/locations", (req, res) => {
  db.collection("locations")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

// get mealType

app.get("/quickSearch", (req, res) => {
  db.collection("mealType")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//  get restaurant data

app.get("/restaurants", (req, res) => {
  let query = {};
  let stateId = +req.query.state_id;
  let mealId = +req.query.mealId;
  if (stateId) {
    query = { state_id: stateId };
  } else if (mealId) {
    query = { "mealTypes.mealtype_id": mealId };
  }

  db.collection("restaurants")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//  filter based on meal id and cuisine id

// filter based on meal id and cuisine id
// app.get("/filter/:mealId", (req, res) => {
//   let query = {};
//   let mealId = +req.params.mealId;
//   let cuisineId = +req.query.cuisineId;

//   if (cuisineId) {
//     query = {
//       "mealTypes.mealtype_id": mealId,
//       "cuisines.cuisine_id": cuisineId,  // Corrected key without the space
//     };
//   }

//   db.collection("restaurants")
//     .find(query)
//     .toArray((err, result) => {
//       if (err) throw err;
//       res.send(result);
//     });
// });


app.get("/filter/:mealId", (req, res) => {
  let query = {};
  let mealId = +req.params.mealId;
  let cuisineId = +req.query.cuisineId;
  let lcost = +req.query.lcost;
  let hcost = +req.query.hcost;
  let sort = { cost: 1 };

  if (req.query.sort) {
    sort = { cost: req.query.sort };
  }

 if (cuisineId) {
   query = {
     "mealTypes.mealtype_id": mealId,
     "cuisines.cuisine_id": cuisineId, // Corrected key without the space
   };
}
  else if (lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  } else if (cuisineId && lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id ": cuisineId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  }

//   //  -1 = descending order
//   //   1 = ascending order

  db.collection("restaurants")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//  filter based on restaurant id

app.get("/details/:id", (req, res) => {
  let query = {};
  let id = +req.params.id;
  query = { restaurant_id: id };

  db.collection("restaurants")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

// menu of restaurant

app.get("/restaurantmenu/:id", (req, res) => {
  let id = +req.params.id;

  db.collection("restaurantmenu")
    .find({ restaurant_id: id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

// POST methods
// express.json = middleware

app.post("/menuItem", (req, res) => {
  if (Array.isArray(req.body)) {
    db.collection("restaurantmenu")
      .find({ menu_id: { $in: req.body } })
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
      });
  } else {
    res.send("Invalid menuID");
  }
});

// place order

app.post("/placeOrder", (req, res) => {
  console.log(req.body);
  db.collection("orders").insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.send("Order placed");
  });
});

// list of orders

app.get("/orders", (req, res) => {
  let query = {};
  let email = req.query.email;
  if (email) {
    query = { email };
  }
  db.collection("orders")
    .find(query)
    .toArray((err, result) => {
      res.send(result);
    });
});

// delete an order

app.delete("/deleteOrder/:id", (req, res) => {
  let oid = +req.params.id;
  db.collection("orders").deleteOne({ orderId: oid });
  res.send("Order deleted successfully");
});

// update payment details

app.put("/updateOrder/:id", (req, res) => {
  let oid = +req.params.id;
  db.collection("orders").updateOne(
    { orderId: oid },
    {
      $set: {
        status: req.body.status,
        bank_name: req.body.bank_name,
        date: req.body.date,
      },
    },
    (err, result) => {
      if (err) throw err;
      res.send("Order updated successfully");
    }
  );
});

MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("mongoDB is connected");
  if (err) console.log("err while connecting to Mongo");
  db = client.db("Zomato");
  app.listen(PORT, () => {
    console.log("Server is connected on the port no", PORT);
  });
});
