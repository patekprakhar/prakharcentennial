
(function(){

    function Start()
    {
        console.log("App Started...");

        if (document.title === "Contact") {
            let sendButton = document.getElementById("SendButton");
            let cancelButton = document.getElementById("CancelButton");
            let form = document.forms[0];
      
            let fullName = document.getElementById("fullName");
            let emailAddress = document.getElementById("emailAddress");
            let contactNumber = document.getElementById("contactNumber");
            let message = document.getElementById("message");
      
            sendButton.addEventListener("click", (event) => {
              event.preventDefault();
              console.info(`Full Name   : ${fullName.value}
                Email Address  : ${emailAddress.value}
                Contact Number : ${contactNumber.value}
                Your Message   : ${message.value}`);
      
              form.reset;
              fullName = "";
              contactNumber = "";
              emailAddress = "";
              message = "";
            });
      
            cancelButton.addEventListener("click", (event) => {
              event.preventDefault();
              if (confirm("Are you sure?")) {
                location.href = "/";
              }
            });
          }

          
        let dangerButtons = document.getElementsByClassName("btn-danger");

        for (const button of dangerButtons) {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    location.href = '/component-list';
                }
            });
        }
    }

    window.addEventListener('load', Start);
})();