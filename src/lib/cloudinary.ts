import { v2 as cloudinary } from 'cloudinary';

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error('CLOUDINARY_CLOUD_NAME is not set');
}

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error('CLOUDINARY_API_KEY is not set');
}

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error('CLOUDINARY_API_SECRET is not set');
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };

/**
 * Upload image to Cloudinary with protected URL
 */
export async function uploadImage(file: File | Buffer, folder: string = 'vaidhyasewa') {
  try {
    const uploadResult = await cloudinary.uploader.upload(file as any, {
      folder,
      resource_type: 'auto',
      use_filename: true,
      unique_filename: true,
      overwrite: false,
    });

    return {
      public_id: uploadResult.public_id,
      secure_url: uploadResult.secure_url,
      url: uploadResult.url,
      width: uploadResult.width,
      height: uploadResult.height,
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}

/**
 * Get secure, transformed image URL
 * This hides the original URL and provides a protected CDN URL
 */
export function getImageUrl(publicId: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: string;
} = {}) {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
  } = options;

  const transformations: string[] = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);

  const transformString = transformations.join(',');
  
  return cloudinary.url(publicId, {
    secure: true,
    transformation: [{ [transformString]: true }],
    sign_url: true, // Sign URL for additional security
  });
}

/**
 * Delete image from Cloudinary
 */
export async function deleteImage(publicId: string) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    throw error;
  }
}

