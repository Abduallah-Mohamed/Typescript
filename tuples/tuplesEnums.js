"use strict";
exports.__esModule = true;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDDING"] = 0] = "PENDDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERD"] = 776] = "DELIVERD";
    OrderStatus[OrderStatus["CANCELLED"] = 777] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "UP";
    ArrowKeys["DOWN"] = "DOWN";
    ArrowKeys["LEFT"] = "LEFT";
    ArrowKeys["RIGHT"] = "RIGHT";
})(ArrowKeys || (ArrowKeys = {}));
var myStatus = OrderStatus.DELIVERD;
function isDelivered(status) {
    return status === OrderStatus.DELIVERD;
}
console.log(isDelivered(myStatus));
console.log(OrderStatus.PENDDING);
