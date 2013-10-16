var PostIt = function(position, content) {
  this.content = content || "Write here!"
  this.$element = $("#post-it-template").clone().attr('id', null).css(position);
  this.$element.find('.content').text(this.content)
  this.setupDrag();
  this.bindEvents();
};

PostIt.prototype.bindEvents = function() {
  var self = this;
  this.$element.find('.header a').on('click', function(e) { self.removeFromDOM(e) });
  this.$element.click(function(e){
    e.stopPropagation();
  });
};

PostIt.prototype.setupDrag = function() {
  this.$element.draggable({handle: '.header'});
};
PostIt.prototype.removeFromDOM = function(e) {
  console.log('deleting ...');
  e.stopPropagation();
  this.$element.remove();
};
