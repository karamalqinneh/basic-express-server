"use strict";

const server = require("../src/server");

const supertest = require("supertest");

const request = supertest(server.app);

describe("testing person route", () => {
  it("500 if no name in the query string", async () => {
    const response = await request.get("/person?name=");
    expect(response.status).toEqual(500);
  });
  it("200 if the name is in the query string", async () => {
    const response = await request.get("/person?name=randomString");
    expect(response.status).toEqual(200);
  });
  it("given an name in the query string, the output object is correct", async () => {
    const response = await request.get("/person?name=karam");
    expect(response.body).toEqual({
      name: "karam",
    });
  });
});
