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
      "https://imgs.search.brave.com/WxSN4C9MRwHxPIkzXl1NLAaQUgavJHU2X0oFl0e8OU4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRhL0dpdEh1Yl9N/YXJrLnBuZw",
  },
  {
    id: 14,
    title: "Git",
    image:
      "https://imgs.search.brave.com/APq7nMmzxFiAGHPfukG2NugbtLWpnAEAPdOglBHEApE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4MWNlZjEw/MTRjMGI1ZTQ4YmUu/cG5n",
  },
  {
    id: 15,
    title: "ChatGPT",
    image:
      "https://imgs.search.brave.com/a4YTD6sUwgCwOvsO5Lglv4IJ8dYvmSSYIvwI07p5cqU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/M2M1MmFmNTkwMjUw/ZGQzNGJkNmE5YWIu/cG5n",
  },
  {
    id: 16,
    title: "Tailwind CSS",
    image:
      "https://imgs.search.brave.com/YTnhvxxkXrlR857u5Fz-jRDIlpDzkPWFyBP8WbC4z7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JlYXRpdmUtdGlt/LmNvbS90d2NvbXBv/bmVudHMvaW1hZ2Vz/L2FwL3RhaWx3aW5k/LWxvZ28ucG5n",
  },
  {
    id: 17,
    title: "BootStrap",
    image:
      "https://imgs.search.brave.com/oY9AW9ZJYhpIMp_LX1bT7uIcWHDztJ6bhvmV51M0xKc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2Jvb3RzdHJh/cC1sb2dvLXBuZy1v/cGVuLTIwMDAucG5n",
  },
  {
    id: 18,
    title: "Imagekit io",
    image:
      "https://imgs.search.brave.com/rCN6zVwz2oIbKwzJ-qCe9eBJzX2GZh-MMJeBPBFwTPs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdHdhcmV3b3Js/ZC5jby9hc3NldHMv/c29mdHdhcmUvbG9n/by9pbWFnZWtpdGlv/LmpwZw",
  },
  {
    id: 19,
    title: "Socket io",
    image:
      "https://imgs.search.brave.com/crOly_3RxXMTFHpUIJpaBEHd-jXghxd4jzIm_oIvhSQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1NvY2tldC1p/by5zdmc",
  },
  {
    id: 20,
    title: "Cloudinary",
    image:
      "https://imgs.search.brave.com/O9oSfrKpVF3HODcetqGA-lv20lKA8l8zB82GlZCqJFs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cy52/LWNkbi5uZXQvNjAz/NjcwMy91cGxvYWRz/L3VzZXJwaWNzL01T/WUNXOTBKSFlFTi9u/MkRHMkU5TFZVS1lT/LnBuZw",
  },
  {
    id: 21,
    title: "Zod",
    image:
      "https://imgs.search.brave.com/qvQB62rh5yNPiu_-2TUG0Equci6A48BCDv4lGBmZqpg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5zdmdjZG4uaW8v/bG9nb3Mvem9kLnN2/Zw",
  },
  {
    id: 22,
    title: "Prisma",
    image: "https://cdn.worldvectorlogo.com/logos/prisma-4.svg",
  },
  {
    id: 23,
    title: "Redux",
    image:
      "https://imgs.search.brave.com/3hnsVi10Ppu1tNeTwxrKnyhP4iAKIokHvdPHjsujTCE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MzA5YmNlZjEw/MTRjMGI1ZTRhOWEu/cG5n",
  },
  {
    id: 24,
    title: "Docker",
    image:
      "https://imgs.search.brave.com/HR0zaJRwAbtCuRslERa-kzywu4mXt87tBhnOdLqHnR8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYW5k/LWJyYW5kcy81MTIv/OTdfRG9ja2VyX2xv/Z29fbG9nb3MtNTEy/LnBuZw",
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
