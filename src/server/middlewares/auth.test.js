const { auth } = require("./auth");

const mockId = { name: "test", username: "test", id: 1 };

jest.mock("jsonwebtoken", () => ({
  ...jest.requireActual("jsonwebtoken"),
  verify: () => mockId,
}));

describe("Given the auth function", () => {
  describe("When it receives a request with a correct token", () => {
    const req = {
      headers: {
        authorization: "Bearer ",
      },
    };

    test("Then the 'next' function should be invoked", () => {
      const next = jest.fn();

      auth(req, null, next);

      expect(next).toHaveBeenCalled();
    });

    test("Then it should add to the received request the user id by the token", () => {
      const next = () => {};

      auth(req, null, next);

      expect(req).toHaveProperty("userId", mockId);
    });
  });

  describe("When it receives a request with an invalid authorization (no Bearer) and next function", () => {
    test("Then it should call next with an error 'Invalid token'", () => {
      const req = {
        headers: {
          authorization: "incorrectToken",
        },
      };
      const customErrorMessage = new Error("Invalid Token");
      const next = jest.fn();

      auth(req, null, next);

      expect(next).toHaveBeenCalledWith(customErrorMessage);
    });
  });
});
