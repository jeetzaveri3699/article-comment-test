import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe, it } from "node:test";

import app from "../src/app";

chai.use(chaiHttp);

describe("Comments route", () => {
  describe("GET /api/comments/article/:id", () => {
    it("should return 200 OK and a list of comments with given article ID", async () => {
      const response = await chai.request(app).get("/api/comments/article/1");

      expect(response).to.have.status(200);
    });
  });

  describe("POST /api/comments", () => {
    it("should return 201 CREATED and a comment", async () => {
      const response = await chai.request(app).post("/api/comments");

      expect(response).to.have.status(201);
    });
  });
});
