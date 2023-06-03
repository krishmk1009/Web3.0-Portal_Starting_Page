import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <section>
      <Navbar />
      {/* <div className="text-4xl font-normal leading-normal mt-0 mb-2 text-pink-800 text-center"><h1 >Web3.0 Portal</h1></div> */}
      <div class="flex h-screen justify-center  mt-14 ">

        <div class="h-100vh grid grid-cols-2 gap-10 content-start mt-10">

          <Cards
            image='https://www.searchenginejournal.com/wp-content/uploads/2021/08/top-5-reasons-why-you-need-a-social-media-manager-616015983b3ba-sej.png'
            title="D-connect"
            desc="Access the secure and Decentralised social media application which enables users to share their content on peer to peer network" link="https://main--guileless-boba-7d3887.netlify.app/" />
          <Cards image='https://i.postimg.cc/zXhDfxMb/logo1-1.png'

            title="PhotoBloc"
            desc=" Acess the hyperVault which is safe and secure photo storage application which is based on blokchain ."  link="http://127.0.0.1:5173/"/>

        </div>
      </div >
      {/* <Footer /> */}
    </section>
  )
}