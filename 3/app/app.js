const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/app/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

