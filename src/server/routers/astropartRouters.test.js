const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const connectDB = require("../../database");
const app = require("..");
const AstroPart = require("../../database/models/AstroPart");
const { mockAstroParts } = require("../../mocks/astroParts");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();

  await connectDB(mongoServer.getUri());
});

beforeEach(async () => {
  await AstroPart.create(mockAstroParts);
});

afterEach(async () => {
  await AstroPart.deleteMany({});
});

afterAll(async () => {
  await mongoServer.stop();
  await mongoose.connection.close();
});

describe("Given a GET '/astroparts' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should specify json as the content type in the http header", async () => {
      const response = await request(app).get("/astroparts");

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
