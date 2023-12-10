import type { profiles } from "@prisma/client";
import type { ProfileProps } from "./profile.prop";

export function mapProfileEntityToProfileProp(profileEntity: profiles) {
  const mappedProfileProps:
    ProfileProps['profile'] = {
    id: profileEntity.id,
    created_at: profileEntity.created_at ?? null,
    first_name: profileEntity.first_name,
    last_name: profileEntity.last_name,
    address: profileEntity.address ?? null,
    postal_code: profileEntity.postal_code ?? null,
    city: profileEntity.city ?? null,
    phone_number: profileEntity.phone_number ?? null,
    birth_date: null,
    profile_image_buffer: new ArrayBuffer(8)
  };
  return mappedProfileProps;
}
