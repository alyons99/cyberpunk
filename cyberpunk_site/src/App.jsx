import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item_Card from './Item_Card'
import Item_Selectors from './Item_Selectors'
import Circuit_Background from './Circuit_Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ position: 'fixed', top: 0, left: 20, height: '100vh', width: "97.5vw" }}>
      <Circuit_Background />
    <div><Item_Selectors/></div>
    <div class="card-container">
    <Item_Card 
      src="https://placehold.co/200"
      name="Zetatech Parraline 5750"
      price="45,000 eb"
      description="Military-grade cyberdeck with enhanced ICE-breaking capabilities. Comes with pre-installed demon programs and hardened security protocols."
      />
    <Item_Card 
      src="https://placehold.co/200"
      name="Biotech Neural Interface"
      price="12,000 eb"
      description="Direct neural connection port. Allows for faster data transfer and reduced latency. Installation requires licensed ripperdoc."
      />
    <Item_Card 
      src="https://placehold.co/200"
      name="Airhypo"
      price="10,000 eb"
      description="Easy to use drug distribution platform."
      />
    <Item_Card 
      src="https://placehold.co/200"
      name="Stealth Suit (Thermoptic)"
      price="78,000 eb"
      description="Cutting-edge thermoptic camouflage suit. Provides near-invisibility to thermal and optical sensors. Battery life: 4 hours active use."
      />
    <Item_Card 
      src="https://placehold.co/200"
      name="Encrypted Commlink"
      price="8,500 eb"
      description="Quantum-encrypted communication device. Untraceable and unhackable. Perfect for sensitive operations."
      />
    <Item_Card 
      src="https://placehold.co/200"
      name="Smartgun Targeting System"
      price="25,000 eb"
      description="Cybernetic targeting enhancement. Increases accuracy by 300% and provides trajectory prediction. Compatible with most firearms."
      />
    <Item_Card 
      src="https://placehold.co/200"
      name="Memory Chip (Classified)"
      price="150,000 eb"
      description="Stolen corporate data chip. Contents unknown. Buyer assumes all risks. No refunds."
      />
    </div>
    </div>
     </>
  )
}

export default App
