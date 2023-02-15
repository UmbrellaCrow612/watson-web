import ChatBubble from "@/components/ChatBubble";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { AiOutlineArrowRight, AiOutlineUsergroupAdd } from "react-icons/ai";
import { TbFileCertificate } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import CountUp from "react-countup";
import Card from "@/components/Card";

export default function Page() {
  return (
    <>
      <Head>
        <title>IBM AI Skills Build</title>
        <meta
          name="keywords"
          content="IBM AI SKILLS BUILD LEARN STUDENT CYBER RESOURCE LINKS NAVIGATE"
        />
        <meta
          name="description"
          content="The portal to find and navigate the vast amount of resources and learning materials offered by IBM skills build"
        />

        {/* OG stuff */}
        <meta property="og:title" content="IBM AI SKILLS BUILD" />
        <meta property="og:site_name" content="IBM AI SKILLS BUILD" />
        <meta property="og:url" content="https://watson-web.vercel.app" />
        <meta
          property="og:description"
          content="The portal to find and navigate the vast amount of resources and learning materials offered by IBM skills build "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://s.marketwatch.com/public/resources/images/MW-GR716_IBM_10_ZH_20181012135603.jpg"
        />
        {/* OG stuff ends */}

        {/* Meta default tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <section className="h-[30rem] flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-xl font-bold lg:text-2xl">
          Search IBM skills website with ease using our advanced AI chat bot
        </h1>
        <ChatBubble
          text="Hi I want to learn about cyber security"
          receivingMessage={false}
        />
        <ChatBubble
          text="Sure, here are some resources ..."
          receivingMessage={true}
        />
      </section>
      {/* Steps */}
      <section className="h-[25rem] gap-3 text-center flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold md:text-2xl">
          How to use our AI Chat bot
        </h2>
        <ul className="steps steps-vertical">
          <li className="step step-primary">Click on the bottom right icon</li>
          <li className="step step-primary">
            Write what you want to learn, achieve or get
          </li>
          <li className="step step-primary">Press send</li>
          <li className="step step-primary">Receive a pathway of links</li>
        </ul>
      </section>
      {/* IBM profile */}
      <section className="h-[30rem] flex flex-col gap-4 items-center justify-center text-center">
        <h3 className="text-xl font-bold md:text-2xl">
          Make an IBM skills build account to track you&apos;re progress
        </h3>
        <Link
          href="https://skillsbuild.org/"
          className="gap-3 text-xl btn btn-primary"
        >
          Go <AiOutlineArrowRight />
        </Link>
      </section>
      {/* Stats  */}
      <section className="h-[30rem] flex items-center justify-center">
        <div className="shadow stats stats-vertical lg:stats-horizontal">
          <div className="stat">
            <div className="stat-figure text-primary">
              <AiOutlineUsergroupAdd className="text-3xl" />
            </div>
            <div className="stat-title">Unique SkillsBuild users</div>
            <div className="stat-value text-primary">
              <CountUp
                start={0}
                end={2200000}
                duration={35}
                separator=" "
                delay={1}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="stat-desc">15% more than last year</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <TbFileCertificate className="text-3xl" />
            </div>
            <div className="stat-title">Digital credentials issued</div>
            <div className="stat-value text-secondary">
              <CountUp
                start={0}
                end={220000}
                duration={40}
                separator=" "
                delay={1}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="stat-desc">35% more than last year</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaRegHandshake className="text-3xl" />
            </div>
            <div className="stat-title">Global partners</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={500}
                duration={45}
                separator=" "
                delay={1}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="stat-desc text-secondary">More everyday</div>
          </div>
        </div>
      </section>
      {/* Trust brand */}
      <section className="h-[10rem] flex items-center justify-center text-center">
        <h4 className="text-xl font-bold lg:text-2xl">
          Content and technology you can trust, backed by experts.
        </h4>
      </section>

      {/* Cards */}

      <section className="flex flex-wrap items-center h-auto gap-5 py-5 justify-evenly">
        <Card
          imgSrc="/images/fortinet.svg"
          imgAlt="Fortinet"
          cardTitle="Fortinet"
          href="https://www.fortinet.com/"
          cardBody="Global Leader of Cyber Security Solutions and Services"
        />
        <Card
          imgSrc="/images/ibm.svg"
          imgAlt="ibm"
          cardTitle="IBM"
          href="https://www.ibm.com/uk-en"
          cardBody="Creators, partners and clients putting technology to work in the real world"
        />
        <Card
          imgSrc="/images/ipma.png"
          imgAlt="impa"
          cardTitle="IMPA"
          href="https://www.ipma.world/"
          cardBody="Qualification standards for working in project management"
        />
        <Card
          imgSrc="/images/red-hat.svg"
          imgAlt="red hat"
          cardTitle="Red Hat"
          href="https://www.redhat.com/en"
          cardBody="Deliver any application, on any cloud, enterprise open source leader"
        />
      </section>

      {/* Phone mockup */}

      <section className="flex flex-col items-center justify-center gap-5 py-20 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">
          Download our app to keep you on top
        </h2>
        {/* Flex container */}
        <div className="flex flex-wrap items-center w-full gap-5 justify-evenly">
          {/* Phone 1 */}
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="flex flex-col items-center justify-center gap-5 artboard artboard-demo phone-1">
                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Skills Build
                </h3>
                <div>
                  On{" "}
                  <Link href="/" className="link">
                    Android
                  </Link>{" "}
                  and{" "}
                  <Link href="/" className="link">
                    ios
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Phone 2 */}
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="flex flex-col items-center justify-center gap-5 artboard artboard-demo phone-1">
                <ChatBubble
                  text="Hey i want to learn ..."
                  receivingMessage={false}
                />
                <ChatBubble
                  text="Sure here are resources on the app ..."
                  receivingMessage={true}
                />
                <span>
                  Have chats in app, save them, have a easy time learning what
                  you need
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Window mockup */}

      <section className="py-5">
        <div className="border mockup-window bg-base-300">
          <div className="flex justify-center px-4 py-16 bg-base-200">
            Be able to learn on both on mobile and web at the same time
          </div>
        </div>
      </section>

      {/* Feedback form */}

      <form className="flex flex-col items-center justify-center h-auto gap-10 py-10">
        <h3 className="text-3xl font-bold md:text-5xl">Contact Us</h3>
        <input
          type="email"
          placeholder="Email"
          className="w-full input input-bordered"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full input input-bordered"
          required
        />
        <textarea
          className="w-full textarea textarea-bordered"
          placeholder="Message"
          required
        ></textarea>
        <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
          <button className="btn-primary btn">Submit</button>
          <button className="btn btn-outline">Cancel</button>
        </div>
      </form>
    </>
  );
}
