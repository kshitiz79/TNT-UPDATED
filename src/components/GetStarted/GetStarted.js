"use client";
"use client";
import { useRouter } from "next/navigation";

const GetStarted = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/contact-us"); // Update with the correct route
  };




  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="container mx-auto py-6">
        <div className="flex flex-col items-center gap-6 bg-white text-center p-8 lg:rounded-[100px] rounded-2xl border shadow-lg">
          <span className="lg:text-4xl text-xl font-bold mt-6 text-blue-950">
            Empower Your Tech Journey with TnT Techies Guide
          </span>
          <a className="text-blue-400 lg:text-lg -mt-5 font-medium px-6 text-sm">
          TnT Techies Guide empowers individuals  and organizations with <br/> expert training and consulting in technology.
          </a>
          <button
      onClick={handleRedirect}
      className="text-white border border-white lg:px-4 lg:py-2 px-2 py-1 rounded-full shadow-lg hover:bg-blue-700 hover:text-white bg-green-400 transition-all duration-300 -mt-5 mb-6 text-xs lg:text-lg"
    >
      Get Started With Us
    </button>
        </div>
      </div>

      {/* Message Form Modal */}

    </section>
  );
};

export default GetStarted;
