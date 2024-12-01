/**
 * ?Problem 2: Write a function called sendNotification(email) which will take a string parameter of any email and return the alert notification;
 * !Condition: 1) Input should be string, 2) Input should be an email;
 */

function sendNotification(email) {
  let user_name = "";
  let domain_name = "";
  let notification_message = "";

  if (typeof email === "string" && email.charAt(email.indexOf("@")) === "@") {
    user_name = email.split("@")[0];
    domain_name = email.split("@")[1];
    notification_message = `${user_name} sent you an email from ${domain_name}`;
    return notification_message;
  } else {
    return "Invalid Email";
  }
}

const notification = sendNotification("nayeem.mh85@yahoo.com");
console.log("Notification Message: ", notification);
