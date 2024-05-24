
export function validateCustomerId(customerId: string): boolean {
    

    return /^\d{7}$/.test(customerId) && customerId.startsWith('36'); //checking the customerId is a number,should be 7 digit and should start with 36
}


