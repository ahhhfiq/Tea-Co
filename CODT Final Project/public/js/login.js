$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});

function register() {
    var password = document.getElementById("pass").value;
    var retype = document.getElementById("repass").value;

    if (password == retype) {
        console.log("its the same");
        
    }
    else{
        alert("Your password does not match");
    }
}
