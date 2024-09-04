const express = require("express");
const {
  signup,
  signin,
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
  googleAuth,
} = require("../controllers/userController");
const { Authentication } = require("../Athentication/verification");
const {
  addVideo,
  getVideo,
  addView,
  trend,
  random,
  sub,
  getByTag,
  search,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");
const {
  addComment,
  deleteComment,
  getComments,
} = require("../controllers/commentController");
const router = express.Router();

//user routs
router.post("/signup", signup);
router.post("/signin", signin);
router.put("/:id", Authentication, update);
router.delete("/:id", Authentication, deleteUser);
router.get("/find/:id", getUser);
router.put("/sub/:id", Authentication, subscribe);
router.put("/unsub/:id", Authentication, unsubscribe);
router.put("/like/:videoId", Authentication, like);
router.put("/dislike/:videoId", Authentication, dislike);
router.post("/googleAuth", googleAuth);

//video routs
router.post("/", Authentication, addVideo);
router.put("/:id", Authentication, updateVideo);
router.delete("/:id", Authentication, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", Authentication, sub);
router.get("/tags", getByTag);
router.get("/search", search);

//comment routs
router.post("/", Authentication, addComment);
router.delete("/:id", Authentication, deleteComment);
router.get("/:videoId", getComments);

module.exports = router;
