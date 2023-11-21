import { CustomerType } from "@prisma/client";

export function getCustomerType(value: string | null): CustomerType | null {
    if (value === CustomerType.Private || value === CustomerType.Business) {
      return value;
    }
    return null; // or handle the error if the value is required
  }