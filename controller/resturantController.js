const Resturant = require("../models/Resturant");

exports.getResturants = async(req, res) => {
    const resturants = await Resturant.find({});
    res.status(200).json(resturants.reverse());
};

exports.addResturant = async(req, res) => {
    const {
        name,
        shopLogo,
        webHeaderImage,
        mobileHeaderImage
      } = req.body;
  
        const _resturant = new Resturant({
         name,
         shopLogo,
         webHeaderImage,
         mobileHeaderImage
        });
        if (await _resturant.save()) {
          res.send({
            success: true,
            message: "Resturant added successfully",
          });
        }
};

exports.updateResturant = async(req, res) => {
    const { _id } = req.query;
    const {
      _address,
      city,
      state,
      zipCode,
      country,
      lat,
      long,
  
      ownerName,
      ownerPhone,
      ownerEmail,
      secCName,
      secCPhone,
      secCEmail,
      resturantPhone,
  
      gbmDomain,
      gbmWebsite,
      gbmStatus,
      gbmRole,
      gbmEmail,
      gbmOwner,
      mealDomain,
      password,
  
      accountManager,
      salesRep,
      menuRep,
  
      paymentType,
      emailStatement_,
      paymentFrequency,
      flatFee,
      trialEndDate,
      processingFee,
      contactMethod,
  
      minPickupOrder,
      minDeliveryOrder,
      pickupEstimate,
      deliveryEstimate,
      onlineDiscount,
      delivery,
      scheduledOrders,
      ordersToday,
  
      aboutUs
    } = req.body;
  
    const updates = {
      _address,
      city,
      state,
      zipCode,
      country,
      lat,
      long,
  
      ownerName,
      ownerPhone,
      ownerEmail,
      secCName,
      secCPhone,
      secCEmail,
      resturantPhone,
  
      gbmDomain,
      gbmWebsite,
      gbmStatus,
      gbmRole,
      gbmEmail,
      gbmOwner,
      mealDomain,
      password,
  
      accountManager,
      salesRep,
      menuRep,
  
      paymentType,
      emailStatement_,
      paymentFrequency,
      flatFee,
      trialEndDate,
      processingFee,
      contactMethod,
  
      minPickupOrder,
      minDeliveryOrder,
      pickupEstimate,
      deliveryEstimate,
      onlineDiscount,
      delivery,
      scheduledOrders,
      ordersToday,
  
      aboutUs
    };

  
    Resturant.findOneAndUpdate(
      { _id },
      { $set: updates },
      { returnOriginal: false },
      (err, resturant) => {
        if (err) {
          return res.status(400).json({
            err,
            message: "Something went wrong",
          });
        }
  
        if (resturant) {
          return res.status(201).json({
            success: true,
            resturant,
          });
        }
      }
    );
};





// exports.removeAuthor = async(req, res) => {
//     const { _id }= req.query;
//     if(_id){
//         Author
//         .find({ _id })
//         .deleteOne(()=>{
//             res.send({
//                 success: true,
//                 message: 'Author deleted successfully'
//             });
//         });
//     }
// };
