import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import googleLogo from "@/public/google.png";

const SignIn = async () => {
  const providers = await getProviders();
  return (
    <div>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id)}
              className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl  transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
            >
              <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
              <span className="ml-4">Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
    </div>
  );
};

export default SignIn;
