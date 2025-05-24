import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  return (

    <main>

      {/* hero section */}

    <div className="flex justify-evenly items-center mb-4 text-textDark">

      <div className="flex flex-col items-center gap-3">

     <p className="text-5xl">Focus On What Matters</p>
     <p>Because your time matters</p>
      <button className="bg-primary px-4 py-3 rounded-xl hover:bg-surface">
          Try now it's free!
      </button>
      </div>
     <Image className="mix-blend-multiply" src={'/hero.jpg'} alt="hero_img" height={700} width={700}></Image>
    </div>


    {/*cards */}

    <div className="flex justify-evenly items-center mb-5 text-center">

      <Card title={"Turn chaos into clarity in seconds."}/>
      <Card title={"Plan smarter. Do faster."}/>
      <Card title={"No data tracking. No ads. Just productivity."}/>
      <Card title={"We protect your focus and your information."}/>
      
    
    </div>

    </main>
    
  );
}
