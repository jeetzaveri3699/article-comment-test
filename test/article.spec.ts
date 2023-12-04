import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe, it } from "node:test";

import app from "../src/app";

chai.use(chaiHttp);

describe("Articles route", () => {
  describe("GET /api/articles", () => {
    it("should return 200 OK and a list of articles", async () => {
      const response = await chai.request(app).get("/api/articles");

      expect(response.status).to.equal(200);
      // expect(response.body.status).to.equal(200);
    });
  });

  describe("GET /api/articles/:id", () => {
    it("should return 200 OK and a article with given ID", async () => {
      const response = await chai.request(app).get("/api/articles/1");

      expect(response.status).to.equal(200);
      // expect(response.body.status).to.equal(200);
    });
  });

  describe("POST /api/articles", () => {
    it("should return 200 OK and a article with given ID", async () => {
      const response = await chai.request(app).post("/api/articles");

      expect(response.status).to.have.status(200);
      expect(response.body.status).to.equal(200);
    });
  });
});
