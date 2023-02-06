import ChatBubble from "@/components/ChatBubble";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { AiOutlineArrowRight, AiOutlineUsergroupAdd } from "react-icons/ai";
import { TbFileCertificate } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import CountUp from "react-countup";

export default function Page() {
  return (
    <>
      <Script
        id="watson"
        strategy="lazyOnload"
        onError={() => {
          console.log("Watson not working index.tsx");
        }}
      >
        {` window.watsonAssistantChatOptions = {
    integrationID: "27a99238-c2cb-4b65-a064-20382341bfdd", // The ID of this integration.
    region: "eu-gb", // The region your integration is hosted in.
    serviceInstanceID: "9105472d-0990-4acc-a349-661d4607d608", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });`}
      </Script>
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
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <section className="h-[25rem] flex items-center justify-center text-center">
        <h4 className="text-xl font-bold lg:text-2xl">
          Content and technology you can trust, backed by experts.
        </h4>
      </section>
    </>
  );
}
