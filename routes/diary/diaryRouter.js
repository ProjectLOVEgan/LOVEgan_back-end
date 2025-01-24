import express from 'express';
import { registerFood, showFood, deleteFood } from '../../controller/diary/diary.js';

const diaryRouter = express.Router();

diaryRouter.post("/foodInput", (req, res, next) => {
    console.log("요청 도달 ")
    next();
}, registerFood);
diaryRouter.get("/foodInfo", showFood);
diaryRouter.delete("/deleteFood", deleteFood)

export default diaryRouter;