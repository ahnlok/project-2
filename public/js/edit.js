$(function() {
    $("#edit-btn").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
      var newEdit = $(this).data("newedit");
  console.log(newEdit);


      var newEditState = {
        editState: id
      };
  
      console.log(`id: ${id}`);
      console.log(`newEdit: ${newEdit}`);
      console.log(`newEditState: ${newEditState}`);
      
      alert('Redict to edit page');
      window.location.href = "/students/" + id + "/edit"; 
      // Send the PUT request.
    //   $.ajax("/students/" + id + "/edit", {
    //     type: "GET",
    //     data: newEditState
    //   }).then(
    //     function() {
    //       console.log("redirect to ", newEdit);
    //       window.location.href = "/students/";
    //     }
    //   );
    });
  
  });
console.log("Server's running")
$(document).ready(function () {
    console.log("inside document.ready")
    $("#edit-student-form").on("submit", function (event) {
        event.preventDefault();
        console.log("You successfully post")
        const newPost =
        {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            school: $("#school").val(),
            mainLanguage: $("#mainLanguage").val(),
            subLanguage: $("#subLanguage").val(),
            linkedIn: $("#linkedIn").val(),
            gitHub: $("#gitHub").val(),
            resume: $("#resume").val(),
            description: $("#description").val(),
        };
        console.log(newPost);

        const id = $("#student-id").val();

        alert("Successfully Edited The Post!");
        
        $.ajax({
            url: `/api/students/${id}`,
            method: "PUT",
            data: newPost,
        }).then((response) => {
            console.log(response);
            window.location.href = "/students/saved";
        });
    });
});