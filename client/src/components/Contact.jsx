import React from "react";

const Contact = () => {
  return (
    <form class="flex flex-col items-center justify-center h-screen w-full text-sm">
      <p class="text-lg text-gray-700 font-medium pb-2">Contact Us</p>
      <h1 class="text-4xl font-semibold text-gray-800 pb-4">
        Get in touch with us
      </h1>
      <p class="text-sm max-w-2xl text-gray-500 text-center pb-10">
        "Have questions, feedback, or need support? We’re here to help. Reach
        out to us anytime — whether you're a student, educator, or partner. Our
        team is ready to assist you with course information, technical issues,
        or collaboration opportunities.
      </p>

      <div class="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div class="w-full">
          <label class="text-black/70" for="name">
            Your Name
          </label>
          <input
            class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            type="text"
            required
          />
        </div>
        <div class="w-full">
          <label class="text-black/70" for="name">
            Your Email
          </label>
          <input
            class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            type="email"
            required
          />
        </div>
      </div>

      <div class="mt-6 w-[350px] md:w-[700px]">
        <label class="text-black/70" for="name">
          Message
        </label>
        <textarea
          class="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="mt-5 bg-gray-800 hover:bg-gray-900 cursor-pointer text-white h-12 w-56 px-4 rounded active:scale-95 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contact;
