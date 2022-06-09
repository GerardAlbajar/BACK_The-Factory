const { mockAstros, mockAstro } = require("../../mocks/astros");
const { getAstros, deleteAstro, getAstro } = require("./astroController");

jest.mock("../../database/models/Astro", () => ({
  ...jest.requireActual("../../database/models/Astro"),
  find: jest.fn().mockResolvedValue(mockAstros),
  findByIdAndDelete: jest.fn().mockResolvedValue(mockAstro),
  findById: jest.fn().mockResolvedValue(mockAstro),
}));

describe("Given a getAstros function", () => {
  describe("When it's invoked", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    test("Then it should call the response status method with 200", async () => {
      const expectedStatus = 200;

      await getAstros(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with the list of AstroParts", () => {
      getAstros(null, res);

      expect(res.json).toHaveBeenCalledWith(mockAstros);
    });
  });
});

describe("Given a deleteAstro function", () => {
  describe("When it's invoked with a response and a with id 1", () => {
    const req = {
      params: {
        idAstro: 1,
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response status method with 200", async () => {
      const expectedStatus = 200;

      await deleteAstro(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with 'Your Astro has been deleted (Astro number 1)' message", () => {
      deleteAstro(req, res);
      const expectedMessage = {
        msg: "Your Astro has been deleted (Astro number 1)",
      };

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});

describe("Given a getAstro function", () => {
  const req = {
    params: { idAstro: "612736SJDGHA" },
  };
  describe("When it's invoked", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response status method with 200", async () => {
      const expectedStatus = 200;

      await getAstro(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with the list of AstroParts", () => {
      getAstro(req, res);

      expect(res.json).toHaveBeenCalledWith(mockAstro);
    });
  });
});
