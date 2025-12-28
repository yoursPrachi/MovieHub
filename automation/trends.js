import googleTrends from "google-trends-api";

export async function getTrendingTopics() {
  const res = await googleTrends.dailyTrends({geo:"IN"});
  const data = JSON.parse(res);
  return data.default.trendingSearchesDays[0].trendingSearches.map(t=>t.title.query);
}
