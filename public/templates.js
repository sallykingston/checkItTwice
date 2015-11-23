module.exports = {
  gift: [
    "<h3 id = 'giftName'><%= name %></h3>",
    "<h3 id = 'giftCost'><%= cost %></h3>",
    "<span class='glyphicon glyphicon-pencil' aria-hidden='false'></span>",
    "<span class='glyphicon glyphicon-trash' aria-hidden='false'></span>",
  ].join(''),
  header: [
      "<h1>Check It Twice</h1>"
  ].join(''),
  footer: [
      "<h1>Don't be Nawwwty</h1>"
  ].join(''),
  regiForm: [
    "<form class='register' action='login' method='post'>",
      "<h2 class='regUser'>Create Username: </h2>",
      "<input type='text' name='createUser' value='' placeholder='Enter desired username'>",
      "<h2 class='regPass'>Create Password: </h2>",
      "<input type='text' name='createPass' value='' placeholder='Enter desired password'>",
      "<button type='submit' name='register' class='register'>Confirm</button>",
    "</form>",
    "<button type='button' name='login' class='login'>Login</button>"
  ].join(''),
  loginForm: [
    "<form class='login'>",
      "<input type='text' name='username' value='' placeholder='Enter Username'>",
      "<input type='text' name='password' value='' placeholder='Enter Password'>",
      "<button type='submit' name='login' id='loginBtn'>Login</button>",
    "</form>",
  ].join(''),
  giftForm: [
    "<form class='giftPost'>",
      "<h2 class='giftName'>Input Gift Name: </h2>",
      "<input type='text' name='createGift' value='' placeholder='Enter the Gifts Name'>",
      "<h2 class='giftPrice'>Input Gift Price: </h2>",
      "<input type='text' name='createGiftPrice' value='' placeholder='Enter the Gifts Price'>",
      "<button type='submit' name='addGift' id='addGift'>Add Gift</button>",
    "</form>",
  ].join(''),
  recipient: [
    "<h3 class='recName'><%= name %></h3>",
    "<span class='glyphicon glyphicon-pencil' aria-hidden='false'></span>",
    "<span class='glyphicon glyphicon-trash' aria-hidden='false'></span>",
    "<span class='glyphicon glyphicon-gift' aria-hidden='false'></span>",
    "<p>Budget: <span class = 'recBudget'><%= budget %></span></p>",
    "<ul class = 'gifts'></ul>"
  ].join(""),
  recipientForm: [
    "<form class='addRecipient' >",
      "<label for='recipientName'>Recipient Name</label>",
      "<input type='text' name='recipientName' value='' placeholder='Enter the Recipient's Name'>",
      "<label for='recipientBudget'>Recipient Budget</label>",
      "<input type='text' name='recipientBudget' value='' placeholder='Enter the Recipient's Budget'>",
      "<button type='submit' id='addRecipientBtn' class='addRecipient'>Add Recipient</button>",
    "</form>"
  ].join(''),
}
