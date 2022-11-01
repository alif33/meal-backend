const router = require('express').Router();
const { 
   getCoupons,
   addCoupon,
   updateCoupon
 } = require("../controller/couponController");

const { 
   getDeliveryZones,
   addDeliveryZone,
   updateDeliveryZone
 } = require("../controller/deliveryZoneController");


router.get('/resturant/coupons', getCoupons);
router.post('/resturant/coupon', addCoupon);
router.put('/resturant/coupon', updateCoupon);

router.get('/resturant/delivery-zones', getDeliveryZones);
router.post('/resturant/delivery-zone', addDeliveryZone);
router.put('/resturant/delivery-zone', updateDeliveryZone);

module.exports = router;