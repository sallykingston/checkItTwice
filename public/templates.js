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
  recipient: [
    "<h3 class='recName'><%= name %></h3>",
    "<span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>",
    "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>",
    "<%= typeof(budget)!== 'undefined' ?  '<p>Budget: <span class = 'recBudget'><%= budget %></span></p>' : '' %>",
    "<ul class = 'gifts'></ul>"
  ].join(""),
}
