enum OrderStatus {
  "PENDDING",
  "SHIPPED",
  "DELIVERD" = 776, // 776 is the value of the enum
  "CANCELLED",
}

enum ArrowKeys {
  UP = "UP", // UP is the value of the enum
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

let myStatus = OrderStatus.DELIVERD;

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERD;
}

console.log(isDelivered(myStatus));

console.log(OrderStatus.PENDDING);

export {};
