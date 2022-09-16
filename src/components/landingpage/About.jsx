import React from "react";
import ContentBlock from "./ContentBlock";

const About = () => {
  return (
    <div>
      <div className="py-16 ">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6" >
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="space-y-6 md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-cyan-500 font-bold md:text-5xl" id="about">
                About Us
              </h2>
              <div className="space-y-4">
                <p className="mt-6 text-2xl font-light text-gray-400">
                  The maximum people in the world searching for the best earning
                  ways of income from online. Actually, Make Money Online- the
                  process from where you will get the best earning ways from
                  your own home. And we do the best to make you a successful
                  person by telling all the alternatives.
                </p>
              </div>
              <a
                href="#"
                className="block w-full py-3 px-6 text-center rounded-full transition  sm:w-max"
              >
                <span className="block text-blue-900 font-semibold text-sm">
                  Learn More
                </span>
              </a>
            </div>
            <div className="md:5/12 lg:w-6/12">
              <img
                src="https://i.ibb.co/Wzzx24M/undraw-Team-spirit-re-yl1v.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </div>

      <ContentBlock
        img="https://i.ibb.co/BC41JhK/undraw-Credit-card-payment-re-o911.png"
        heading="1. Super Affiliate System"
        content={
          "Most people who make huge of money from digital marketing, typically invest a primary portion of their online advertising and marketing education and learning in the direction of learning the craft of affiliate marketing…"
        }
        direction="flex-col md:flex-row"
      />

      <ContentBlock
        img="https://i.ibb.co/6Jdr7Mg/undraw-Investing-re-bov7.png"
        heading="2. Passive Profit"
        content={
          "Are actually you looking for a Passive Profit? Is Easy Earnings Pages a fraud? Can you really create cash along with Passive Earnings Web pages?"
        }
        direction="flex-col md:flex-row-reverse"
      />

      <ContentBlock
        img="https://i.ibb.co/253LmFc/undraw-Web-search-re-efla.png"
        heading="3. Free Traffic System"
        content={
          "Just how to obtain more website traffic on the site? Free Traffic System is the very most looking subject matter on net advertising today, it performs not concern you are marketing your own item or even market associate marketing, and also looking for AdSense hit, if you possess not any kind of visitor traffic your site, therefore you are going to not be receiving any kind of compensation"
        }
        direction="flex-col md:flex-row"
      />

      <ContentBlock
        img="https://i.ibb.co/Y7C3Fgx/undraw-Online-payments-re-y8f2.png"
        heading="4. Click Wealth System"
        content={
          "Leading a financial freedom life is truly a tough activity. Yet when this doesn’t occur then your lifespan might be at risk. Folks try to keep them inside the comfort zone of the fund and also support their loved ones and also really loved ones."
        }
        direction="flex-col md:flex-row-reverse"
      />
    </div>
  );
};

export default About;
