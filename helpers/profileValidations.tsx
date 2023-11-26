export function isValidPhoneNumber(phoneNumber: string) {
    const regex = /^\d{8}$/;
    return regex.test(phoneNumber);
}

function isNumeric(value: string) {
    return /^-?\d+$/.test(value);
}


export function validateNames(firstName: string, lastName: string): string | undefined {
    if (firstName === '' || lastName === '') {
        return 'Felterne for fornavn og efternavn må ikke være tomme.';
    }
}

export function validateFirstName(firstName: string): string {
    return firstName === '' ? 'Fornavnsfeltet må ikke være tomt.' : '';
}

export function validateLastName(lastName: string): string {
    return lastName === '' ? 'Efternavnsfeltet må ikke være tomt.' : '';
}


export function validateAddressFields(address: string, postalCode: string, city: string): string {
    const allFieldsFilled = address && postalCode && city;
    const allFieldsEmpty = !address && !postalCode && !city;

    if (!(allFieldsFilled || allFieldsEmpty)) {
        return 'Udfyld venligst alle adressefelter eller lad dem alle være tomme.';
    } else {
        return ''
    };
}

export function validateBirthDateFields(birthYear: string, birthMonth: string, birthDay: string): string {
    const allFieldsFilled = birthYear !== '' && birthMonth !== '' && birthDay !== '';
    const allFieldsEmpty = birthYear === '' && birthMonth === '' && birthDay === '';

    if (!(allFieldsFilled || allFieldsEmpty)) {
        return 'Udfyld venligst alle fødselsdatofelter eller lad dem alle være tomme.';
    } else {
        return ''
    };
}

export function validatePostalCode(postalCode: string): string {
    if (postalCode != '' && !isNumeric(postalCode)) {
        return 'Ugyldigt postnummer. Kun tal tilladt.';
    } else {
        return ''
    };
}


export function validatePhoneNumber(phoneNumber: string): string {
    if (phoneNumber != '' && !isValidPhoneNumber(phoneNumber)) {
        return 'Ugyldigt telefonnummer. Telefonnummeret skal indeholde 8 cifre.';
    } else {
        return ''
    };
}
