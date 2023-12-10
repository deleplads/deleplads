export type ProfileProps = {
  profile: {
    id: string;
    created_at: Date | null;
    first_name: string;
    last_name: string;
    address: string | null;
    postal_code: number | null;
    city: string | null;
    birth_date: string | null;
    phone_number: number | null;
    profile_image_buffer: ArrayBuffer | null;
  };
};