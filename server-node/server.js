/** @format */

var request = require("request");
const express = require("express");
const cors = require("cors");

const multer = require("multer");
const upload = multer();

const app = express();
const PORT = 5000;

app.use(cors());
const _apiUrl = "https://api.faceonlive.com/sntzbspfsdupgid1/api";
const _subscriptionKey = "snJ2eZojxrVXnNzJGpAS7GqYYgrJAqCI";

const fb = require("./config");

var fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
function base64Encode(file) {
   var body = fs.readFileSync(file);
   return body.toString("base64");
}

const CompareImage = (file1, file2) => {
   var optionsFaceCompare = {
      url: `${_apiUrl}/face_compare_base64`,
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "X-BLOBR-KEY": _subscriptionKey,
      },
      body: JSON.stringify({
         image1: file1,
         image2: file2,
      }),
   };
   return new Promise((resolve, reject) => {
      request(optionsFaceCompare, function (error, response) {
         console.log("Response /verify");
         if (error) {
            console.log(error);
            reject(error);
         } else {
            console.log(response.body);
            resolve(response.body);
         }
      });
   });
};

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/index.html");
});

app.post("/create", upload.single("face"), (req, res) => {
   console.log(req.body);
   const face = req.file;
   const db = fb.firestore();
   db.collection("criminals")
      .add({ name: req.body.name, location: req.body.location })
      .then((e) => {
         fs.writeFileSync(__dirname + "/images/" + e.id + ".png", face.buffer);
         res.send({ status: 200, id: e.id });
      });
});

app.post("/facematch", upload.single("face"), async (req, res) => {
   const face = req.file.buffer.toString("base64");
   // console.log(face);
   result = [];
   const data = fs.readdirSync(__dirname + "/images");

   await Promise.all(
      data.map(async (e) => {
         const m = await CompareImage(base64Encode(__dirname + "/images/" + e), face);
         return { name: e.split(".")[0], result: JSON.parse(m)?.data };
      }),
   )

      .then((e) => {
         console.log(e);
         res.send(e);
      })
      .catch((err) => {
         res.send(err);
      });
});

app.listen(PORT, () => {
   console.log(`VANAKAM DA MAPULA PORT : ${PORT} LA IRUNTHU `);
});
