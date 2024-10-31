// components/EmpathyMap.js
import Image from "next/image";

export default function ManashEmptyMap() {
  return (
    <div className=" flex items-center justify-center   mt-5 text-white shadow shadow-zinc-700 rounded-2xl ">
      <div className="max-w-4xl w-full pt-9 pb-11 px-8 bg-[#1a1a1a]    shadow-md rounded-2xl">
        <div className="flex items-center gap-3 ">
          <h2 className="text-lg font-semibold text-center mb-1 text-start  ">
            <i> Job Seeker&apos;s Empathy Map :</i>
          </h2>
          <span className="w-3/5 h-[1px] bg-white "></span>
        </div>
        <p className=" font-light mb-6">
          With the data collected from the interviews, I created Two persona
          representing two ideal users of the Website. This personas helped me
          arrived at better solutions as in depth understanding of the both two
          types of users goal, frustrations and overall personality.
        </p>

        <div className="grid relative lg:grid-cols-2 gap-10">
          <div className="absolute  z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20  opacity-0 lg:opacity-100 justify-center mt-8">
            <div className="w-28 h-28 relative rounded-full overflow-hidden border-2 border-zinc-500 shadow-2xl shadow-zinc-600">
              <Image 
                src={"/image/project/Mask group.png"}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          {/* hover:bg-gradient-70 . from-zinc-500 to-zinc-700 */}
          <div className="bg-zinc-800 hover:bg-gradient-70 from-zinc-500 to-zinc-700 transition-all duration-300 border border-zinc-700 shadow shadow-zinc-600 p-4 rounded-lg hover:scale-105 pb-8">
            <h3 className="font-semibold text-xl mb-2">Says</h3>
            <ul className="space-y-2 list-disc pl-5 text-sm font-thin">
              <li>“I want to find relevant IT jobs quickly.”</li>
              <li>“It’s frustrating to sort through irrelevant listings.”</li>
              <li>“I need clear updates on my applications.”</li>
            </ul>
          </div>

          <div className="bg-zinc-800 hover:bg-gradient-70 from-zinc-500 to-zinc-700 transition-all duration-300 border border-zinc-700 shadow shadow-zinc-600 p-4 rounded-lg hover:scale-105 pb-8">
            <h3 className="ont-semibold text-xl mb-2">Thinks</h3>
            <ul className=" space-y-2 list-disc pl-5 text-sm font-thin ">
              <li>“Am I skilled enough for the roles I’m applying to?”</li>
              <li>“How can I stand out among other candidates?”</li>
              <li>“Will this job help me grow my career?”</li>
            </ul>
          </div>

          <div className="bg-zinc-800 hover:bg-gradient-70 from-zinc-500 to-zinc-700 transition-all duration-300 border border-zinc-700 shadow shadow-zinc-600 p-4 rounded-lg hover:scale-105 pb-8">
            <h3 className="font-semibold mb-2">Does</h3>
            <ul className="space-y-2 list-disc pl-5 text-sm font-thin">
              <li>Actively searches job portals.</li>
              <li>Updates her resume and portfolio.</li>
              <li>Participates in online coding challenges.</li>
            </ul>
          </div>

          <div className="bg-zinc-800 hover:bg-gradient-70 from-zinc-500 to-zinc-700 transition-all duration-300 border border-zinc-700 shadow shadow-zinc-600 p-4 rounded-lg hover:scale-105 pb-8">
            <h3 className="font-semibold mb-2">Feels</h3>
            <ul className=" space-y-2 list-disc pl-5 text-sm font-thin">
              <li>Frustrated with the job search process.</li>
              <li>Anxious about the competition in the IT job market.</li>
              <li>Hopeful about finding a role that fits her career goals.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
