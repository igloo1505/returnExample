const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const phoneValidation = phone => {
  let phoneAsString = "";
  for (var i = 0; i < phone.length; i++) {
    if (numberArray.includes(parseInt(phone[i]))) {
      //   array.push(parseInt(phone[i]));
      phoneAsString += parseInt(phone[i]);
    }
  }
  //   At this point the phone number is filtered out for only numbers
  if (phoneAsString.length === 10) {
    console.log("meets requirement with area code");
    return phoneAsString;
  } else if (phoneAsString.length === 7) {
    console.log("length is 7 so assuming area code is 414");
    phoneAsString = "414" + phoneAsString;
    return phoneAsString;
  } else {
    alert("please enter a valid phone number");
  }
};
