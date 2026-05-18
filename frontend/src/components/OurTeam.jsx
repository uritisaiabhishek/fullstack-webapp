import { Link } from "react-router-dom";
import teamData from "../data/team-data.json";

function OurTeam({ limit }) {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet the talented individuals who make our company great. Our team is composed of experienced professionals passionate about delivering excellence.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {teamData.team.length === 0 && (
                <div className="w-full text-center py-12">
                  <p className="text-gray-500 text-lg">No team members available at the moment.</p>
                </div>
              )}
              {
                teamData.team.slice(0, limit).map((member, index) => (
                  <div key={index} className="p-4 lg:w-1/2">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={member.image} />
                      <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                        <h3 className="text-gray-500 mb-3">{member.position}</h3>
                        <p className="mb-4">{member.bio}</p>
                        <span className="inline-flex">
                          {member.social?.twitter && (
                            <a href={member.social.twitter} className="text-gray-500">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                              </svg>
                            </a>
                          )}
                          {member.social?.linkedin && (
                            <a href={member.social.linkedin} className="ml-2 text-gray-500">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                              </svg>
                            </a>
                          )}
                          {member.social?.github && (
                            <a href={member.social.github} className="ml-2 text-gray-500">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                            </a>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            {
                limit && 
                <div className="flex justify-center mt-8">
                    <Link to="/team" className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                        View All
                    </Link>
                </div>
            }
        </div>
    </section>
  );
}

export default OurTeam;