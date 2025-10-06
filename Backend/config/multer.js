var multer = require("multer");
const fs = require('fs-extra');

multer({
  limits: { fieldSize: 2 * 1024 * 1024 },
});

//code for images
var storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    await fs.ensureDir("public");
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname.replace(/\s+/g, '_'));
  },
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp'  || file.mimetype === 'image/jpg' || file.mimetype === 'image/svg+xml' ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

var upload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = upload;