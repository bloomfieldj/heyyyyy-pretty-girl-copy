import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { motion } from "motion/react"



function App() {
  const steps = [
    {
      content: "Yo",
      image: "/character/one.png",
    },
    {
      content: `You've been trolling me all week about this...
      `,
      image: "/character/two.png",
    },
    {
      content: `And I want to make sure OpenTable doesn't charge my card for a no-show tomorrow.
      `,
      image: "/character/three.png",
    },
    {
      content: `I've given you my best years, and we still have a few decades to go.`,
      image: "/character/four.png",
    },
    {
      content: `But for now, the anticipation is killing me.`,
      image: "/character/five.png",
    },
    {
      content: "So now I've got a question for you…",
      image: "/character/six.png",
    },
    {
      content: "Will you be my Valentine?",
      image: "/character/seven.png",
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [sheWantsToBeMyValentine, setSheWantsToBeMyValentine] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const imagePaths = [
      ...steps.map((step) => step.image),
      "/character/yayyyy.png",
    ];

    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  }, []);

  return (
    <>
      {sheWantsToBeMyValentine && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Confetti width={width} height={height} />
          <div className="fixed top-0 left-0 w-full h-full bg-[#FFC5D3] flex flex-col items-center justify-center">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-white text-4xl font-bold animate-ping"
            >
              Let's goooooooo!
            </motion.h1>
            <img
              src="/character/yayyyy.png"
              alt=""
              className="w-40 duration-150 animate-spin"
            />
          </div>
        </motion.div>
      )}
      <div className="min-h-screen text-white p-5 flex flex-col items-center justify-center max-w-md mx-auto">
        <motion.img
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={steps[currentStep].image}
          alt=""
          className="w-40"
        />
        <motion.div
          key={currentStep + "-text"}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-josefin text-4xl font-bold"
        >
          {steps[currentStep].content}
        </motion.div>

        {currentStep < 6 && (
          <>
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="bg-white text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-10 font-semibold"
            >
              Next
            </button>
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="bg-white text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-2 font-semibold opacity-90"
              >
                Back
              </button>
            )}
          </>
        )}
        {currentStep === 6 && (
          <>
            <button
              onClick={async () => {
                setSheWantsToBeMyValentine(true);
             
              }}
              className="bg-white text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-10 font-semibold hover:cursor-pointer"
            >
              Yes
            </button>

            <button
              onClick={async () => {
                setSheWantsToBeMyValentine(true);
             
              }}
              className="bg-white text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-2 font-semibold hover:cursor-not-allowed"
              disabled

            >
              No
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
