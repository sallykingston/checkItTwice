module.exports = {
  recipient = [
    "<h3 class='recName'><%= name %></h3>",
    "<span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>",
    "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>",
    "<%= typeof(budget)!== 'undefined' ?  '<p>Budget: <span class = 'recBudget'><%= budget %></span></p>' : '' %>",
    "<ul class = 'gifts'></ul>"
  ].join(""),
}
