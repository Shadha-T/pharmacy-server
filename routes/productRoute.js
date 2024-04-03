import express from "express"
import {Router} from "express"
import {register,login} from "../controller/userController.js"
import{create,getAll,getById,updateById,deleteById,getListById, searchProduct} from "../controller/productController.js"

const router = Router()

router.post('/', create);
router.get('/', getAll);
router.put('/:id', updateById);
router.delete('/:id', deleteById);
router.get('/search', searchProduct);

router.get('/:id', getById);
router.get('/getdetailsbyid/:id', getListById);




export default router;