import Image from "next/image";
import Slider from "./Slider";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-screen h-screen overflow-hidden">
      <Head>
        <title>Carrosel</title>
      </Head>
      <div className="border-4 border-red-500 p-5 w-[80%]">
        <Slider>
          <div className="mx-2 w-[512px] h-[512px] bg-blue-500 inline-block">
            <Image src={'https://source.unsplash.com/random/512x512?Landscape&1'} alt='' width={'512'} height={'512'} />
          </div>
          <div className="mx-2 w-[512px] h-[512px] bg-blue-500 inline-block">
            <Image src={'https://source.unsplash.com/random/512x512?Landscape&2'} alt='' width={'512'} height={'512'} />
          </div>
          <div className="mx-2 w-[512px] h-[512px] bg-blue-500 inline-block">
            <Image src={'https://source.unsplash.com/random/512x512?Landscape&3'} alt='' width={'512'} height={'512'} />
          </div>
          <div className="mx-2 w-[512px] h-[512px] bg-blue-500 inline-block">
            <Image src={'https://source.unsplash.com/random/512x512?Landscape&4'} alt='' width={'512'} height={'512'} />
          </div>
          <div className="mx-2 w-[512px] h-[512px] bg-blue-500 inline-block">
            <Image src={'https://source.unsplash.com/random/512x512?Landscape&5'} alt='' width={'512'} height={'512'} />
          </div>
        </Slider>
      </div>
    </main>
  );
}
