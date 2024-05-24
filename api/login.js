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

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { loginID, password } = req.body;

  if (credentials[loginID] && credentials[loginID] === password) {
    res.status(200).json({ success: true, redirectURL: `specific_link_for_member_${loginID}.html` });
  } else {
    res.status(401).json({ success: false, message: 'Invalid Login ID or Password' });
  }
};
