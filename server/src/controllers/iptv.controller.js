const axios=require('axios')

class IPTVController {
  static async getAllChannels(req, res) {
  try {
    const [
      streamsRes,
      channelsRes,
      logosRes,
      feedsRes
    ] = await Promise.all([
      axios.get("https://iptv-org.github.io/api/streams.json"),
      axios.get("https://iptv-org.github.io/api/channels.json"),
      axios.get("https://iptv-org.github.io/api/logos.json"),
      axios.get("https://iptv-org.github.io/api/feeds.json")
    ]);

    // Channels lookup (id → data)
    const channelMap = Object.fromEntries(
      channelsRes.data.map(ch => [
        ch.id,
        {
          country: ch.country,
          categories: ch.categories
        }
      ])
    );

    // Logos lookup (channel → url)
    const logoMap = Object.fromEntries(
      logosRes.data.map(l => [l.channel, l.url])
    );

    // Feeds lookup (channel → languages)
    const feedMap = Object.fromEntries(
      feedsRes.data.map(f => [f.channel, f.languages || []])
    );

    // 🔥 STREAMS AS BASE ARRAY
    const combined = streamsRes.data.map(s => ({
      channel: s.channel ?? null,
      title: s.title,
      url: s.url,
      quality: s.video?.quality || null,

      // optional joins
      country: channelMap[s.channel]?.country || null,
      categories: channelMap[s.channel]?.categories || [],
      logo: logoMap[s.channel] || null,
      languages: feedMap[s.channel] || []
    }));

    res.status(200).json(combined);

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

  

}

module.exports=IPTVController;