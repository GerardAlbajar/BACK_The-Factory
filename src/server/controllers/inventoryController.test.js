const Astro = require("../../database/models/Astro");
const User = require("../../database/models/User");
const {
  getInventory,
  deleteInventoryItem,
  addInventoryItem,
  createInventoryItem,
  editMutantAstro,
} = require("./inventoryController");

const next = jest.fn();

const inventory = {
  inventory: {
    perfect: [],
    part: [
      {
        idRender: "#912736SJDGHB",
        name: "VUE NAUT",
        type: "Naut",
        framework: "Vue",
        assembled: false,
        image:
          "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT.png?alt=media&token=4b03982b-30c6-47e7-aa2d-0600ee3972e8",
        partimage:
          "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT_2.png?alt=media&token=cd6e0919-c30d-497d-8c20-8bcf55e9cfc6",
        _id: "629e513c85d60f0e2f74ec41",
      },
      {
        idRender: "#912736SJDGHC",
        name: "REACT NAUT",
        type: "Naut",
        framework: "React",
        assembled: false,
        image:
          "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT.png?alt=media&token=4b03982b-30c6-47e7-aa2d-0600ee3972e8",
        partimage:
          "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT_2.png?alt=media&token=cd6e0919-c30d-497d-8c20-8bcf55e9cfc6",
        _id: "629e513c85d60f0e2f74ec42",
      },
    ],
  },
};

const updated = {
  inventory: 2,
};

const createAndUpdate = {
  parts: {
    astro: {
      id: "62974453ec4b32f200362334",
      image:
        "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ASTRO_2.png?alt=media&token=0f01579c-7fe2-4c36-9f37-da72c93b2800",
    },
    naut: {
      id: "62974453ec4b32f200362335",
      image:
        "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
    },
    rocket: {
      id: "62974453ec4b32f200362336",
      image:
        "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937",
    },
  },
  idRender: "#612736SJD98273",
  name: "NICE ONE",
  type: "Perfect Astro",
  flighthistory: false,
  stickers: 1,
  framework: "Mutant Astro",
  assembled: false,
};

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

    test("Then it should call the respose's json method with the user inventory", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      User.findById = jest.fn().mockReturnThis();
      User.populate = jest.fn().mockResolvedValue({ inventory });

      await getInventory(req, res);

      expect(res.json).toHaveBeenCalledWith(inventory);
    });
  });
});

describe("Given a deleteInventoryItem function", () => {
  const req = {
    params: {
      idUser: "629b202506d1fe0a1259ffe7",
      inventoryKey: "part",
      idItemToRemove: "629e513c85d60f0e2f74ec41",
    },
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When it receives a request with an idUser, inventoryKey and idItemToRemove", () => {
    test("Then it should call the response json method with 200 status", async () => {
      User.findById = jest.fn().mockReturnThis(inventory);
      User.findByIdAndUpdate = jest.fn().mockReturnThis();
      User.populate = jest
        .fn()
        .mockImplementationOnce(() => inventory)
        .mockImplementationOnce(() => updated);

      await deleteInventoryItem(req, res);

      expect(res.json).toHaveBeenCalledWith(updated.inventory);
    });
  });
});

describe("Given a addInventoryItem function", () => {
  const req = {
    params: {
      idUser: "629b202506d1fe0a1259ffe7",
      inventoryKey: "part",
      idItemToAdd: "629e513c85d60f0e2f74ec41",
    },
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When it receives a request with an idUser, inventoryKey and idItemToAdd", () => {
    test("Then it should call the response json method with 200 status", async () => {
      User.findById = jest.fn().mockResolvedValue(inventory);
      User.findByIdAndUpdate = jest.fn().mockReturnThis();
      User.populate = jest.fn().mockImplementationOnce(() => updated);

      await addInventoryItem(req, res);

      expect(res.json).toHaveBeenCalledWith(updated.inventory);
    });
  });
});

describe("Given a createInventoryItem function", () => {
  const req = {
    params: {
      idUser: "629b202506d1fe0a1259ffe7",
    },
    body: {
      parts: {
        astro: {
          id: "62974453ec4b32f200362334",
          image:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ASTRO_2.png?alt=media&token=0f01579c-7fe2-4c36-9f37-da72c93b2800",
        },
        naut: {
          id: "62974453ec4b32f200362335",
          image:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
        },
        rocket: {
          id: "62974453ec4b32f200362336",
          image:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937",
        },
      },
      idRender: "#612736SJD98273",
      name: "NICE ONE",
      type: "Perfect Astro",
      flighthistory: false,
      stickers: 1,
      framework: "Mutant Astro",
      assembled: false,
    },
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When it receives a request with an idUser, inventoryKey and idItemToAdd", () => {
    test("Then it should call the response json method with 200 status", async () => {
      User.findById = jest.fn().mockResolvedValue(inventory);
      Astro.create = jest.fn().mockResolvedValue(createAndUpdate);
      User.findByIdAndUpdate = jest.fn().mockReturnThis();
      User.populate = jest.fn().mockImplementationOnce(() => updated);

      await createInventoryItem(req, res);

      expect(res.json).toHaveBeenCalledWith(updated.inventory);
    });
  });
});

describe("Given a editMutantAstro function", () => {
  const req = {
    params: {
      idUser: "629b202506d1fe0a1259ffe7",
    },
    idItemToEdit: "629b202506d1fe0a1259ffe7",
    body: {
      parts: {
        astro: {
          id: "62974453ec4b32f200362334",
          image:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ASTRO_2.png?alt=media&token=0f01579c-7fe2-4c36-9f37-da72c93b2800",
        },
        naut: {
          id: "62974453ec4b32f200362335",
          image:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
        },
        rocket: {
          id: "62974453ec4b32f200362336",
          image:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937",
        },
      },
      idRender: "#612736SJD98273",
      name: "NICE ONE EDITED",
      type: "Perfect Astro",
      flighthistory: false,
      stickers: 1,
      framework: "Mutant Astro",
      assembled: false,
    },
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When it receives a request with an idUser, inventoryKey and idItemToAdd", () => {
    test("Then it should call the response json method with 200 status", async () => {
      User.findById = jest.fn().mockResolvedValue(inventory);
      Astro.findByIdAndUpdate = jest.fn().mockResolvedValue(createAndUpdate);
      User.findByIdAndUpdate = jest.fn().mockReturnThis();
      User.populate = jest.fn().mockImplementationOnce(() => updated);

      await editMutantAstro(req, res);

      expect(res.json).toHaveBeenCalledWith(updated.inventory);
    });
  });
});
