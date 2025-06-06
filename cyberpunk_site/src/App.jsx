import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item_Card from './Item_Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="card-container">
    <Item_Card 
      src="https://placehold.co/200"
      name="Zetatech Parraline 5750"
      type="Cyberdeck"
      description="Military-grade cyberdeck with enhanced ICE-breaking capabilities. Comes with pre-installed demon programs and hardened security protocols."
      />
    <Item_Card 
      src="https://placehold.co/200"
      name="Airhypo"
      type="Consumable"
      description="Easy to use drug distribution platform."
      />
          <Item_Card 
      src="https://placehold.co/200"
      name="Airhypo"
      type="Consumable"
      description="Easy to use drug distribution platform."
      />
          <Item_Card 
      src="https://placehold.co/200"
      name="Airhypo"
      type="Consumable"
      description="Easy to use drug distribution platform."
      />
          <Item_Card 
      src="https://placehold.co/200"
      name="Airhypo"
      type="Consumable"
      description="Easy to use drug distribution platform."
      />
          <Item_Card 
      src="https://placehold.co/200"
      name="Airhypo"
      type="Consumable"
      description="Easy to use drug distribution platform."
      />
    </div>
     </>
  )
}

export default App
