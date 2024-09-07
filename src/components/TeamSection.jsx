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
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
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
            <li key={person.name} className="mx-10">
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
