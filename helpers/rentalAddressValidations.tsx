export function validateAddressFields(street: string, postal_code: string, city: string): string {
    const allFieldsFilled = street && postal_code && city;
    const allFieldsEmpty = !street && !postal_code && !city;
    
    if (!(allFieldsFilled || allFieldsEmpty)) {
        return 'Udfyld venligst alle adressefelter.';
    } else {
        return ''
    }
}

export function validatePostalCode(postalCode: string): string {
    if (postalCode != '' && !isNumeric(postalCode)) {
        return 'Ugyldigt postnummer. Kun tal tilladt.';
    } else if (postalCode.length != 4){
        return 'Ugyldigt postnummer. Skal minimum være 4 karatere langt'
    } else {
        return ''
    }
}

function isNumeric(value: string) {
    return /^-?\d+$/.test(value);
}
