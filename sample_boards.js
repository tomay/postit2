var SampleBoards = {
  "good_ideas": [
    {
      "content": "Walk into a museum",
      "position": { "left": "231", "top": "130" }
    },
    {
      "content": "Eat a sandwich",
      "position": { "left": "428", "top": "100" }
    },
    {
      "content": "Be nice to people",
      "position": { "left": "301", "top": "274" }
    }
  ],
  "bad_ideas": [
    {
      "content": "Eat a museum",
      "position": { "left": "231", "top": "130" }
    },
    {
      "content": "Be nice to a sandwich",
      "position": { "left": "428", "top": "100" }
    },
    {
      "content": "Walk into people",
      "position": { "left": "301", "top": "274" }
    }
  ]
}

var seeding = function(hash_name, key){
  $.each(key, function(key, value){
    newBoard = new Board(hash_name);
    postIt = new PostIt(value.position, value.content);
    newBoard.putPostItInDOM(postIt);
  })
}

var basicSeeding = function() {
  seeding(SampleBoards, SampleBoards.good_ideas),
  seeding(SampleBoards, SampleBoards.bad_ideas);
}

var createSeedBoardOnDOM = function(board){

}

//   var board = new Board("board-"+this.boards.length);
//   this.boards.push(board);
//   this.selectBoard(this.addBoardToList());
//   this.$element.after(board.$element);
// };
// BoardSelector.prototype.addBoardToList = function (){
//   var link_id = "board-" + this.boards.length
//   var $listItem = $("#list-item-template").clone().attr("id", link_id).text(link_id);
//   $("#board_list").append($listItem);
//   return $listItem;