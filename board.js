var Board = function(id) {
  this.$element = $("#post-board-template").clone().attr("id", id);
  this.bindEvents();
};

Board.prototype.bindEvents = function() {
  var self = this;
  this.$element.on('click', function(e) { self.placePostIt(e); });
};
Board.prototype.placePostIt = function(e) {
  var postIt = new PostIt({left: e.pageX, top: e.pageY});
  this.putPostItInDOM(postIt)
};
Board.prototype.putPostItInDOM = function(postIt){
  this.$element.append(postIt.$element);
}
