import { Router } from "express"
import { addToWishlist,listWishlistByUser, getById,getAll,removeWishlistQuantity } from "../controller/wishlistController.js"

const router = Router()

router.post('/addToWishlist', addToWishlist);
router.get('/listWishlist/:id', listWishlistByUser);
router.get('/viewall', getAll);
router.get('/remove-wishlist/:userId/:productId', removeWishlistQuantity);



router.get('/:id', getById);



export default router;