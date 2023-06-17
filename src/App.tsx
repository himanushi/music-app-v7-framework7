import { useState } from 'react'
import './App.css'
import { App as Framework7App, View, Page, Navbar, Toolbar, Link } from 'framework7-react';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Framework7App >

    {/* Your main view, should have "main" prop */}
    <View main>
      {/*  Initial Page */}
      <Page>
        {/* Top Navbar */}
        <Navbar title="Awesome App"></Navbar>
        {/* Toolbar */}
        <Toolbar bottom>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
        </Toolbar>
        {/* Page Content */}
        <p>Page content goes here</p>
        <Link href="/about/">About App</Link>
      </Page>
    </View>
  </Framework7App>
  )
}

export default App
