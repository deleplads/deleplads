import supabaseServerClient from "utils/supabase.server";

export async function downloadParkingspotImageAsBuffer(request: Request, spot_id: string) {
    const supabaseClient = await supabaseServerClient(request);
    const { data, error } = await supabaseClient.storage.from('parkingspot').download(`${spot_id}/parkingspot_image`);

    return { data: data ? Buffer.from(await data.arrayBuffer()) : null, error: error };
  }
  
  export async function uploadParkingspotImage(request: Request, image: File, spot_id: string) {
    
    const supabaseClient = await supabaseServerClient(request);
    const { data, error } = await supabaseClient.storage.from('parkingspot').upload(`${spot_id}/parkingspot_image`, image, {
      cacheControl: '3600',
      upsert: true,
      contentType: 'image/*',
    });
    return { data: data, error: error };
  }