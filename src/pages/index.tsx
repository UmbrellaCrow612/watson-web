import ChatBubble from "@/components/ChatBubble";
import Head from "next/head";
import Script from "next/script";

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
        {`window.watsonAssistantChatOptions = {
    integrationID: "9e1d9225-e6df-4f38-a99f-351d5418a8bd", 
    region: "eu-gb", // The region your integration is hosted in.
    serviceInstanceID: "9105472d-0990-4acc-a349-661d4607d608",
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
      <div className="h-[40rem] flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="font-bold text-xl lg:text-2xl">
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
      </div>
    </>
  );
}
