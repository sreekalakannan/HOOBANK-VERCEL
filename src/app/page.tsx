import Head from 'next/head'
import Image from 'next/image'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    
    <div className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>HooBank - Next Generation Payment Method</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
        <Image src="/assets/logo1.jpg" alt="HooBank Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold text-white">Hoo</span>
          <span className="text-cyan-400 text-xl font-bold ml-1">Bank</span>
          </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="#" className="hover:text-cyan-400">Features</a></li>
            <li><a href="#" className="hover:text-cyan-400">Solution</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 flex items-center">
        <div className="w-1/2">
          <div className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-full inline-block mb-4">
            20% DISCOUNT FOR 1 MONTH ACCOUNT
          </div>
          <h1 className="text-6xl font-bold mb-6">
            The Next <br />
            <span className="text-cyan-400">Generation</span> <br />
            Payment Method.
          </h1>
          <p className="mb-8 text-gray-400 max-w-md">
            Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
          </p>
          <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full hover:bg-cyan-300 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl opacity-20"></div>
               <Image src="/assets/HANDANDCARD.PNG.png" alt="Robot Hand" width={600} height={100} className=" bottom-15 right-0 z-20" />
    </div>
        </main>
      <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between mb-16">
          <div className="text-4xl font-bold">
            <span className="text-cyan-400">3800+</span> 
            <span className="text-gray-400 text-2xl"> ACTIVE USERS</span>
          </div>
          <div className="text-4xl font-bold">
            <span className="text-cyan-400">230+</span> 
            <span className="text-gray-400 text-2xl"> COMPANYS TRUSTED</span>
          </div>
          <div className="text-4xl font-bold">
            <span className="text-cyan-400">$230M+</span> 
            <span className="text-gray-400 text-2xl"> TRANSACTIONS</span>
          </div>
        </div>

{/* 2nd page */}

  <div className="grid grid-cols-2 gap-16">
  <div>
    <h1 className="text-5xl font-bold mb-6">
      You do the business,<br />
      we&apos;ll handle the money.
    </h1>
    <p className="text-gray-400 mb-8">
      With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
    </p>
    <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-md font-semibold">
      Get Started
    </button>
  </div>
<div className="space-y-8">
    <div className="flex items-start space-x-4">
      <div className="bg-gray-800 p-2 rounded-full">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />           
        </svg>
      </div>
      <div>
       
     <h3 className="text-xl font-semibold">Rewards</h3>

        <p className="text-gray-400">The best credit cards offer some tantalizing combinations of promotions and prizes</p>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <div className="bg-gray-800 p-2 rounded-full">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold">100% Secured</h3>
        <p className="text-gray-400">We take proactive steps make sure your information and transactions are secure.</p>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <div className="bg-gray-800 p-2 rounded-full">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Balance Transfer</h3>
        <p className="text-gray-400">A balance transfer credit card can save you a lot of money in interest charges.</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
{/* pages/index.js 3rd page*/}
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Billing & Invoicing Control</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-8">
       <div >
         <Image src="/assets/groupeasily.png" alt="PayPal" width={500} height={500} /> 
       </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">Easily control your billing & invoicing.</h1>
          <p className="text-gray-400 mb-8">
            We consider the payment methods you&apos;ll offer your customers when you start your business. This is an important part of managing your business cash flow and meeting your customer's needs.
          </p>
          <div className="flex space-x-4">
            <Image src="/assets/APPLE.png" alt="Download on App Store" width={120} height={40} />
            <Image src="/assets/GP.png" alt="Get it on Google Play" width={120} height={40} />
          </div>
        </div>
      </main>
       

     {/* 4th page */}
     <div className="bg-gray-900 text-white min-h-screen flex items-left justify-center p-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="flex-1">
        <div >
         <Image src="/assets/find better.png" alt="PayPal" width={1200} height={900} /> 
       </div>
      </div>
          </div>
        </div>
     {/* 5th page */}
       <div className="container mx-auto mt-10">
       <TestimonialSection />
     </div> 


      {/* 6th page */}
       <div className="bg-gray-900 text-white-300 min-h-screen p-10">
        <div className="  flex justify-between mb-14">
        <Image src="/assets/full.png" alt=" Airbnb" width={1000} height={32} />
      </div>
       <div className="bg-gray-800 rounded-lg p-8 max-w-6xl mx-auto">
       <h1 className="text-5xl font-bold text-white mb-4">Come try our service now!</h1>
          <p className="text-lg mb-7">
            Everything you need to accept card payments and 
            grow your business anywhere on the planet.   
            <button className="   bg-teal-400 text-gray-900 font-semibold py-5 px-6 rounded-md hover:bg-teal-300 transition duration-300">
           Get Started
          </button>
          </p>
       </div>
       <div className="container mx-auto mt-10">
        <Footer />
      </div>
      
      </div>
 </div>
    </div>












   
  
    
  )
}




