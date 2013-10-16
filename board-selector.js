var BoardSelector = function(selector) {
  this.$element = $(selector);
  this.boards = [];
  this.bindEvents();
};
BoardSelector.prototype.bindEvents = function() {
  var self = this;
  this.$element.find("#new_board").on('click', function() { self.createBoard() });
  this.$element.find("#load_samples").on('click', function() { self.loadSamples() });
  this.$element.find("#board_list").on('click', 'li', function() { self.selectBoard(this); });
};
BoardSelector.prototype.createBoard = function() {
  // append the board id to the board list in the board selector
  var board = new Board("board-"+this.boards.length);
  this.boards.push(board);
  this.selectBoard(this.addBoardToList());
  this.$element.after(board.$element);
};
BoardSelector.prototype.addBoardToList = function (){
  var link_id = "board-" + this.boards.length
  var $listItem = $("#list-item-template").clone().attr("id", link_id).text(link_id);
  $("#board_list").append($listItem);
  return $listItem;
};
BoardSelector.prototype.loadSamples = function() {
  basicSeeding();
};
BoardSelector.prototype.selectBoard = function(listItem) {
  // select the board with the given id
  $("#board_list li").removeClass('active');
  $(listItem).addClass('active');
  var id = $(listItem).attr("id");
  var boardIndex = parseInt(id.replace("board-", "")) - 1;
  for (var i in this.boards) {
    this.boards[i].$element.hide();
  }
  this.boards[boardIndex].$element.show();
};

$(function() {
  new BoardSelector("#board_selector");
});
