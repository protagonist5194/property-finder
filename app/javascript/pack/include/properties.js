$(function(){
    $("#show-tel").on("click", function(){
        var $this = $(this);
        $this.find("span").text( $this.data("telephone") );
    });

	$("#toggleDetails").on("click", function(){
    var details = $("#details");

    details.toggleClass("open");
    details.toggle();
    if(details.hasClass("open")){
        console.log('class found');
        $(this).text("show less");
    } else {
        $(this).text("show more");
    }

	});
   $("#send_message_to_agent").on("click", function(){ 
    var agent_id = $("#agent_id").val(),
    first_name = $("#message-first-name").val()
    last_name = $("#message-last-name").val()
    email = $("#message-email").val()
    message = $("#message-text").val()

   $.ajax({
    url:"*/agent/message",
    method:"POST",
    dataType:"json",
    data {
        agent_id: agent_id ,
        first_name: first_name,
        last_name:  last_name,
        email: email,
        message: message ,
    },
    success: function(data){
    $('#account-modal form').remove();
    $("#send_message_to_agent").remove();
    $('#account-modal.modal-body').html("<p>Your message has been success</p>");

    }
   })	
});

$('#account-modal').on('show.bs.modal', function (event) {
    
    var button = $(event.relatedTarget);
     
    var modal = $(this);
});
