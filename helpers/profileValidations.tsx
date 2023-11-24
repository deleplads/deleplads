export function isValidPhoneNumber(phoneNumber: string) {
    const regex = /^\d{8}$/;
    return regex.test(phoneNumber);
  }
  

export function validateNames(firstName: string, lastName: string): { error?: string } | undefined {
    if (firstName === '' || lastName === '') {
        return { error: 'Felterne for fornavn og efternavn må ikke være tomme.' };
    }
}

export function validateAddressFields(address: string, postalCode: string, city: string): { error?: string } | undefined {
    const allFieldsFilled = address && postalCode && city;
    const allFieldsEmpty = !address && !postalCode && !city;

    if (!(allFieldsFilled || allFieldsEmpty)) {
        return { error: 'Udfyld venligst alle adressefelter eller lad dem alle være tomme.' };
    }
}

export function validateBirthDateFields(birthYear: string, birthMonth: string, birthDay: string): { error?: string } | undefined {
    const allFieldsFilled = birthYear !== '' && birthMonth !== '' && birthDay !== '';
    const allFieldsEmpty = birthYear === '' && birthMonth === '' && birthDay === '';

    if (!(allFieldsFilled || allFieldsEmpty)) {
        return { error: 'Udfyld venligst alle fødselsdatofelter eller lad dem alle være tomme.' };
    }
}

export function validatePhoneNumber(phoneNumber: string): {error?: string } | undefined {
    if (phoneNumber != '' && !isValidPhoneNumber(phoneNumber)) {
        return { error: 'Ugyldigt telefonnummer. Telefonnummeret skal indeholde 8 cifre.' };
      }
}
