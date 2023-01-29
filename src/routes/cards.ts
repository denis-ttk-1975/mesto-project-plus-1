import { Router } from "express";
import {
  createCard,
  getCards,
  deleteCard,
  likeCard,
  dislikeCard,
} from "../controllers/cards";

const router = Router(); // создали роутер

router.post("/", createCard);
router.get("/", getCards);
router.delete("/:cardId", deleteCard);
router.put("/:cardId/likes", likeCard);
router.delete("/:cardId/likes", dislikeCard);

export default router;
