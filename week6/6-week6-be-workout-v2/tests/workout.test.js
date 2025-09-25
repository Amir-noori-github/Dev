const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("Workout API", () => {
  describe("when there are initially some workouts saved", () => {
    beforeEach(async () => {
      await Workout.deleteMany({});
      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(workouts[0]);

      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(workouts[1]);
    });

    it("should return workouts as JSON", async () => {
      await api
        .get("/api/workouts")
        .set("Authorization", "bearer " + token)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });

    it("should allow adding a new workout successfully", async () => {
      const newWorkout = { title: "testworkout", reps: 10, load: 100 };

      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);
    });
  });

  describe("reading a single workout by ID", () => {
    it("should return the correct workout when given a valid ID", async () => {
      const newWorkout = { title: "Pushups", reps: 20, load: 0 };
      const created = await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);

      const workoutId = created.body._id;

      const response = await api
        .get(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      expect(response.body.title).toBe(newWorkout.title);
      expect(response.body.reps).toBe(newWorkout.reps);
      expect(response.body.load).toBe(newWorkout.load);
    });
  });

  describe("updating a workout", () => {
    it("should update fields of an existing workout", async () => {
      const newWorkout = { title: "Squats", reps: 15, load: 50 };
      const created = await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);

      const workoutId = created.body._id;

      const updatedWorkout = { title: "Heavy Squats", reps: 20, load: 80 };
      const response = await api
        .put(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .send(updatedWorkout)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      expect(response.body.title).toBe(updatedWorkout.title);
      expect(response.body.reps).toBe(updatedWorkout.reps);
      expect(response.body.load).toBe(updatedWorkout.load);
    });
  });

  describe("deleting a workout", () => {
    it("should remove a workout and return 204", async () => {
      const newWorkout = { title: "Burpees", reps: 30, load: 0 };
      const created = await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);

      const workoutId = created.body._id;

      await api
        .delete(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .expect(204);

      await api
        .get(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .expect(404);
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});
