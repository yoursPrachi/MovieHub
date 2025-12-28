import { getTrendingTopics } from "./trends.js";
import { generateAI } from "./ai.js";
import { translate } from "./translate.js";
import { autoLinks } from "./internalLinks.js";
import { sendTelegram } from "./telegram.js";
import { db } from "../admin-react/src/firebase.js";
import { collection, addDoc } from "firebase/firestore";

export async function autoPublish(count=100){
  const topics = await getTrendingTopics();
  for(let i=0;i<count;i++){
    const topic = topics[i%topics.length];
    let contentEN = await generateAI(topic,"EN");
    let contentHI = await translate(contentEN);
    contentEN = autoLinks(contentEN, [{title_en:topic, slug:topic.toLowerCase().replace(/\s+/g,'-')}]);
    contentHI = autoLinks(contentHI, [{title_en:topic, slug:topic.toLowerCase().replace(/\s+/g,'-')}]);
    
    await addDoc(collection(db,"movies"),{
      slug:topic.toLowerCase().replace(/\s+/g,'-'),
      title_en:topic,
      title_hi:topic,
      content_en:contentEN,
      content_hi:contentHI,
      date:new Date()
    });

    await sendTelegram(topic);
    console.log("✅ Published:", topic);
  }
}
