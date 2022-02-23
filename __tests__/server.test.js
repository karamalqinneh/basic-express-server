"use strict";

const server = require("../src/server");

const supertest = require("supertest");

const request = supertest(server.app);

describe("testing API server", () => {
  it("404 on a bad route", async () => {
    const response = await request.get("/brokenLink");
    expect(response.status).toEqual(404);
  });
});
