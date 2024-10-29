
// components/EmpathyMap.js
import Image from 'next/image';

export default function ManashEmptyMap() {
  return (
    <div className="min-h-screen flex items-center justify-center    text-white">
      <div className="max-w-4xl w-full p-8 bg-[#1a1a1a] rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-center mb-1">
          <span className="inline-block border-t-2 border-zinc-500 w-10 mr-2"></span>Job Seeker's Empathy Map
        </h2>
        <p className=" text-center mb-6">
          This empathy map helps me to articulate the core insights about the personas, guiding the design and functionality of the job portal to better meet their needs.
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-zinc-700 border border-zinc-300 shadow shadow-zinc-600 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Says</h3>
            <ul className=" space-y-2">
              <li>“I want to find relevant IT jobs quickly.”</li>
              <li>“It’s frustrating to sort through irrelevant listings.”</li>
              <li>“I need clear updates on my applications.”</li>
            </ul>
          </div>

          <div className="bg-zinc-700 border border-zinc-300 shadow shadow-zinc-600 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Thinks</h3>
            <ul className=" space-y-2">
              <li>“Am I skilled enough for the roles I’m applying to?”</li>
              <li>“How can I stand out among other candidates?”</li>
              <li>“Will this job help me grow my career?”</li>
            </ul>
          </div>

          <div className="bg-zinc-700 border border-zinc-300 shadow shadow-zinc-600 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Does</h3>
            <ul className=" space-y-2">
              <li>Actively searches job portals.</li>
              <li>Updates her resume and portfolio.</li>
              <li>Participates in online coding challenges.</li>
            </ul>
          </div>

          <div className="bg-zinc-700 border border-zinc-300 shadow shadow-zinc-600 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Feels</h3>
            <ul className=" space-y-2">
              <li>Frustrated with the job search process.</li>
              <li>Anxious about the competition in the IT job market.</li>
              <li>Hopeful about finding a role that fits her career goals.</li>
            </ul>
          </div>
        </div>
        
        <div className="relative flex justify-center mt-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-700">
            <Image src={'/image/project/Mask group.png'} alt="Profile" width={96} height={96} />
          </div>
        </div>
      </div>
    </div>
  );
}
