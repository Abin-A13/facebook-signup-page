$(document).ready(function(){
    $("#signup").validate({
        rule:{
            fname:{
                required:true,
                minlength:4
        },
            lname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            password:{
                minlength:6
            },
            day:{
                required:true

            },
            messeage:{
                fname:{

                }
            }
            

        }
    })
})