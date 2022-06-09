const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const connectDB = require("../../database");
const app = require("..");
const Astro = require("../../database/models/Astro");
const { mockAstros } = require("../../mocks/astros");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();

  await connectDB(mongoServer.getUri());
});

beforeEach(async () => {
  await Astro.create(mockAstros);
});

afterEach(async () => {
  await Astro.deleteMany({});
});

afterAll(async () => {
  await mongoServer.stop();
  await mongoose.connection.close();
});

describe("Given a GET '/astros' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should specify json as the content type in the http header", async () => {
      const response = await request(app).get("/astros");

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
