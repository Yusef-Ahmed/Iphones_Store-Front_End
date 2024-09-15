import Youssef_Ahmed from "../assets/Youssef_Ahmed.jpg";

const people = [
  {
    name: "Maro Adel",
    role: "Machine Learning",
    imageUrl: "",
  },
  {
    name: "Youssef Ahmed",
    role: "Front-End Developer",
    imageUrl: Youssef_Ahmed,
  },
  {
    name: "Seif Hassan",
    role: "Back-End Developer",
    imageUrl: "",
  },
  {
    name: "Zyad Ellethy",
    role: "Front-End Developer",
    imageUrl: "",
  },
  {
    name: "Abdo ...",
    role: "Back-End Developer",
    imageUrl: "",
  },
  {
    name: "Bassant Selim",
    role: "Front-End Developer",
    imageUrl: "",
  },
];

export function TeamSection() {
  return (
    <div className="py-24 sm:py-32 mt-20">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 ml-0">
            This is the team who worked so hard to get that website as you can
            see now.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-20 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name} className="cursor-default z-0 mx-10 transition delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="flex items-center gap-x-8">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600 ml-0">
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
