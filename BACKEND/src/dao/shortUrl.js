import urlSchema from "../models/shortUrlSchema.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newUrl = new urlSchema({
      full_url: longUrl,
      short_url: shortUrl,
    });

    if (userId) {
      newUrl.user_id = userId;
    }
    await newUrl.save();
  } catch (error) {
    if (error.code === 11000) {
      throw new ConflictError(error);
    } else {
      throw new Error(error);
    }
  }
};

export const getShortUrl = async (id) => {
  return await urlSchema.findOneAndUpdate(
    { short_url: id },
    { $inc: { clicks: 1 } }
  );
};
