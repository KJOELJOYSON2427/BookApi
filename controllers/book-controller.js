const Book=require("../models/book.js")
const getSingleBookById = async(req,res)=>{
     try{
         const  getCurrentBookID=req.params.id;
         const bookDetailsByID=await Book.findById(getCurrentBookID);
         if(!bookDetailsByID){
            return res.status(404).json({
                success:false,
                message:'Book with the current ID is not found! Please try with a different ID'
            })
         }
         res.status(200).json({
            success:true,
            data:bookDetailsByID,
         })
     }catch(e){
        console.log(e);
        res.status(500).json({
            success:true,
            message:"Something went wrong!please try again"
     })
    }
}
const getAllbooks = async(req,res)=>{
    try{
    const allBooks=await Book.find({});
    if(allBooks?.length>0){
        res.status(201).json({
            success:true,
            message:'List of books fetched successfully',
            data:allBooks
        })
    }else{
        res.status(400).json({
            success:false,
            message:'No books found in collections'
        })
    }
}catch(e){
    console.log(e);
    res.status(500).json({
        success:true,
        message:"Something went wrong!please try again"
    })
}
}
const addNewBook = async (req, res) => {
    try { 
        const newBookFormData = req.body;  // Fetch data from the request body
        const newlyCreatedBook = await Book.create(newBookFormData);  // Create a new book in the database
        
        // Check if the book was created successfully
        if (newlyCreatedBook) {
            res.status(201).json({
                success: true,
                message: 'Book added successfully',
                data: newlyCreatedBook
            });
        }
    } catch (e) {
        console.error(e);  // Log any errors that occur
        res.status(500).json({
            success: false,
            message: 'Failed to add book',
            error: e.message
        });
    }
};

const updateBook = async(req,res)=>{
    try {
        const updatedBookFormData = req.body;
        const getCurrentBookID = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(getCurrentBookID, updatedBookFormData, { new: true });
        if (updatedBook) {
            res.status(200).json({
                success: true,
                message: "Updated successfully",
                data: updatedBook
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Update failed"
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again"
        });
    }
    
}
const deleteBook = async(req,res)=>{
    try{
        const getCurrentBookID=req.params.id;
        const deletedBook=await Book.findByIdAndDelete(getCurrentBookID);
        if(!deletedBook){
              res.status(404).json({
                success:false,
                message:'Book is not found with this ID'
              })
        }else{
            res.status(200).json({
                success:true,
                message:"deleted book",
                data:deletedBook
            })
        }
    }catch(e){
        console.log(e);
    res.status(500).json({
        success:true,
        message:"Something went wrong!please try again"
    })
    }
}
module.exports={
    getAllbooks,
    getSingleBookById,
    addNewBook,
    updateBook,
    deleteBook
};
