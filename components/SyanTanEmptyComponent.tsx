// components/EmpathyMap.js
import Image from "next/image";

export default function RecruitersEmpathyMap() {
  return (
    <div className="flex items-center justify-center mt-5 text-white">
      <div className="max-w-4xl w-full pt-9 pb-11 px-8 bg-[#1a1a1a] rounded-lg shadow-md">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-center mb-1">
            <i>Recruiter's Empathy Map</i>
          </h2>
          <span className="w-3/5 h-[1px] bg-white"></span>
        </div>
        <p className="font-light mb-6">
          This empathy map helps me to articulate the core insights about the personas, guiding the design and functionality of the job portal to better meet their needs.
        </p>

        <div className="grid relative grid-cols-2 gap-10">
          <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20 flex justify-center mt-8">
            <div className="w-28 h-28 relative rounded-full overflow-hidden border-2 border-zinc-500 shadow-2xl shadow-zinc-600">
              <Image
                src={"/image/project/image.png"}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="bg-zinc-800 hover:bg-gradient-70 from-zinc-500 to-zinc-700 transition-all duration-300 border border-zinc-700 shadow shadow-zinc-600 p-4 rounded-lg hover:scale-105 pb-8">
            <h3 className="font-semibold text-xl mb-2">Says</h3>
            <ul className="space-y-2 list-disc pl-5 text-sm font-thin">
              <li>“I need candidates with specific technical skills.”</li>
              <li>“The hiring process is taking too long.”</li>
              <li>“I want to connect better with potential hires.”</li>
            </ul>
          </div>

          <div className="bg-zinc-800 hover:bg-gradient-70 from-zinc-500 to-zinc-700 transition-all duration-300 border border-zinc-700 shadow shadow-zinc-600 p-4 rounded-lg hover:scale-105">
            <h3 className="font-semibold text-xl mb-2">Thinks</h3>
            <ul className="space-y-2 list-disc pl-5 text-sm font-thin">
              <li>“How can I streamline my recruitment process?”</li>
              <li>“Are we attracting the right talent?”</li>
              <li>“What can I do to improve candidate engagement?”</li>
            </ul>
          </div>

          <div className="bg-zinc-800 hover:bg-gradient-70 from-zinc-500 to-zinc-700 transition-all duration-300 border border-zinc-700 shadow shadow-zinc-600 p-4 rounded-lg hover:scale-105">
            <h3 className="font-semibold mb-2">Does</h3>
            <ul className="space-y-2 list-disc pl-5 text-sm font-thin">
              <li>Reviews applications and conducts interviews.</li>
              <li>Attends networking events to source talent.</li>
              <li>Collaborates with team members to finalize hires.</li>
            </ul>
          </div>

          <div className="bg-zinc-800 hover:bg-gradient-70 from-zinc-500 to-zinc-700 transition-all duration-300 border border-zinc-700 shadow shadow-zinc-600 p-4 rounded-lg hover:scale-105">
            <h3 className="font-semibold mb-2">Feels</h3>
            <ul className="space-y-2 list-disc pl-5 text-sm font-thin">
              <li>Overwhelmed by the volume of applications.</li>
              <li>Eager to find the right candidate quickly.</li>
              <li>Frustrated with inefficient tools and processes.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
