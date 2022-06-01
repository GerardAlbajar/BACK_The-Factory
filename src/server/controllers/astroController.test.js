const Astro = require("../../database/models/Astro");
const { mockAstros } = require("../../mocks/astros");
const { getAstros } = require("./astroController");

describe("Given a getAstros function", () => {
  describe("When it's invoked", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Astro.find = jest.fn().mockResolvedValue(mockAstros);

    test("Then it should call the response status method with 200", async () => {
      const expectedStatus = 200;

      await getAstros(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with the list of AstroParts", async () => {
      await getAstros(null, res);

      expect(res.json).toHaveBeenCalledWith(mockAstros);
    });
  });
});
