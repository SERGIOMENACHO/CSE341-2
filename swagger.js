const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Events API Documentation",
    description: "Description",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/events.js"];

swaggerAutogen(outputFile, endpointFiles).then(() => {
  require("./server.js");
});
