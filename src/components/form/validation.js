export default function validation(input){
    const error = {};
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex = /^(?=.*\d).{6,10}$/;

    // if (input.trim() === "" && !emailRegex.test(input.email)) {
        if ((input && typeof input === "string" && input.trim() === "") || !emailRegex.test(input.email)) {
        error.email= "You must to write a valid email"
      };
    if (!passwordRegex.test(input.password)) {
        error.password = "Must have at least one number and  a length of 6 to 10 characters"
      }
     
    return error;

}