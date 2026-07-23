import { WavyBackground } from "@/components/ui/wavy"; 

const DemoWavyBackground = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-black">
      <WavyBackground>
        {/* Children content goes here */}
      </WavyBackground>
    </div>
  );
};

export { DemoWavyBackground };
