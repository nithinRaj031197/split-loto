import React from "react";

const LandingBody = () => {
  return (
    <>
       
        <div className="space-y-10 py-5">
          <section
            style={{
              borderRadius: "31px",
              background: "linear-gradient(145deg, #663d2d, #000)",
              // boxShadow: "-6px 6px 42px #6e4231, 6px -6px 42px #000",
            }}
            className="mx-5 text-white p-10 rounded-md shadow-md animate-fadeIn flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <div className="text-center md:text-left md:flex-1 md:mr-8">
              <h4 className="text-4xl font-bold">
                Less stress when sharing expenses <span>with anyone.</span>
              </h4>
              <p className="mt-4">
                Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
              </p>
              <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                Sign Up
              </button>
              <p className="mt-4">Free for iPhone, Android, and web.</p>
            </div>
            <div className="flex justify-center mt-8 md:mt-0 md:flex-1">
              <img
                src="https://assets.splitwise.com/assets/home_page/fixtures/asset1-b7eef5474a87c4fa99310094be435f18d83a7e87427b0d035cf9fd5382a92e12.png"
                alt="Track Balance"
                className="mt-8"
              />
            </div>
          </section>

          <section className="bg-dark flex flex-col w-full h-full font-poppins !font-light rounded-md shadow-md animate-fadeIn delay-200">
            <div className="flex w-full text-white">
              <div className="bg-[#2f1b12] w-1/2 h-full flex flex-col items-center">
                <h2 className="text-center font-bold text-2xl mt-8 text-white">Track Balance</h2>
                <p className="text-center mt-4 text-white">
                  Keep track of shared expenses, balances, and who owes who.
                </p>
                <img
                  src="https://assets.splitwise.com/assets/home_page/fixtures/asset1-b7eef5474a87c4fa99310094be435f18d83a7e87427b0d035cf9fd5382a92e12.png"
                  alt="Track Balance"
                  className="mt-8"
                />
              </div>
              <div className="bg-[#deaf84] w-1/2 h-full flex flex-col items-center">
                <h2 className="text-center font-bold text-2xl mt-8 text-white">Organize expenses</h2>
                <p className="text-center mt-4 text-white">
                  Split expenses with any group: trips, housemates, friends, and family.
                </p>
                <img
                  src="https://assets.splitwise.com/assets/home_page/fixtures/asset2-195991789f28e51ed734fbee4b87bd1fe1d54363aab190b610c79b7e03cf665a.png"
                  alt="Organize expenses"
                  className="mt-8"
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="bg-[#97704f] w-1/2 h-full flex flex-col items-center">
                <h2 className="text-center font-bold text-2xl mt-8 text-white">Add expenses easily</h2>
                <p className="text-center mt-4 text-white">
                  Quickly add expenses on the go before you forget who paid.
                </p>
                <img
                  src="https://assets.splitwise.com/assets/home_page/fixtures/asset3-d1bdfeae0e4d9a89351d416b3991160e38c2391cd0db26f6c6cb0331649fa92c.png"
                  alt="Add expenses easily"
                  className="mt-8"
                />
              </div>
              <div className="bg-[#43392f] w-1/2 h-full flex flex-col items-center">
                <h2 className="text-center font-bold text-2xl mt-8 text-white">Pay friends back</h2>
                <p className="text-center mt-4 text-white">
                  Settle up with a friend and record any cash or online payment.
                </p>
                <img
                  src="https://assets.splitwise.com/assets/home_page/fixtures/asset4-3abaa95d20d133c1948fa1e3d8047890c3d7e274130cfcba5c2a304f74aa1353.png"
                  alt="Pay friends back"
                  className="mt-8"
                />
              </div>
            </div>
            <div className="h-full w-full bg-[#714432] flex justify-around items-center">
              <div className="text-center">
                <h3 className="font-bold text-4xl mt-6 text-white">Get even more with PRO</h3>
                <p className="max-w-xs mx-auto mt-4 text-white">
                  Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!
                </p>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 mt-6">
                  Sign Up
                </button>
              </div>
              <img
                src="https://assets.splitwise.com/assets/home_page/fixtures/asset5-814c541b198b81fcf8ebe913f6a9731e6d3fe9840241ba3bb7274d15ce9cad95.png"
                alt="Pay friends back"
                className="mt-[10rem]"
              />
            </div>
          </section>
        </div>

    </>
  );
};

export default LandingBody;
