const server = require('./api/server.js') // imports server from server.js

const port = process.env.PORT || 5000; // selects port from hidden ENV file when possible.  if not found, defaults to 5000

server.listen(port, () => console.log(`Server running on port ${port}`)); // starts server on prior specified port