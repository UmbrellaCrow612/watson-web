export const WatsonScript = `window.watsonAssistantChatOptions = {
    integrationID: "9e1d9225-e6df-4f38-a99f-351d5418a8bd",
    region: "eu-gb",
    serviceInstanceID: "9105472d-0990-4acc-a349-661d4607d608",
    onLoad: function(instance) { instance.render(); },
    enableFocusTrap:true
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });`;