import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Welcome from '../components/Welcome'
import Transactions from '../components/Transactions'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'

function Home() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default Home
