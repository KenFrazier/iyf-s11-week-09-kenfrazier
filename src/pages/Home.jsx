import Tabs from '../components/Tabs';
import UserSearch from '../components/UserSearch';
import Timer from '../components/Timer';
import { Card, Button, Modal } from '../components/shared';

function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold !text-purple-300">Welcome to CommunityHub</h2>
      <p>This is the home page.</p>
      <Card title="Styled Card">
        <p>This card is styled with Tailwind.</p>
        <Button variant="primary" onClick={() => alert('Primary clicked!')}>
          Primary
        </Button>
        <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
          Secondary
        </Button>
        <Button variant="danger" onClick={() => alert('Danger clicked!')}>
          Danger
        </Button>
      </Card>

      <Timer />

      <Modal />

      <UserSearch />

     <Tabs
      tabs={[
        { label: "About", content: <p>CommunityHub connects neighbors to solve local issues together.</p> },
        { label: "How It Works", content: <p>Report an issue, track its status, and see it resolved.</p> },
        { label: "Contact", content: <p>Reach out to your local elder or administrator.</p> }
      ]}
    />
    </div>
  );
}

export default Home;


