module.exports = {
  gift: [
    "<h3><%= giftName %></h3>",
    "<h3><%= giftCost %></h3>",
  ].join(''),
  header: [
      "<h1>Check It Twice</h1>"
  ].join(''),
  footer: [
      "<h1>Don't be Nawwwty</h1>"
  ].join(''),
  regiForm: [
    "<form class='register' action='index.html' method='post'>",
      "<h2 class='regUser'>Create Username: </h2>",
      "<input type='text' name='createUser' value='' placeholder='Enter desired username'>",
      "<h2 class='regPass'>Create Password: </h2>",
      "<input type='text' name='createPass' value='' placeholder='Enter desired password'>",
      "<button type='submit' name='register' class='register'>Confirm</button>",
    "</form>",
    "<button type='button' name='login' class='login'>Login</button>"
  ].join(''),
  loginForm: [
    "<form class='login' action='index.html' method='post'>",
      "<input type='text' name='createUser' value='' placeholder='Enter Username'>",
      "<input type='text' name='createPass' value='' placeholder='Enter Password'>",
      "<button type='submit' name='login' class='login'>Login</button>",
    "</form>",
    "<button type='button' name='register' class='register'>Register</button>"
  ].join(''),
  giftForm: [
    "<form class='giftPost' action='index.html' method='post'>",
      "<h2 class='giftName'>Input Gift Name: </h2>",
      "<input type='text' name='createGift' value='' placeholder='Enter the Gifts Name'>",
      "<h2 class='giftPrice'>Input Gift Price: </h2>",
      "<input type='text' name='createGiftPrice' value='' placeholder='Enter the Gifts Price'>",
      "<button type='submit' name='addGift' class='addGift'>Add Gift</button>",
    "</form>",
    "<button type='button' name='name' class='test'>click</button>"
  ].join(''),
  recipient: [
    "<h3 class='recName'><%= name %></h3>",
    "<span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>",
    "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>",
    "<%= typeof(budget)!== 'undefined' ?  '<p>Budget: <span class = 'recBudget'><%= budget %></span></p>' : '' %>",
    "<ul class = 'gifts'></ul>"
  ].join(""),
  recipientForm: [
    "<form class='reciForm' action='index.html' method='post'>",
      "<h2></h2>",
      "<input type='text' name='reciName' value='' placeholder='Enter Recipient Name'>",
      "<input type='text' name='budget' value='' placeholder='Enter Budget'>",
      "<button type='submit' name='button' class='reciSubmit'>Submit</button>",
    "</form>"
  ].join(''),
}
