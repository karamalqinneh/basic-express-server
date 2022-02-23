"use strict";

const server = require("../src/server");

const supertest = require("supertest");

const request = supertest(server.app);

describe("testing API server", () => {
  it("404 on a bad route", async () => {
    const response = await request.get("/brokeLink");
    expect(response.status).toEqual(404);
  });
  it("404 on a bad method", async () => {
    const response = await request.post("/person");
    expect(response.status).toEqual(404);
  });
});
