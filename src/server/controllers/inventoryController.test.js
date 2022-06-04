const User = require("../../database/models/User");
const { getInventory } = require("./inventoryController");

const next = jest.fn();

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
