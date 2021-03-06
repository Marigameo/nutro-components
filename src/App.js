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
import QuantityButton from "./lib/components/Ecommerce/QuantityButton";
import EcomToggle from "./lib/components/Ecommerce/EcomToggle";
import ImageMagnify from "./lib/components/Ecommerce/ImageMagnify";
import watchImg687 from './lib/components/Ecommerce/images/wristwatch_687.jpeg';
import watchImg1200 from './lib/components/Ecommerce/images/wristwatch_1200.jpeg';

/* slider related imports */
import styles from  './lib/components/Ecommerce/slider/slider.module.css'
import Slider from './lib/components/Ecommerce/slider/ProductSlider'
import ShoeOne from './lib/components/Ecommerce/slider/images/shoe1.jpg'
import ShoeTwo from './lib/components/Ecommerce/slider/images/shoe2.jpg'
import ShoeThree from './lib/components/Ecommerce/slider/images/shoe3.jpg'
import ShoeFour from './lib/components/Ecommerce/slider/images/shoe4.jpg'
import ShoeFive from './lib/components/Ecommerce/slider/images/shoe5.jpg'
import React from 'react'
import BurgerImage from './lib/components/Ecommerce/images/burger.jpeg'

import ProductCard from './lib/components/Ecommerce/Card'

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

// list of images for the slider
const slideimages = [ShoeOne, ShoeTwo, ShoeThree, ShoeFour, ShoeFive]

const images = [watchImg687, watchImg1200]

const product = {
  image: BurgerImage,
  name: 'Butter Paneer Kulcha Burger',
  isVeg: false,
  description: '557 Cal | High protein',
  actualPrice: '??? 209',
  discountedPrice: '??? 104'
}

function App() {
  return (
    <div className="App">
      <ProductCard product={product} />
      <div className = {styles.card}>
        <Slider 
          size = "sm"
          slideimages = {slideimages}
          autoplay = {3}
          dot = {true}
        />
        <div className = {styles.cardcontent}>
            <h4 className={styles.heading}>SHOES</h4>
            <p className = {styles.cardtext}>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam. </p>
        </div>
        <div className = {styles.footer}>
          <button>SHOP NOW ????</button>
        </div>
      </div>
     <div className = "big-slider">
        <Slider 
        size = "lg"
        slideimages = {slideimages}
        autoplay = {3}
        dot = {true}
        preview = {true}/>
     </div>
      <ImageMagnify images={images} isHintEnabled={true} />
      <div style={{margin: '3rem'}}>
      <QuantityButton/>
      <EcomToggle state={false}/>
      </div>
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
                <div>????</div>
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
                <div>????</div>
                <div>Clubhouse</div>
            </div>
      </ClubhouseCard>
      <ClubhouseAvatar size="sm"/>
      <ClubhouseAvatar size="md"/>
      <ClubhouseAvatar size="lg"/>
      <ClubhouseAvatar size="lg" isActive={true}/>
      <ClubhouseButton type="primary">+ Start a room</ClubhouseButton>
      <ClubhouseButton type="secondary">
        <span className="btn-icon">??????</span>Leave quitely
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
