import ClubhouseCard from "./lib/components/Clubhouse/ClubhouseCard";
import ClubhouseAvatar from './lib/components/Clubhouse/Avatar'
import ClubhouseButton from './lib/components/Clubhouse/Button'
import GradientButton from './lib/components/Gradients/Button';
import GlassButton from './lib/components/Glassomorphism/Button'
import './App.css'
import CookieBanner from "./lib/components/educative/CookieBanner";
import EdSelect from "./lib/components/educative/EdSelect";
import EdSearch from "./lib/components/educative/EdSearch";
import EdButton from "./lib/components/educative/EdButton";
import EthFAQ from './lib/components/FAQ/EthFAQ'

const cookieText = 'We use cookies to ensure you get the best experience on our website. Please review our <a className={styles.underline} href="/#">Privacy Policy</a> to learn more.'
const buttonText = 'Got it!'

const options = [
  {id: 1, name: 'USA'},
  {id: 2, name: 'Canada'},
  {id:3, name: 'UK'},
  {id:4, name: "Brazil"},
  {id:5, name: 'India'}
]

const faqs = [
    {
        question: 'When will Eth2 ship?',
        answer: 'Eth2 is a set of distinct upgrades with different ship dates.',
        more: "Eth holders certainly don't need to do anything. Your ETH will not need changing or upgrading. There's almost certain to be scams telling you otherwise, so be careful.The merge and shard chain upgrades may impact dapp developers. But the specifications have not been finalised yet, so there's no immediate action required.",
        isActive: false
    },
    {
        question: 'When will Eth2 ship?',
        answer: 'Eth2 is a set of distinct upgrades with different ship dates.',
        more: "Eth holders certainly don't need to do anything. Your ETH will not need changing or upgrading. There's almost certain to be scams telling you otherwise, so be careful.The merge and shard chain upgrades may impact dapp developers. But the specifications have not been finalised yet, so there's no immediate action required.",
        isActive: false
    },
    {
        question: 'When will Eth2 ship?',
        answer: 'Eth2 is a set of distinct upgrades with different ship dates.',
        more: "Eth holders certainly don't need to do anything. Your ETH will not need changing or upgrading. There's almost certain to be scams telling you otherwise, so be careful.The merge and shard chain upgrades may impact dapp developers. But the specifications have not been finalised yet, so there's no immediate action required.",
        isActive: false
    },
    {
        question: 'When will Eth2 ship?',
        answer: 'Eth2 is a set of distinct upgrades with different ship dates.',
        more: "Eth holders certainly don't need to do anything. Your ETH will not need changing or upgrading. There's almost certain to be scams telling you otherwise, so be careful.The merge and shard chain upgrades may impact dapp developers. But the specifications have not been finalised yet, so there's no immediate action required.",
        isActive: false
    },
    {
        question: 'When will Eth2 ship?',
        answer: 'Eth2 is a set of distinct upgrades with different ship dates.',
        more: "Eth holders certainly don't need to do anything. Your ETH will not need changing or upgrading. There's almost certain to be scams telling you otherwise, so be careful.The merge and shard chain upgrades may impact dapp developers. But the specifications have not been finalised yet, so there's no immediate action required.",
        isActive: false
    },
]

function App() {
  return (
    <div className="App">
        <EthFAQ faqs={faqs}/>
      <div style={{display: 'flex', justifyContent: 'space-around', margin: '1rem'}}>
        <EdButton type='primary'>Explore courses &amp; paths</EdButton>
        <EdButton type='outlined'>Explore courses &amp; paths</EdButton>
        <EdButton type='primary_outlined'>Explore courses &amp; paths</EdButton>
      </div>
      <div style={{margin: '3rem'}}>
        <EdSearch/>
        <EdSelect options={options} />
      </div>

      <CookieBanner cookieText={cookieText} buttonText={buttonText}/>
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
          onClick= {() => alert('I just got cliked')}
        >Green apple shade</GradientButton>
    </div>
    <div className="glassmorphism">
         <div className="inner">
      <GlassButton type="glass"
       >Normal</GlassButton>
       <GlassButton type="glass"
       size="small"
       >Small</GlassButton>
       <GlassButton type="glass"
       size="large"
       onClick={() => alert('button clicked')}
       >Large</GlassButton>
       </div>
  </div>
    </div>
  );
}

export default App;
