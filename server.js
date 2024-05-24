const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 2000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const credentials = {
  "784923": "32589714",
  "158736": "96480251",
  "407215": "73954681",
  "892364": "21589743",
  "631598": "47812365",
  "274956": "61589742",
  "509823": "78451296",
  "736915": "32965487",
  "365897": "81723659",
  "921475": "43618927",
  "845612": "97356481",
  "204875": "69531248",
  "503216": "12986735",
  "769234": "48519763",
  "621498": "73486591",
  "387615": "92635417",
  "915427": "36857241",
  "248573": "61593472",
  "583619": "19786532"
};

app.post('/login', (req, res) => {
  const { loginID, password } = req.body;

  if (credentials[loginID] && credentials[loginID] === password) {
    res.redirect(`/specific_link_for_member_${loginID}.html`);
  } else {
    res.send('Invalid Login ID or Password');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'cryptichunt.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
