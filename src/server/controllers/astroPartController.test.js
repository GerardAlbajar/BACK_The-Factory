const { mockAstroParts } = require("../../mocks/astroParts");
const { getAstroParts } = require("./astroPartController");

jest.mock("../../database/models/AstroPart", () => ({
  ...jest.requireActual("../../database/models/AstroPart"),
  find: jest.fn().mockResolvedValue(mockAstroParts),
}));

describe("Given a getAstroParts function", () => {
  describe("When invoked when a response and a list of AstroParts", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    test("Then it should call the response status method with 200", async () => {
      const expectedStatus = 200;

      await getAstroParts(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with the list of AstroParts", () => {
      getAstroParts(null, res);

      expect(res.json).toHaveBeenCalledWith(mockAstroParts);
    });
  });
});
