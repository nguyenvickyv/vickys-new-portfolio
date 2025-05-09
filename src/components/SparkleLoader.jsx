import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SparkleLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-rose-200">
      <DotLottieReact
      src="https://lottie.host/f0b2b88d-c844-4124-b119-f2bcb13df90e/Lb2CmVHV4r.lottie"
      loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default SparkleLoader;
