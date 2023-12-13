import { CustomerType, AvaliabilityType } from "@prisma/client";

export function getCustomerType(value: string | null): CustomerType | null {
  if (value === CustomerType.Private || value === CustomerType.Business) {
    return value;
  }
  return null; // or handle the error if the value is required
}

export function getAvailabilityType(
  value: string | null
): AvaliabilityType | null {
  if (
    value === AvaliabilityType.OneTime ||
    value === AvaliabilityType.Repeatable
  ) {
    return value;
  }
  return null; // or handle the error if the value is required
}

export function convertToBoolean(value: FormDataEntryValue | null) {
  return value === "true";
}
