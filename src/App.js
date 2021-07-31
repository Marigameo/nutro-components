import ClubhouseCard from "./lib/components/Clubhouse/ClubhouseCard";
import ClubhouseAvatar from './lib/components/Clubhouse/Avatar'
import ClubhouseButton from './lib/components/Clubhouse/Button'
import GradientButton from './lib/components/Gradients/Button';

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
      <ClubhouseAvatar size="sm"/>
      <ClubhouseAvatar size="md"/>
      <ClubhouseAvatar size="lg"/>
      <ClubhouseAvatar size="lg" isActive={true}/>
      <ClubhouseButton type="primary">+ Start a room</ClubhouseButton>
      <ClubhouseButton type="secondary">
        <span className="btn-icon">✌️</span>Leave quitely
      </ClubhouseButton>
      <ClubhouseButton type="outline">Follow</ClubhouseButton>
      <div style={{margin: '2rem'}}>
        <GradientButton type="mango" size="normal">Mango shade</GradientButton>
        <GradientButton type="lavendar" size="small">Lavendar shade</GradientButton>
        <GradientButton type="greenApple"
        size="large"
          onClick= {() => console.log('I just got cliked')}
        >Green apple shade</GradientButton>
    </div>
    </div>
  );
}

export default App;
