import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController";
import { createTask, getTasks, updateTaskStatus } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);

export default router;