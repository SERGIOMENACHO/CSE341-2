const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Events API Documentation",
    description: "Description",
  },
  host: "cse341-2-aaog.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles).then(() => {
  require("./server.js");
});
