import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { requireUserId } from 'utils/auth.server';
import { downloadParkingspotImageAsBuffer } from 'utils/parkingspot/spotImage.server';


export const loader: LoaderFunction = async ({ params, request }) => {
  await requireUserId(request);
  const spotId = params.id;

  // Replace this with your actual logic to fetch the image
  const { data, error } = await downloadParkingspotImageAsBuffer(request, spotId);

  if (error) {
    // Handle errors as needed
    return json({ error }, { status: 500 });
  }

  if (data) {
    // Assuming 'data' is the image data you want to return
    return json({ image: data });
  } else {
    // Handle case where no image is found
    return json({ error: 'No image found' }, { status: 404 });
  }
};
