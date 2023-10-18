import { ButtonLink } from "@/components/ButtonLink";
import { content } from "@/lib/content";
import { Permanent_Marker } from "next/font/google";
const permanent_market = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const porfolios = content.portfolioLinks.map((portfolio) => {
    return (
      <ButtonLink key={portfolio.link} href={portfolio.link} {...portfolio}>
        {portfolio.label}
      </ButtonLink>
    );
  });

  return (
    <main className="relative container max-w-[600px] mx-auto flex flex-col justify-center items-center gap-5 px-4 py-5 min-h-screen">
      <div className="w-full">
        <div className="mb-10 md:mb-16">
          <h1 className="text-slate-800 text-7xl font-bold mb-4">
            {content.name}
          </h1>

          <h2 className="block text-slate-700 text-4xl">
            {content.roles.map((role) => (
              <span key={`role-span-${role}`} className="highlight mr-1">
                {role}
              </span>
            ))}
          </h2>
        </div>

        <div className="relative z-5 flex flex-col justify-center items-center gap-3 md:gap-5">
          <div className={`${permanent_market.className} relative w-full`}>
            <div className="flex pl-5 items-end md:items-start md:pl-0 md:flex-col md:absolute md:-top-12 md:-right-[8rem] md:z-10 md:rotate-45">
              <div className="flex flex-col md:mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2.5rem"
                  viewBox="0 0 640 512"
                  fill="#34d399"
                >
                  {/* Font Awesome Free 6.4.2 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license (Commercial License)
                    Copyright 2023 Fonticons, Inc. */}
                  <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
                </svg>
                <span className="text-lg text-emerald-400">
                  {content.callout_2}
                </span>
              </div>
              <svg
                width="65"
                height="40"
                viewBox="0 0 96 40"
                fill="none"
                className="stroke-emerald-400 rotate-[200deg] mb-4 ml-2 md:mb-0 md:ml-0 md:mr-2 md:-rotate-[55deg]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M93.0681 3C72.3063 18.0061 57.7731 25.925 32.2716 21.1435C26.0822 19.983 15.9133 18.8754 10.945 14.459C8.12295 11.9505 3.74946 11.7165 9.24741 9.57834C13.7751 7.81753 20.3406 4.90981 25.2689 4.90981C27.0487 4.90981 9.62202 9.55411 4.26061 10.7455C-2.59384 12.2686 20.5637 33.6269 24.314 37.3771"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {porfolios}

          <div className={`${permanent_market.className} relative w-full`}>
            <div className="flex gap-2 items-end md:absolute md:-left-[5rem]">
              <span className="p-2 text-3xl text-emerald-400 rounded-full">
                {content.callout_1}
              </span>

              <svg
                width="80"
                height="101"
                viewBox="0 0 118 101"
                fill="none"
                className="stroke-emerald-400"
                style={{ transform: "scaleX(-1)" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M114.615 85.8624C103.594 92.2524 65.6964 110.054 58.4339 86.3946C56.377 79.6934 61.0537 66.6818 70.1558 68.3404C82.2935 70.552 74.7241 86.9513 67.8191 90.5029C49.6289 99.8591 26.831 84.7367 17.5428 69.4799C9.74269 56.6674 8.9432 40.5399 10.3937 26.0259C11.0741 19.2175 14.6296 13.7399 15.6557 7.2199C17.243 -2.8668 10.0769 9.62819 5.73028 13.104C-3.15117 20.2061 11.6278 9.121 14.6757 6.65451C19.7045 2.58493 26.3014 17.3662 29.6958 22.5037"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
