module.exports = {
  gift: [
    "<img src='<%= cover %>'>",
    "<h3><%= giftName %></h3>",
    "<h3><%= giftCost %></h3>",
    "<h4><%= giftId %></h4>",
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
  giftForm: [
    "<form class='register' action='index.html' method='post'>",
      "<h2 class='giftName'>Input Gift Name: </h2>",
      "<input type='text' name='createUser' value='' placeholder='Enter the Gift's Name'>",
      "<h2 class='giftPrice'>Input Gift Price: </h2>",
      "<input type='text' name='createPass' value='' placeholder='Enter the Gift's Price'>",
      "<button type='submit' name='addGift' class='addGift'>Add Gift</button>",
    "</form>"
  ].join(''),
  recipient: [
    "<h3 class='recName'><%= name %></h3>",
    "<span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>",
    "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>",
    "<%= typeof(budget)!== 'undefined' ?  '<p>Budget: <span class = 'recBudget'><%= budget %></span></p>' : '' %>",
    "<ul class = 'gifts'></ul>"
  ].join(""),
}
