const API_KEY = "AIzaSyBR1gbbt2cSDGueml5Rob_t8tWJA2yCz4A";
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`;
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-goog-api-key": API_KEY
  },
  body: JSON.stringify({ contents: [{ parts: [{ text: "Hello" }] }] })
})
.then(res => res.json().then(data => ({status: res.status, data})))
.then(console.log)
.catch(console.error);
