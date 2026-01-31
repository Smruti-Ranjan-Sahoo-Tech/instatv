const axios=require('axios')

class IPTVController {
  static async getAllChannels(req, res){
    try {
       const StreamData = await axios.get("https://iptv-org.github.io/api/streams.json").then(response => {
        return response.data.map(data => {
          return {
            title: data.title,
            url: data.url,
          };
        });
      });
       res.status(200).json(StreamData);
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
  }
  static async getFilteredIPTV(req, res) {
  const [streamsRes, channelsRes, logosRes, feedsRes] = await Promise.all([
    axios.get("https://iptv-org.github.io/api/streams.json"),
    axios.get("https://iptv-org.github.io/api/channels.json"),
    axios.get("https://iptv-org.github.io/api/logos.json"),
    axios.get("https://iptv-org.github.io/api/feeds.json"),
  ]);

  const streams = streamsRes.data;
  const channels = channelsRes.data;
  const logos = logosRes.data;
  const feeds = feedsRes.data;

  const channelMap = {};

  // 1️⃣ Base = streams (include all, even null metadata later)
  for (const s of streams) {
    if (!s.channel) continue;

    if (!channelMap[s.channel]) {
      channelMap[s.channel] = {
        channel: s.channel,
        title: null,
        language: null,
        category: null,
        logo: null,
        epg: null,
        streams: []
      };
    }

    channelMap[s.channel].streams.push({
      url: s.url,
      http_referrer: s.http_referrer || null,
      user_agent: s.user_agent || null
    });
  }

  // 2️⃣ Attach channel metadata
  for (const c of channels) {
    if (channelMap[c.id]) {
      channelMap[c.id].title = c.name || null;
      channelMap[c.id].language = c.languages?.[0] || null;
      channelMap[c.id].category = c.categories?.[0] || null;
    }
  }

  // 3️⃣ Attach logos
  for (const l of logos) {
    if (channelMap[l.channel]) {
      channelMap[l.channel].logo = l.url;
    }
  }

  // 4️⃣ Attach EPG
  for (const f of feeds) {
    if (channelMap[f.channel]) {
      channelMap[f.channel].epg = f.url;
    }
  }

  // 5️⃣ Apply filters (null-safe)
  let result = Object.values(channelMap);

  if (language) {
    result = result.filter(
      c => c.language && c.language.toLowerCase() === language.toLowerCase()
    );
  }

  if (category) {
    result = result.filter(
      c => c.category && c.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    result = result.filter(
      c =>
        c.title?.toLowerCase().includes(search.toLowerCase()) ||
        c.channel.toLowerCase().includes(search.toLowerCase())
    );
  }

  return result;
}

}

module.exports=IPTVController;