const fetchInstagram = async () => {
  try {
    const res = await fetch(
      'https://graph.instagram.com/v17.0/6182535261872640/media?fields=id,media_type,media_url,username,timestamp&access_token=' +
      process.env.NEXT_INSTAGRAM_TOKEN
    );
    const data = await res.json();
    const imageFeeds = data.data.filter(feed => feed.media_type === 'IMAGE').slice(0, 6);
    return imageFeeds;
  } catch (error) {
    console.error('An error occurred while fetching the data.', error);
    return [];
  }
};

export default fetchInstagram;
