export interface updateProfiles {
    _action: string;
    firstName: string;
    lastName: string;
    address?: string;
    postalCode?: string;
    city?: string;
    birthYear?: string;
    birthMonth?: string;
    birthDay?: string;
    phoneNumber?: string;
    profileImage?: File;
}