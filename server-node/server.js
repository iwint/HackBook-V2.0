var request = require('request');
const express = require('express');
const cors = require('cors');

const multer = require('multer');
const upload = multer();

const app = express();
const PORT = 5000;

app.use(cors());
const _apiUrl = 'https://faceapi.mxface.ai/api/face/';
const _subscriptionKey = 'dVVuKB2ZNwLy4CqFME-aDG80qmANQ1164';

const fb = require('./config');

var fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
function base64Encode(file) {
  var body = fs.readFileSync(file);
  return body.toString('base64');
}

const CompareImage = (file1, file2) => {
  var optionsFaceCompare = {
    url: _apiUrl + 'verify',
    method: 'POST',
    headers: {
      subscriptionkey: _subscriptionKey,
      'Content-Type': 'application/json',
    },
    json: {
      encoded_image1: file1,
      encoded_image2: file2,
    },
    rejectUnauthorized: false,
  };
  return new Promise((resolve, reject) => {
    request(optionsFaceCompare, function (error, response) {
      console.log('Response /verify');
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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/create', upload.single('face'), (req, res) => {
  console.log(req.body);
  const face = req.file;
  const db = fb.firestore();
  db.collection('criminals')
    .add({ name: req.body.name, location: req.body.location })
    .then((e) => {
      fs.writeFileSync(__dirname + '/images/' + e.id + '.png', face.buffer);
      res.send({ status: 200, id: e.id });
    });
});

app.post('/facematch', upload.single('face'), async (req, res) => {
  const face = req.file.buffer.toString('base64');
  // console.log(face);
  result = [];
  const data = fs.readdirSync(__dirname + '/images');

  await Promise.all(
    data.map(async (e) => {
      const m = await CompareImage(
        base64Encode(__dirname + '/images/' + e),
        face,
      );
      return { name: e.split('.')[0], result: m };
    }),
  ).then((e) => {
    res.send(e);
  });
});

app.listen(PORT, () => {
  console.log(`VANAKAM DA MAPULA PORT : ${PORT} LA IRUNTHU `);
});
