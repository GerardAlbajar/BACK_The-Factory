const User = require("../../database/models/User");
// const { mockAstroParts, mockAstroPart } = require("../../mocks/astroParts");
const {
  getInventory,
  // deleteInventoryAstroPart,
  // deleteInventoryAstro,
} = require("./inventoryController");

const next = jest.fn();

// jest.mock("../../database/models/AstroPart", () => ({
//   ...jest.requireActual("../../database/models/AstroPart"),
//   find: jest.fn().mockResolvedValue(mockAstroParts),
//   findByIdAndDelete: jest.fn().mockResolvedValue(mockAstroPart),
// }));

describe("Given a getInventory function", () => {
  const req = {
    params: { idUser: "629b202506d1fe0a1259ffe7" },
  };
  describe("When it receives a request with an id of an user that exist", () => {
    test("Then it should call the next json method with 'We couldn't find any match with this username' message", async () => {
      const error = new Error("We couldn't find any match with this username");

      User.findById = jest.fn().mockResolvedValue(null);

      await getInventory(req, null, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});

// describe("Given a deleteInventoryAstroPart function", () => {
//   describe("When it's invoked with a response and an Astro Part with id 1", () => {
//     const req = {
//       params: {
//         idInventoryAstroPart: 1,
//       },
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     test("Then it should call the response status method with 200", async () => {
//       const expectedStatus = 200;

//       await deleteInventoryAstroPart(req, res);

//       expect(res.status).toHaveBeenCalledWith(expectedStatus);
//     });

//     test("Then it should call the response json method with 'Your Astro Part has been deleted (Astro Part number 1)' message", () => {
//       deleteInventoryAstroPart(req, res);
//       const expectedMessage = {
//         msg: "Your Astro Part has been deleted (Astro Part number 1)",
//       };

//       expect(res.json).toHaveBeenCalledWith(expectedMessage);
//     });
//   });
// });

// describe("Given a deleteInventoryAstro function", () => {
//   describe("When it's invoked with a response and an Astro Part with id 1", () => {
//     const req = {
//       params: {
//         idInventoryAstro: 1,
//       },
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     test("Then it should call the response status method with 200", async () => {
//       const expectedStatus = 200;

//       await deleteInventoryAstro(req, res);

//       expect(res.status).toHaveBeenCalledWith(expectedStatus);
//     });

//     test("Then it should call the response json method with 'Your Astro Part has been deleted (Astro Part number 1)' message", () => {
//       deleteInventoryAstro(req, res);
//       const expectedMessage = {
//         msg: "Your Astro Part has been deleted (Astro number 1)",
//       };

//       expect(res.json).toHaveBeenCalledWith(expectedMessage);
//     });
//   });
// });
