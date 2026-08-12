import { Card, Button, Modal } from '../components/shared';

function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold !text-purple-500">Welcome to CommunityHub</h2>
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
      <Modal />
    </div>
  );
}

export default Home;
