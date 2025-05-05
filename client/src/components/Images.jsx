import React from "react";

const images = [
  {
    id: 1,
    title: "Html",
    image:
      "https://imgs.search.brave.com/KIMjB0eK1Q60ysuc9PhEWrJ5ycfh3siH6mPUXZ_ZrnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzYxL0hU/TUw1X2xvZ29fYW5k/X3dvcmRtYXJrLnN2/Zy82NDBweC1IVE1M/NV9sb2dvX2FuZF93/b3JkbWFyay5zdmcu/cG5n",
  },
  {
    id: 2,
    title: "css",
    image:
      "https://imgs.search.brave.com/ArK-KFY7epYNK-dKbHolMedOxuhJEq8zj_JjKGPbYoc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2FiL09m/ZmljaWFsX0NTU19M/b2dvLnN2Zy85NjBw/eC1PZmZpY2lhbF9D/U1NfTG9nby5zdmcu/cG5n",
  },
  {
    id: 3,
    title: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 4,
    title: "React.js",
    image:
      "https://imgs.search.brave.com/reuW8Iovg5aESMldfdwTRsenii8yWbhmUs211UCHcyo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2E3L1Jl/YWN0LWljb24uc3Zn/LzY0MHB4LVJlYWN0/LWljb24uc3ZnLnBu/Zw",
  },
  {
    id: 5,
    title: "Next.js",
    image:
      "https://imgs.search.brave.com/XPhR3IXXb7kFoH73n4dSr1dIlaOP-kATRwonlhTYaqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84LzhlL05l/eHRqcy1sb2dvLnN2/Zy8yNTBweC1OZXh0/anMtbG9nby5zdmcu/cG5n",
  },
  {
    id: 6,
    title: "Node.js",
    image:
      "https://imgs.search.brave.com/ABBI3s6CCHkf8EPfQDIuX4X9cq5v6TLxpkEWIVzPpCA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2Q5L05v/ZGUuanNfbG9nby5z/dmcvNjQwcHgtTm9k/ZS5qc19sb2dvLnN2/Zy5wbmc",
  },
  {
    id: 7,
    title: "TypeScript",
    image:
      "https://imgs.search.brave.com/ZmT0JPRslVqgnJel3KpDzyzeQSju1AmgPX8i4k4W9HY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRjL1R5/cGVzY3JpcHRfbG9n/b18yMDIwLnN2Zy82/NDBweC1UeXBlc2Ny/aXB0X2xvZ29fMjAy/MC5zdmcucG5n",
  },
  {
    id: 8,
    title: "MongoDB",
    image:
      "https://imgs.search.brave.com/cZ0q20fBGwlKQfHnzffFHDvjbvM9UUPRV1MqpbjRnQo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NS81YS9Nb25nb0RC/X0ZvcmVzLUdyZWVu/LnN2Zy81MTJweC1N/b25nb0RCX0ZvcmVz/LUdyZWVuLnN2Zy5w/bmc",
  },
  {
    id: 9,
    title: "NeonDB",
    image:
      "https://imgs.search.brave.com/4O17WY1btmNRl63MWNmrPUbxOf-4nut9eU_461uSNXo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9uZW9u/LnRlY2gvYnJhbmQv/bmVvbi1sb2dvLWxp/Z2h0LWNvbG9yLnN2/Zw",
  },
  {
    id: 10,
    title: "PostgreSQL",
    image:
      "https://imgs.search.brave.com/3bH1E-hD2lmNDiR_PE8xkzwh8JEfF4m9L79TGNxdbRg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI5L1Bv/c3RncmVzcWxfZWxl/cGhhbnQuc3ZnLzY0/MHB4LVBvc3RncmVz/cWxfZWxlcGhhbnQu/c3ZnLnBuZw",
  },
  {
    id: 11,
    title: "Postman",
    image:
      "https://imgs.search.brave.com/DbTWivAi--ktY5uLj_UhNIP_GUWInzUCzU1e8pi3xT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmNjMWI1MTE1MGQ1/ZGU5YTNkYWQ1Zjgu/cG5n",
  },
  {
    id: 12,
    title: "Clerk",
    image:
      "https://imgs.search.brave.com/PrZUC2eslLmCBWhs7IyDNZoi8C6reEDdMqoTWQxQBnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NGM3YTMxN2FlYTky/OTEyMzkyYzA0MjAv/NjVhYWFjMTBjZWZi/MjE5MjRhNjI2OTJi/X2NsZXJrLXB1cnBs/ZS1sb2dvLnBuZw",
  },
  {
    id: 13,
    title: "Github",
    image:
      "https://imgs.search.brave.com/PrZUC2eslLmCBWhs7IyDNZoi8C6reEDdMqoTWQxQBnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NGM3YTMxN2FlYTky/OTEyMzkyYzA0MjAv/NjVhYWFjMTBjZWZi/MjE5MjRhNjI2OTJi/X2NsZXJrLXB1cnBs/ZS1sb2dvLnBuZw",
  },
  {
    id: 14,
    title: "Git",
    image:
      "https://imgs.search.brave.com/PrZUC2eslLmCBWhs7IyDNZoi8C6reEDdMqoTWQxQBnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NGM3YTMxN2FlYTky/OTEyMzkyYzA0MjAv/NjVhYWFjMTBjZWZi/MjE5MjRhNjI2OTJi/X2NsZXJrLXB1cnBs/ZS1sb2dvLnBuZw",
  },
  {
    id: 15,
    title: "ChatGPT",
    image:
      "https://imgs.search.brave.com/PrZUC2eslLmCBWhs7IyDNZoi8C6reEDdMqoTWQxQBnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NGM3YTMxN2FlYTky/OTEyMzkyYzA0MjAv/NjVhYWFjMTBjZWZi/MjE5MjRhNjI2OTJi/X2NsZXJrLXB1cnBs/ZS1sb2dvLnBuZw",
  },
  {
    id: 16,
    title: "Tailwind CSS",
    image:
      "https://imgs.search.brave.com/Rl0QcUiKi2aWQhORQSgZmIdsT3o9UjOSUN-VwOmVc_Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JhL1N0cmlwZV9M/b2dvLF9yZXZpc2Vk/XzIwMTYuc3Zn",
  },
];

const Images = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center py-6">
      {images.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-3 flex-wrap cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-16 w-16 object-contain"
          />
          <h1 className="text-lg text-[#404258] font-semibold capitalize">
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Images;
