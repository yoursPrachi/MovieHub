import { autoPublish } from "./Automation";

export default function Dashboard() {
  return (
    <div>
      <h1>🎬 Admin Dashboard</h1>
      <button onClick={()=>autoPublish(100)}>🚀 1 Click = 100 Posts</button>
    </div>
  );
}
