export const checkValidData = (name, email, password) => {
     const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
     const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email); 
     const isPasswordValid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#@$%&? "])[a-zA-Z0-9!#@$%&?]{8,15}$/.test(password);
     
     if(!isNameValid) return "Name is not valid";
     if(!isEmailValid) return "Email is not valid";
     if(!isPasswordValid) return "Password is not valid";

     return null;
}



/** Password Rules
 * Minimum 8 characters {8,20}
 * Maximum 15 characters {8,15}
 * At least one uppercase character (?=.*[A-Z]) 
 * At least one lowercase character (?=.*[a-z])
 * At least one digit (?=.*\d)
 * At least one special character (?=.*[a-zA-Z >>!#$%&? "])[a-zA-Z0-9 >>!#$%&?]
 * 
 */