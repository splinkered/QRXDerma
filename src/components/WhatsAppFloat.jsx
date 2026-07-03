import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      <div
        className={`mr-3 px-4 py-2 bg-[#091426] text-white rounded-lg shadow-xl flex flex-col items-start transition-all duration-300 pointer-events-none transform ${showTooltip
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-2'
          }`}
      >
        <span className="text-xs font-semibold text-[#71F8E4]">Chat with us</span>
        <span className="text-[10px] text-[#8590A6]">Responds in minutes</span>
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/917892653131?text='Hi, I'm interested in your services, can I know how Qrux Studios can help my business'"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-[#006B5F] hover:bg-[#005249] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" fill="white" />
      </a>
    </div>
  );
}
