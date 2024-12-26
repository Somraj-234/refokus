import { a } from "motion/react-client";
import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-24 ">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold leading-none tracking-tight mb-2">
            somraj.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4 ">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {[
              {
                account: "instagram",
                link: "https://www.instagram.com/somrajj234/",
              },
              {
                account: "twitter (x?)",
                link: "https://x.com/somrajjj234",
              },
              {
                account: "LinkedIn",
                link: "https://www.linkedin.com/in/somrajjadhav/",
              },
            ].map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="block mt-3 text-zinc-600 capitalize"
              >
                {item.account}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {[
              {
                account: "github",
                link: "https://github.com/Somraj-234",
              },
              {
                account: "behance",
                link: "https://www.behance.net/somrajjadhav",
              },
              {
                account: "My Products",
                link: "https://234studios.gumroad.com/",
              },
            ].map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="block mt-3 text-zinc-600 capitalize"
              >
                {item.account}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end gap-2">
            <p className="text-right">
              I imagine, I design and I develope! For any queries send email.
            </p>
            <a
              href="mailto:jadhavsomraj234@gmail.com"
              className="rounded-sm py-2 px-5 bg-blue-600 text-white text-sm"
            >
              Shoot Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
