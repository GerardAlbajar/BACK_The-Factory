const { loginUser } = require("./userController");

const token = "030d715845518298a37ac8fa80f966eb7349d5e2";
jest.mock("../../database/models/User", () => ({
  findOne: jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(true),
}));

jest.mock("bcrypt", () => ({
  ...jest.requireActual("bcrypt"),
  compare: () =>
    jest.fn().mockResolvedValueOnce(true).mockRejectedValueOnce(false),
}));

jest.mock("jsonwebtoken", () => ({
  ...jest.requireActual("jsonwebtoken"),
  sign: () => token,
}));

describe("Given the loginUser controller", () => {
  describe("When it's invoked with a request object with the correct username and password", () => {
    test("Then it should call the response method with status 200, and a body containing a token will be received", async () => {
      const req = { body: { username: "hello", password: "hello" } };
      const expectedStatus = 200;

      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      await loginUser(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({ token });
    });
  });
});
