import ClubhouseCard from "./lib/components/Clubhouse/ClubhouseCard";
import Avatar from './lib/components/Clubhouse/Avatar'
import Button from './lib/components/Clubhouse/Button'

function App() {
  return (
    <div className="App">
      <ClubhouseCard>
        <h3 className="card-title">YNK Gamehouse</h3>
            <p className="cl-card-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi soluta qui
                quaerat deserunt dolorum odio, voluptate reiciendis esse reprehenderit
                mollitia temporibus quidem, sint amet officiis molestiae dolores expedita
                sed quae?
            </p>
            <div className="cl-card-footer">
                <div>👋</div>
                <div>Clubhouse</div>
            </div>
      </ClubhouseCard>
      <ClubhouseCard variant="horizontal">
        <h3 className="card-title">YNK Gamehouse</h3>
            <p className="cl-card-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi soluta qui
                quaerat deserunt dolorum odio, voluptate reiciendis esse reprehenderit
                mollitia temporibus quidem, sint amet officiis molestiae dolores expedita
                sed quae?
            </p>
            <div className="cl-card-footer">
                <div>👋</div>
                <div>Clubhouse</div>
            </div>
      </ClubhouseCard>
      <Avatar size="sm"/>
      <Avatar size="md"/>
      <Avatar size="lg"/>
      <Avatar size="lg" isActive={true}/>
      <Button type="primary">+ Start a room</Button>
      <Button type="secondary">
        <span className="btn-icon">✌️</span>Leave quitely
      </Button>
      <Button type="outline">Follow</Button>
    </div>
  );
}

export default App;
