import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  instagram?: string;
  linkedin?: string;
}

interface TeamFlipCardsProps {
  members: TeamMember[];
  domain: string;
}

const TeamFlipCards: React.FC<TeamFlipCardsProps> = ({ members, domain }) => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleSocialClick = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="py-12 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {domain} <span className="text-[#00ffff]">Team</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation and entrepreneurship in our {domain.toLowerCase()} team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="perspective-1000 w-full h-[320px] cursor-pointer group"
              onClick={() => handleCardFlip(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-600 ease-out transform-style-preserve-3d ${
                  flippedCards.has(index) ? 'rotate-y-180' : ''
                }`}
              >
                <div className="absolute inset-0 backface-hidden bg-[#1a1a1a] border border-[#00ffff]/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#00ffff]/40 hover:shadow-lg hover:shadow-[#00ffff]/10 transition-all duration-300 hover:scale-105">
                  <div className="relative mb-4">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-[#00ffff]/30"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                  <div className="mt-4 text-xs text-[#00ffff] opacity-70">
                    Click to flip
                  </div>
                </div>

                <div className="absolute inset-0 backface-hidden bg-[#1a1a1a] border border-[#00ffff]/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center rotate-y-180 hover:border-[#00ffff]/40 hover:shadow-lg hover:shadow-[#00ffff]/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{member.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{member.role}</p>
                  
                  <div className="flex gap-4">
                    {member.linkedin && (
                      <button
                        onClick={(e) => handleSocialClick(e, member.linkedin)}
                        className="w-12 h-12 rounded-full bg-[#0077b5] hover:bg-[#005885] transition-colors duration-300 flex items-center justify-center"
                        title="LinkedIn"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                        </svg>
                      </button>
                    )}
                    
                    {member.instagram && (
                      <button
                        onClick={(e) => handleSocialClick(e, member.instagram)}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] hover:from-[#e0852a] hover:via-[#d55a2a] hover:via-[#c21f2a] hover:via-[#b01f4a] hover:to-[#a0156a] transition-all duration-300 flex items-center justify-center"
                        title="Instagram"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28-.07-1.688-.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  <div className="mt-4 text-xs text-[#00ffff] opacity-70">
                    Click to flip back
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .duration-600 {
          transition-duration: 0.6s;
        }
        .ease-out {
          transition-timing-function: cubic-bezier(0.4, 0.2, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default TeamFlipCards; 