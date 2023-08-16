import Tour from '../models/Tour.js'

export const createTour =async (req,res)=>{
    const newTour = new Tour(req.body)

    try{
        const savedTour = await newTour.save()

        res.status(200).json({success:true,message:'Successfully created',
    data:savedTour})
    } catch(err){
        res.status(500).json({success:false,message:'fail to create'
    })
    }
};

export const updateTour = async (req, res)=>{

        const id =req.params.id

    try{
        const updateTour =await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:"successfully updated",
            data:updateTour,
        });

    } catch(err){
        res.status(500).json({
            success:false,
            message:"fail to update",
            
        });
    }
};

export const deleteTour = async (req, res)=>{
    const id =req.params.id

    try{
       await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"successfully delete",
            
        });

    } catch(err){
        res.status(500).json({
            success:false,
            message:"fail to delete",
            
        });
    }
};

export const getSingleTour = async (req, res)=>{
    const id =req.params.id

    try{
       const tour = await Tour.findById(id);

        res.status(200).json({
            success:true,
            message:"successfully",
            data:tour
            
        });

    } catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
            
        });
    }
};

export const getAllTour = async (req, res)=>{

    const page =parseInt(req.query.page);
    console.log(page);
    try{

        const tours = await Tour.find({})
        .skip(page * 9)
        .limit(9);

        res.status(200).json({success:true,
            count:tours.length,
            message:"successfully",
            data:tours})

    } catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
            
        });
    }
};

export const getFeaturedTour = async (req, res)=>{

    const page =parseInt(req.query.page);
    console.log(page);
    try{

        const tours = await Tour.find({offer:true}).limit(6);

        res.status(200).json({success:true,    
            message:"successfully",
            data:tours})

    } catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
            
        });
    }
};

export const getTourCount = async (req,res) =>{
    try {
        const tourCount =await Tour.estimatedDocumentCount();
        res.status(200).json({success:true,data:tourCount});
    } catch (err) {
        res.status(500).json({success:false,message:"failed to fetch"});
    }
};