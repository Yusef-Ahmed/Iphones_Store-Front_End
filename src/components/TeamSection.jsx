import Youssef_Ahmed from "../assets/Youssef_Ahmed.png";
import Maro_Adel from "../assets/Maro_Adel.png";
import Seif_Hassan from "../assets/Seif_Hassan.JPEG";
import Bassant_Selim from "../assets/Bassant_Selim.png";
import Zyad_Ellethy from "../assets/Zyad_Ellethy.png";

const people = [
  {
    name: "Maro Adel",
    role: "Machine Learning",
    imageUrl: Maro_Adel,
  },
  {
    name: "Youssef Ahmed",
    role: "Front-End Developer",
    imageUrl: Youssef_Ahmed,
  },
  {
    name: "Seif Hassan",
    role: "Back-End Developer",
    imageUrl: Seif_Hassan,
  },
  {
    name: "Bassant Selim",
    role: "Front-End Developer",
    imageUrl: Bassant_Selim,
  },
  {
    name: "Abdo Ahmed",
    role: "Back-End Developer",
    imageUrl: "",
  },
  {
    name: "Zyad Ellethy",
    role: "UI/UX Designer",
    imageUrl: Zyad_Ellethy,
  },
];

export function TeamSection() {
  return (
    <div className="py-24 mt-20 sm:py-32">
      <div className="grid px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 ml-0 text-lg leading-8 text-gray-600">
            This is the team who worked so hard to get that website as you can
            see now.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-20 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="z-0 mx-10 transition duration-300 delay-150 cursor-default will-change-transform hover:-translate-y-1 hover:scale-110"
            >
              <div className="flex items-center gap-x-8">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="ml-0 text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
