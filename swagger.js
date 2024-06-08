const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Events API Documentation",
    description: "Description",
  },
  host: "cse341-2-aaog.onrender.com",
  schemes: ["https"],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js')
})
