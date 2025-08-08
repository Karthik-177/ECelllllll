import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import "./FlipCard.css";

const NewTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("Leadership");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Sort members by hierarchy: CHIEF, VICE CHIEF, LEAD, CO-LEAD, then others
  const sortMembersByHierarchy = (members: any[]) => {
    const hierarchy = ['CHIEF', 'VICE CHIEF', 'STARTUP ADVISOR & STRATEGY', 'LEAD', 'CO-LEAD', 'AD LEAD', 'PR LEAD', 'REPRESENTATIVE', 'EDITOR', 'PR', 'TEAM MEMBER'];
    return [...members].sort((a, b) => {
      const aIndex = hierarchy.indexOf(a.role);
      const bIndex = hierarchy.indexOf(b.role);
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = {
    Leadership: [
      {
        name: "RAMA KRISNA",
        department: "CSE(AI&ML)",
        role: "CHIEF",
        image: "/lovable-uploads/c6e8db06-dedc-46a5-b959-cf93dfda1097.png",
        hasWomen: false
      },
      {
        name: "NIKITHA VARMA",
        department: "CSE(AI&ML)",
        role: "VICE CHIEF",
        image: "/lovable-uploads/4146a18d-65b8-4df1-b721-5827cf855528.png",
        hasWomen: true
      },
      {
        name: "KHAJA GHOUSE KHAN",
        department: "CSG",
        role: "STARTUP ADVISOR & STRATEGY",
        image: "/lovable-uploads/63586a25-3d6a-4930-82a5-d32f8c08d31b.png",
        hasWomen: false
      }
    ],
    "Technical Team": [
      {
        name: "SOHAIB AKTHAR",
        department: "CSE(AI&ML)",
        role: "LEAD",
        image: "/lovable-uploads/ee9928b1-9a18-42ff-b42f-aeebe26ffab8.png",
        hasWomen: false
      },
      {
        name: "PRANAY",
        department: "CSE",
        role: "CO-LEAD",
        image: "/lovable-uploads/9eb7e361-3016-4b0a-9e32-2fd7c970e9c5.png",
        hasWomen: false
      },
      {
        name: "ABDUL SOHAIL",
        department: "CSE",
        role: "TEAM MEMBER",
        image: "/lovable-uploads/61a7e0ed-db68-4489-9f78-6e49b4fe51d3.png",
        hasWomen: false
      },
      {
        name: "KARTHIK",
        department: "AI&DS",
        role: "TEAM MEMBER",
        image: "/lovable-uploads/8f3ebbb2-30c6-4700-ad68-bdd138ec7ffd.png",
        hasWomen: false
      },
      {
        name: "MOUNISH",
        department: "CSE(AI&ML)",
        role: "TEAM MEMBER",
        image: "/lovable-uploads/512ab9bf-63ef-4031-b3cb-baa12d02ad9e.png",
        hasWomen: false
      },
      {
        name: "AKASH",
        department: "CSE(AI&ML)",
        role: "TEAM MEMBER",
        image: "/lovable-uploads/6d340591-fff6-4077-92b8-a89fc8b382e4.png",
        hasWomen: false
      }
    ],
    "Design Team": [
      {
        name: "PRANAY",
        department: "CSE(AI&ML)",
        role: "LEAD",
        image: "/lovable-uploads/4655e3d5-079b-47b2-8a7b-1a2b312fd397.png",
        hasWomen: false
      },
      {
        name: "INDRA AKSHITH",
        department: "CSE",
        role: "CO-LEAD",
        image: "/lovable-uploads/d18f5d35-64c9-461e-9e21-a6085e410020.png",
        hasWomen: false
      },
      {
        name: "VARSHA",
        department: "AI&DS",
        role: "TEAM MEMBER",
        image: "/lovable-uploads/varsha-improved.png",
        hasWomen: true
      },
      {
        name: "VISHALAKSHI",
        department: "AI&DS",
        role: "TEAM MEMBER",
        image: "/lovable-uploads/cee1d9d7-2225-43da-8cb0-472e50aee52c.png",
        hasWomen: true
      },
      {
        name: "DHEEKSHA",
        department: "AI&DS",
        role: "TEAM MEMBER",
        image: "/lovable-uploads/83d199b8-e460-4d35-b425-8d1287a463ce.png",
        hasWomen: true
      }
    ],
    "Social Media": [
      {
        name: "BALA VARSHITH",
        department: "CSE(AI&ML)",
        role: "LEAD",
        image: "/lovable-uploads/7704c430-df61-421a-bf45-8940dd1b758b.png",
        hasWomen: false
      },
      {
        name: "SATHWIK",
        department: "IT",
        role: "CO-LEAD",
        image: "/lovable-uploads/ce8c2fa1-d866-4556-8175-f6a333fdfca9.png",
        hasWomen: false
      },
      {
        name: "SHIVANI",
        department: "AI&DS",
        role: "REPRESENTATIVE",
        image: "/lovable-uploads/cd28a257-7dd2-423a-a1dd-96042dd674fe.png",
        hasWomen: true
      },
      {
        name: "VIJAY MOHAN",
        department: "CSE(AI&ML)",
        role: "EDITOR",
        image: "/lovable-uploads/6c937623-16b7-436d-957d-c244f4b35fad.png",
        hasWomen: false
      }
    ],
    "Marketing Team": [
      {
        name: "KAMNA",
        department: "CSE(AI&ML)",
        role: "AD LEAD",
        image: "/lovable-uploads/0b76fc3e-8ab6-4889-865f-1ea85103e36d.png",
        hasWomen: true
      },
      {
        name: "AKSHITHA",
        department: "CSE(AI&ML)",
        role: "PR LEAD",
        image: "/lovable-uploads/0040bcc8-aea6-47d7-8f20-1a97013ac4aa.png",
        hasWomen: true
      },
      {
        name: "PRERANA",
        department: "AI&DS",
        role: "PR",
        image: "/lovable-uploads/8c2ef596-8313-430d-a28f-65069889e615.png",
        hasWomen: true
      }
    ]
  };

  type LeadershipMember = {
    name: string;
    department: string;
    role: string;
    image: string;
    hasWomen: boolean;
  };

  const LeadershipFlipCard: React.FC<{ member: LeadershipMember }> = ({ member }) => {
    const [flipped, setFlipped] = useState(false);

    return (
      <div
        className="flip-card-container"
        onClick={() => setFlipped((f) => !f)}
        tabIndex={0}
        style={{ outline: "none" }}
      >
        <div className={`flip-card${flipped ? " flipped" : ""}`}>
          {/* Front Side */}
          <div className="flip-card-front">
            <img src={member.image} alt={member.name} />
            <h4 className="text-lg font-bold text-foreground mb-2">{member.name}</h4>
            <p className="text-sm text-muted-foreground mb-1">{member.department}</p>
            <p className="text-sm font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 inline-block">
              {member.role}
            </p>
          </div>
          {/* Back Side */}
          <div className="flip-card-back">
            <h4 className="text-lg font-bold text-foreground mb-2">{member.name}</h4>
            <div className="social-icons">
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {/* LinkedIn SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                </svg>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                {/* Instagram SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const domains = Object.keys(teamMembers);

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/20"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-primary/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Get to know the passionate individuals driving innovation and entrepreneurship at SMEC.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedDomain === domain
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-card/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedDomain === "Leadership"
              ? sortMembersByHierarchy(teamMembers[selectedDomain]).map((member, memberIndex) => (
                  <LeadershipFlipCard key={memberIndex} member={member} />
                ))
              : sortMembersByHierarchy(teamMembers[selectedDomain]).map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="p-6 rounded-2xl bg-card/80 border border-primary/10 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="mb-4 relative group">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className={`w-24 h-24 object-cover rounded-full mx-auto border-3 border-primary/20 transition-transform duration-300 ${
                            member.hasWomen ? '' : 'cursor-pointer hover:scale-110'
                          }`}
                          onClick={() => !member.hasWomen && window.open(member.image, '_blank')}
                        />
                      ) : (
                        <div className="w-24 h-24 bg-muted/50 border-2 border-dashed border-muted-foreground/30 rounded-full mx-auto flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">Photo</span>
                        </div>
                      )}
                      {member.image && !member.hasWomen && (
                        <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                             onClick={() => window.open(member.image, '_blank')}>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{member.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{member.department}</p>
                    <p className="text-sm font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 inline-block">
                      {member.role}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTeam;