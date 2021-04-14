
$(document).ready(function() {


    // My array of elements

var todoItems = [
    {
        text: "Cleaning the house",
        completed: false,
    },
    {
        text: "Paying bills",
        completed: true,   
    },
    {
        text: "Walking the dog",
        completed: true,   
    },
    {
        text: "Doing the shopping",
        completed: false,   
    },
];


var list = $(".todos");
var newInput = $(".add-todo");
var template = $("#template li");



// Populating my array 
 for(var i = 0; i < todoItems.length; i++){
    var todo = todoItems[i];
    // template
    var item = template.clone();
    item.find(".text").text(todo.text);

    list.append(item);
 };


// New item to be inserted in the list

newInput.keyup(function(event){
    console.log(event.which);
    
    if(event.which ===13){
      //  console.log("enter");
      var text = newInput.val().trim();

      if(text !== ""){
          console.log(text);

          // template

          var item = template.clone();
          item.find(".text").text(text);
          list.append(item);

          // reset 
          newInput.val("");

      };  

    };
});


// Removing to-do items

$("body").on("click", ".todos li i", function(){
    $(this).parent().remove();
} )






    // end doc ready
});