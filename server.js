const dotenv = require('dotenv');
const app = require('./app');
//need to specific where configure file is located
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App server running on port ${port}...`);
});
