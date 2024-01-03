// app/utils/validators.server.ts

export const validateEmail = (email: string): string | undefined => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.length || !validRegex.test(email)) {
      return "Indtast venligst en gyldig e-mailadresse"
    }
  }
  
  export const validatePassword = (password: string): string | undefined => {
    if (password.length < 5) {
      return "Indtast en adgangskode, der er mindst 5 tegn lang"
    }
  }
  

  export const validateName = (name: string): string | undefined => {

    if (!name.length) return `Vær venlig at indtaste en værdi for fornavn og efternavn`
  
  }