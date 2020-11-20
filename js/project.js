$(document).ready(function(){
  $(".card").mouseenter(function(){
	  $(this).css({"transform":"scale(1.1)"})
  });
});
$(document).ready(function(){
	  $(".card").mouseleave(function(){
		  $(this).css({"transform":"scale(1)"})
	  });
	});

function onSubmit(){
	if(!document.getElementById('name').value.trim().length){
		alert("Please enter the Name");
		return true;
	}
	if(!document.getElementById('email').value.trim().length){
		alert("Please enter the Name");
		return true;
	}
	if(!document.getElementById('phone').value.trim().length){
		alert("Please enter the Name");
		return true;
	}
};