var $password = $("#password");
var $confirmPassword = $("#confirm_password")
var $username = $("#username")

$("form span").hide();

function isUsernamePresent() {
	return $username.val().length > 0;
}

function isPasswordValid(){
    return $password.val().length > 7;
}

function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent(){
    if (isPasswordValid()) {
        $password.next().hide();
    }else {
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    if (arePasswordsMatching()) {
        $confirmPassword.next().hide();
    } else {
        $confirmPassword.next().show();
    }
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}

function usernameEvent() {
    if(isUsernamePresent()) {
        $username.next().hide();
    } else {
        $username.next().show();
    }
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

enableSubmitEvent();