const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'js-tc-intentional-inclusion');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, './src/index.js'));
});
app.listen(port, () => {
   console.log('Server is up!');
});