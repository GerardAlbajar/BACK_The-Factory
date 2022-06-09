const { mockAstroParts, mockAstroPart } = require("../../mocks/astroParts");
const {
  getAstroParts,
  deleteAstroPart,
  getAstroPart,
} = require("./astroPartController");

jest.mock("../../database/models/AstroPart", () => ({
  ...jest.requireActual("../../database/models/AstroPart"),
  find: jest.fn().mockResolvedValue(mockAstroParts),
  findByIdAndDelete: jest.fn().mockResolvedValue(mockAstroPart),
  findById: jest.fn().mockResolvedValue(mockAstroPart),
}));

describe("Given a getAstroParts function", () => {
  describe("When it's invoked", () => {
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

describe("Given a deleteAstroPart function", () => {
  describe("When it's invoked with a response and an Astro Part with id 1", () => {
    const req = {
      params: {
        idAstroPart: 1,
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response status method with 200", async () => {
      const expectedStatus = 200;

      await deleteAstroPart(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with 'Your Astro Part has been deleted (Astro Part number 1)' message", () => {
      deleteAstroPart(req, res);
      const expectedMessage = {
        msg: "Your Astro Part has been deleted (Astro Part number 1)",
      };

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});

describe("Given a getAstro function", () => {
  const req = {
    params: { idAstroPart: "812736SJDGHA" },
  };
  describe("When it's invoked", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the response status method with 200", async () => {
      const expectedStatus = 200;

      await getAstroPart(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with the list of AstroParts", () => {
      getAstroPart(req, res);

      expect(res.json).toHaveBeenCalledWith(mockAstroPart);
    });
  });
});
