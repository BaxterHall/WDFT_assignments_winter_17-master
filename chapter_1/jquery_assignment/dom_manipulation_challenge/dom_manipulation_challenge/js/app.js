/* DOM Manipulation Review
Great job on this assignment.  Everything looks good, just try to remember to be consistent with your indentation.
*/

//Write your jQuery code in this file
$("#edit-header").html("The jQuery Challenge");

$("#box1").css({ 'background-color': "green" });

$("#para1").css({ 'font-size': "38px", "font-weight": "bold" });

$(".box2").addClass('spin');

$("#button1").click(function () {
    alert('Have You Listened to A Sting Song Today?');
})

$("#box3").hover(function () {
    $("#box3").css({ 'background-color': "green" })
}, function () {
    $("#box3").css({
        'background-color': "red"
    });
});

$("#input1").keyup(function () {
    console.log(
        $(this).val()
    )
});

$("#box4").animate({
    left: "399px",
    top: "149px"
}, 2000)
    ;