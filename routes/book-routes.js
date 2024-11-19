const express=require("express");
const {getSingleBookById,getAllbooks,addNewBook,updateBook,deleteBook}=require("../controllers/book-controller");
const router =express.Router();

router.get("/get",getAllbooks);
router.get("/get/:id",getSingleBookById);
router.post("/add",addNewBook);
router.put("/update/:id",updateBook);
router.delete("/delete/:id",deleteBook);
 module.exports=router;