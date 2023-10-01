// import express module 
const express = require("express");

// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
const { isImportDeclaration } = require("typescript");
mongoose.connect('mongodb://127.0.0.1:27017/footDB');
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import  express-session
const session = require("express-session")
// import axios
// const axios = require("axios");
//creates express application (app) 
const app = express();

// app configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
   );
   res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
   );
   next();
});


function generateId(T) {
   let max;
   if (T.length == 0) {
      max = 0;
   } else {
      max = T[0].id;
      for (let i = 1; i < T.length; i++) {
         if (T[i].id > max) {
            max = T[i].id;
         }
      }
   }
   return max + 1;
}
//  /files : shortout that replaces /backend/images
app.use('/files', express.static(path.join("backend/images")))
const MIME_TYPE = {
   'image/png': 'png',
   'image/jpeg': 'jpg',
   'image/jpg': 'jpg'
}
const storageConfig = multer.diskStorage({
   // destination
   destination: (req, file, cb) => {
      const isValid = MIME_TYPE[file.mimetype];
      let error = new Error("Mime type is invalid");
      if (isValid) {
         error = null;
      }
      cb(null, 'backend/images')
   },
   filename: (req, file, cb) => {
      const name = file.originalname.toLowerCase().split(' ').join('-');
      const extension = MIME_TYPE[file.mimetype];
      const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
         extension;
      cb(null, imgName);
   }
});
const secretKey = 'crocoSoir23';
app.use(session({
secret: secretKey,
})
);
// Models isImportDeclaration
const Match = require("./models/match");
const Team = require("./models/team");
const User = require("./models/user");
const { ok } = require("assert");
// ("./models/user") mte3 fichier elli 3malneh
// database simulation
let matchesTab = [{
   id: 1,
   scoreOne: 0,
   scoreTwo: 1,
   teamOne: "EST",
   teamTwo: "CA"
},

{
   id: 2,
   scoreOne: 2,
   scoreTwo: 1,
   teamOne: "FCB",
   teamTwo: "RMD",

}];
let usersTab = [{ id: 1, firstName: "ali", lastName: "ben mabrouk", email: "nadia@n.p", pwd: "mmmm" },
{ id: 2, firstName: "hassen", lastName: "ben salh", email: "nadia@n.m", pwd: "mmmm" },
{ id: 3, firstName: "kais", lastName: "ben mabrouk", email: "nadia@n.n", pwd: "mmmm" }];
// business logic:get all matches
app.get("/api/matches", (req, res) => {
   console.log("here into bl:Get All Matches");
   Match.find().then((docs) => {
      console.log("here documents from matches collection", docs);
      res.json({ matches: docs });
   });

});
// business logic:get matche by id
app.get("/api/matches/:id", (req, res) => {
   console.log("here into bl: get matches by id", req.params.id);
   // let findedMatch = {};
   // for (let i = 0; i < matchesTab.length; i++) {
   //    if (matchesTab[i].id == req.params.id) {
   //       findedMatch = matchesTab[i];
   //       break;
   //    }

   // }
   // res.json({ match: findedMatch });
   // let findedMatch = matchesTab.find((obj) => {
   //    return obj.id == req.params.id;
   // });
   // res.json({ match: findedMatch });
   Match.findOne({ _id: req.params.id }).then((doc) => {
      console.log("here doc", doc);
      res.json({ match: doc });
   });
});
// business logic:delete match by id
app.delete("/api/matches/:id", (req, res) => {
   console.log("here into bl: delete match", req.params.id);
   // let matchExist = false;
   // for (let i = 0; i < matchesTab.length; i++) {
   //    if (matchesTab[i].id == req.params.id) {
   //       matchesTab.splice(i, 1);
   //       matchExist = true;
   //    }
   // }
   // if (matchExist) {
   //    res.json({ msg: "delete with succes", tab: matchesTab });
   // } else {
   //    res.json({ msg: "id does not exist" });
   // }
   Match.deleteOne({ _id: req.params.id }).then(
      (response) => {
         console.log("here response after delet", response);
         response.deletedCount ?
            res.json({ msg: "deleted with succes" }) :
            res.json({ msg: "error" });
      }
   );

});
// business logic:add Match
app.post("/api/matches", (req, res) => {
   console.log("here into bl: Add Match", req.body);
   const match = new Match(req.body);
   match.save();
   res.json({ msg: "added with success" });
   //    req.body.id=generateId(matchesTab);
   //    matchesTab.push(req.body);
   // res.json({msg:"added with succes"});

});

// business logic:update Match
app.put("/api/matches", (req, res) => {
   console.log("here into bl:update match", req.body);

   // for (let i = 0; i < matchesTab.length; i++) {
   //    if (matchesTab[i].id == req.body.id) {
   //       matchesTab[i] = req.body;
   //    }

   // }
   // res.json({ isUpdated: true });
   Match.updateOne({ _id: req.body._id }, req.body).then((response) => {
      console.log("here response after editing", response);
      response.nModified ?
         res.json({ isUpdated: true }) :
         res.json({ isUpdated: false });
   });

});

// business logic:add Team
app.post("/api/teams", (req, res) => {
   console.log("here into bl: Add Team", req.body);
   const team = new Team(req.body);
   team.save();
   res.status(200).json({ msg: "added with success" });
   //    req.body.id=generateId(matchesTab);
   //    matchesTab.push(req.body);
   // res.json({msg:"added with succes"});

});
// business logic:get all teams
app.get("/api/teams", (req, res) => {
   console.log("here into bl:Get All teams");
   Team.find().then((docs) => {
      console.log("here documents from matches collection", docs);
      res.json({ players: docs });
   });

});
// bl get team by id
app.get("/api/teams/:id", (req, res) => {
   console.log("here into bl: get teams by id", req.params.id);

   Team.findOne({ _id: req.params.id }).then((doc) => {
      console.log("here doc", doc);
      res.json({ team: doc });
   });
});
// bl delete team
app.delete("/api/teams/:id", (req, res) => {
   console.log("here into bl: delete team", req.params.id);

   Team.deleteOne({ _id: req.params.id }).then(
      (response) => {
         console.log("here response after delet", response);
         response.deletedCount ?
            res.json({ msg: "deleted with succes" }) :
            res.json({ msg: "error" });
      }
   );

});
// business logic:update team
app.put("/api/teams", (req, res) => {
   console.log("here into bl:update team", req.body);


   Team.updateOne({ _id: req.body._id }, req.body).then((response) => {
      console.log("here response after editing", response);
      response.nModified ?
         res.json({ isUpdated: true }) :
         res.json({ isUpdated: false });
   });

});
// business logic:add Player
app.post("/api/players", (req, res) => {
   console.log("here into bl: Add Player", req.body);
   const player = new Player(req.body);
   player.save((err, doc) => {
      console.log("here error: no", err);
      console.log("here doc", doc);
      if (doc) {
         res.json({ msg: "added with success" });

      } else {
         res.json({ msg: "error" });

      }
   });


});
// autre methode d'ajout de player



// bl delete player
app.delete("/api/players/:id", (req, res) => {
   console.log("here into bl: delete player", req.params.id);

   Player.deleteOne({ _id: req.params.id }).then(
      (response) => {
         console.log("here response after delet", response);
         response.deletedCount ?
            res.json({ msg: "deleted with succes" }) :
            res.json({ msg: "error" });
      }
   );

});
// bl get player by id
app.get("/api/players/:id", (req, res) => {
   console.log("here into bl: get matches by id", req.params.id);

   Player.findOne({ _id: req.params.id }).then((doc) => {
      console.log("here doc", doc);
      res.json({ player: doc });
   });
});
// business logic:get all player
app.get("/api/players", (req, res) => {
   console.log("here into bl:Get All Players");
   Player.find().populate({ path: 'team_id', select: 'name' }).then((docs) => {
      console.log("here documents from matches collection", docs);
      res.status(200).json({ players: docs });
   });

});

// business logic : Get All Team players (teamId)
 app.post("/api/searchTeamPlayer", (req, res)=>{
   console.log(("Here into BL: Get all Team Players", req.body));

   try {
      team.findById (req.body.tid)
      .populate("players")
      .then((team)=>{
         console.log("Here founded team", team);
         res.json ({team : team});

      });
 }catch (error){
   console.log("Error",error);
   res.status(500).json ({msg: error})
 }
 });
// business logic:update team
app.put("/api/players", (req, res) => {
   console.log("here into bl:update player", req.body);


   Player.updateOne({ _id: req.body._id }, req.body).then((response) => {
      console.log("here response after editing", response);
      response.nModified ?
         res.json({ isUpdated: true }) :
         res.json({ isUpdated: false });
   });

});
function verifUniqueEmail(T, email) {
   return T.find((elt) => {
      return elt.email == email;
   })
}
// busniness logic signup
app.post("/api/users/signup",
   multer({ storage: storageConfig }).single("img"),
   (req, res) => {
      console.log("here into bl: signup", req.body);

      bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
         req.body.pwd = cryptedPwd;
         req.body.avatar = `http://localhost:3000/files/${req.file.filename}`
         const user = new User(req.body);
         user.save((err, doc) => {
            console.log("here err", err);
            console.log("here doc", doc);
            if (doc) {
               res.json({ msg: 0 });
            } else {
               if (err.errors.email) {
                  res.json({ msg: 1 });
               }
            }
         });

      });
   });
// update  user
app.put("/api/users", (req, res) => {
   console.log("here into bl:update user", req.body);


   User.updateOne({ _id: req.body._id }, req.body).then((response) => {
      console.log("here response after editing", response);
      response.nModified ?
         res.json({ isUpdated: true }) :
         res.json({ isUpdated: false });
   });

});
// bl login
app.post("/api/users/login", (req, res) => {
   let user;
   console.log("here into bl: login", req.body);
   User.findOne({ email: req.body.email }).then((doc) => {
      if ((!doc)) {
         console.log("here response after search by email");
         res.json({ msg: "0" });
      } else {
         user = doc;
         // compare pwd with crypted pwd
         return bcrypt.compare(req.body.pwd, doc.pwd);
      }
   }).then((compareResult) => {
      console.log("compareResult", compareResult);
      if (!compareResult) {
         res.json({ msg: "1" });
      } else {

         let userToSend = {
            fName: user.firstName,
            lName: user.lastName,
            role: user.role,
            id: user._id,
         };
         res.json({ msg: "2", userToSend: userToSend });
      }

   });

});
// function watherApi() {
//    axios.get("https://api.openweathermap.org/data/2.5/weather?lat=36.84&lon=10.20&appid=19f12a143e90fab0dc9736397e8c9821")
// .then((res)=>{console.log(res);})
// .catch((err)=>console.log(err));
// }
// busness logic get all users
app.get("/api/users", (req, res) => {
   console.log("here into bl:get all users");
   User.find().then((docs) => {
      res.json({ users: docs });
   });
});
//get user by id
app.get("/api/users/search/:id", (req, res) => {
   console.log("here into bl: get user by id", req.params.id);

   User.findOne({ _id: req.params.id }).then((doc) => {
      console.log("here doc", doc);
      res.json({ user: doc });
   });
});

// watherApi();

// busnies logicimc
app.post("/api/clcul", (req, res) => {
   console.log("here into bl: imc", req.body);
   let imc = (req.body.weight) / (req.body.taille * 0.0001 * req.body.heiht);
   if (imc < 16.5) {
      res.json({ msg: "msg 1" });
   } else if (imc >= 16.5 && imc < 18.5) {
      res.json({ msg: "msg 2" });
   } else if (imc >= 18.5 && imc < 25) { res.json({ msg: "msg 3" }); }
   else {
      res.json({ msg: "msg 4" });
   }
// business logic test
console.log( "log businnes logic test");
});
// make app importable from another files
module.exports = app;





