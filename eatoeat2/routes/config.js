var request = require('request');

exports.notificationObj = {

    notification_id_user_order_placed : "0",
    notification_id_user_order_confirmed : "1",
    notification_id_user_order_picked : "2",
    notification_id_user_order_delivered : "3",
    notification_id_user_order_cancelled : "5",
    notification_id_cook_order_received : "4",
    notification_id_cook_order_cancelled : "6",
    notification_id_user_order_readyfordel : "7",

};

exports.notificationMessageContent = {

    notification_message_for_user_order_placed : " Your Order Successfully placed, pending for cook confirmation",
    notification_message_for_user_order_confirmed : " Your Order has been confirmed",
    notification_message_for_user_order_picked : "Your Order has been Picked ",
    notification_message_for_user_order_delivered : "Bon Apetite, Your Order Successfully Delivered.",
    notification_message_for_user_order_cancelled : "Bon Apetite, Your Order Successfully Delivered.",
     notification_message_for_cook_order_received : "Congraturlations, You Received a New Order.",
     notification_message_for_cook_order_cancelled : "Unfortunately, Your Order has been cancelled"
};


exports.notificationTitleContent = {

    notification_title_for_user_order_placed : "Order Placed",
    notification_title_for_user_order_confirmed : "Order Confirmed",
    notification_title_for_user_order_picked:"Order Picked",
     notification_title_for_user_order_delivered:"Order Delivered",
      notification_title_for_user_order_cancelled:"Order Cancelled",
        notification_title_for_user_order_readyfordel:"Order Ready For Delivery",
      notification_title_for_cook_order_received:"Order Received",
        notification_title_for_cook_order_cancelled:"Order Cancelled",
};


