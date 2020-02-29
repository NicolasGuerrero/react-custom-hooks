//1
$(function() {
  console.log("Let's get ready to party with jQuery!");
  //2
  $("img").addClass("image-center");
  //3
  $("p").last().remove();
  //4
  $("#title").css("font-size", Math.round(Math.random() * 100));
  //5
  let hello = "<li> Hello </li>";
  $("ol").append(hello);
  //6
  let apology = `<p>We're sory this list exists.</p>`;
  $("aside").empty().prepend(apology);
  //7
  $(".form-control").on('keypress', function () {
      let red = $(".form-control").eq(0).val();
      let blue =  $(".form-control").eq(1).val();
      let green =  $(".form-control").eq(2).val();
      console.log(red, green, blue);
      $("body").css("background-color",`rgb(${red},${green},${blue}`);
  });
  //8
  $("img").on("click", function(e) {
    $(e.target).remove();
    console.log($(e.target));
  });
});