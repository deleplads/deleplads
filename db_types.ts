export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Profile = {
  created_at: string | null
  first_name: string
  id: string
  last_name: string,
  birth_date: string | null,
  address: string | null,
  city: string | null,
  postal_code: string | null,
  phone_number: number | null,
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          created_at: string | null
          first_name: string
          id: string
          last_name: string,
          birth_date: string | null,
          address: string | null,
          city: string | null,
          postal_code: string | null,
          phone_number: number | null,
        }
        Insert: {
          created_at?: string | null
          first_name: string
          id?: string
          last_name: string,
          birth_date: string | null,
          address: string | null,
          city: string | null,
          postal_code: string | null,
          phone_number: number | null,
        }
        Update: {
          created_at?: string | null
          first_name?: string
          id?: string
          last_name?: string,
          birth_date: string | null,
          address: string | null,
          city: string | null,
          postal_code: string | null,
          phone_number: number | null,
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
