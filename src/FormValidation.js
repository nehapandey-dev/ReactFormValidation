

function FormValidation( formValues) {
    const error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if( formValues.name === "") {
        error.name = "Name should not be empty"
    }
    if( formValues.email === "") {
        error.email = "eamil should not be empty"
    } 
    else if(!email_pattern.test( formValues.email)) {
        error.email = "Email Didn't match"
    }
    if( formValues.password === "") {
        error.password = "Password should not be empty"
    } 
    else if(!password_pattern.test( formValues.password)) {
        error.password = "Password didn't match"
    }
    
    if( formValues.confirm_password === "" || String( formValues.confirm_password) !== String( formValues.password)) {
        console.log( formValues.confirm_password + "___" +  formValues.password)
        error.confirm_password = "Password not matched"
    }

    return error;
}

export default FormValidation