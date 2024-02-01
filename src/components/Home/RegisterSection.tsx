/* eslint-disable @next/next/no-img-element */
export const RegisterSection = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative w-full min-h-[1024px]">
          <div className="absolute w-full h-full grid grid-cols-12">
            <div className=" hidden lg:block col-span-6 bg-[#191c26]"></div>
            <div className=" hidden lg:flex  col-span-6 py-[96px] px-[86px]  items-center justify-center  bg-[#090A0D]">
              <img 
                className="w-full h-full"
                // src="assets/images/tho.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative h-full w-[1080px]  py-10 lg:py-0 max-w-full  mx-auto  flex items-center ">
            <div className="grid grid-cols-12 text-[#fff] items-center ">
              <div className="col-span-12 p-5 lg:p-0 lg:col-span-8">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6">
                    {" "}
                    <div className="w-[60px] h-[1px] bg-[#A9AFC3]"></div> LET’S
                    GET STARTED
                  </div>
                  <div className="flex flex-col gap-6">
                    <h1 className=" flex flex-col font-bold md:text-[60px] 2xl:text-[64px] text-[#ffff] font-poppins">
                      <span>Get a Free</span>
                      <span>Consultation</span>
                    </h1>
                    <div className="w-2/3">
                      <span className="md:text-[18px] 2xl:text-[22px] text-[#A9AFC3] ">
                        We always try to implement our creative ideas at the
                        highest level. Tell us about your project and we will
                        make it work.
                      </span>
                    </div>
                    <form action="" className="flex flex-col gap-9 mt-8">
                      <div className="flex gap-8">
                        <input
                          className="flex-1 outline-none border-b border-b-[#3A3F50] bg-transparent pb-4"
                          type="text"
                          placeholder="Name"
                        />
                        <input
                          className="flex-1 outline-none border-b border-b-[#3A3F50] bg-transparent pb-4"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                      <div className="flex flex-col gap-8">
                        <span>Message</span>
                        <textarea
                          className="outline-none border-b border-b-[#3A3F50] bg-transparent resize-none"
                          cols={20}
                        ></textarea>
                      </div>
                      <button className="rounded-[50px] w-fit mt-4  py-[15px] px-[35px] border border-[#DBB070] text-[#fff]">
                        Send message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="block lg:hidden col-span-12 lg:col-span-4  p-5 lg:p-0 ">
                <img className="w-full" src="assets/images/tho.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
