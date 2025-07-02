import { createApi } from 'unsplash-js';

import { UNSPLASH_ACCESS_KEY } from './config.js';

const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY, // your Unsplash API key
});

export async function searchInterestingPhotos() {
  const response = await unsplash.search.getPhotos({
    query: 'interesting',
    page: 1,
    perPage: 10,
    orientation: 'landscape', // optional
  });

  if (response.type === 'success') {
    const results = response.response.results;
    results.forEach(photo => {
      console.log({
        id: photo.id,
        thumb: photo.urls.thumb,
        full: photo.urls.full,
        alt: photo.alt_description,
        photographer: photo.user.name,
        unsplashPage: photo.links.html,
      });
      throw Error("do something with these images");
    });
  } else {
    console.error('Error:', response.errors);
  }
}

export async function fetchPhotoById(photoId) {
  const result = await unsplash.photos.get({ photoId });

  if (result.type === 'success') {
    const photo = result.response;

    console.log('Full image URL:', photo.urls.full);
    console.log('Regular image URL:', photo.urls.regular);
    console.log('Small thumbnail:', photo.urls.small);
    console.log('Thumb (very small):', photo.urls.thumb);

    return photo;
  } else {
    console.error('Error fetching photo:', result.errors);
    return null;
  }
}