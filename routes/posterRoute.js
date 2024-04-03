import {Router} from "express"
import{create,getAll,getById,updateById,deleteById} from "../controller/posterController.js"


const router = Router()


router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateById);
router.delete('/:id', deleteById);


export default router;