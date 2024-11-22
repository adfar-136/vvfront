import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Free Live Classes',
      description:
        'Comprehensive, live classes on in-demand technologies like MERN, Python, JavaScript, Data Science, and more, at no cost.',
    },
    {
      name: 'Mock Interviews',
      description:
        'Simulate real interview scenarios with experts to help you prepare and build confidence, all for free.',
    },
    {
      name: 'Project-Based Learning',
      description:
        'Hands-on learning through building real-world projects, providing practical experience in various tech stacks.',
    },
    {
      name: 'Personalized Mentorship',
      description:
        'Get one-on-one guidance from industry professionals to support your learning and career growth, absolutely free.',
    },
    {
      name: 'Coding Resources',
      description:
        'Access a wide range of coding resources, tutorials, and challenges to sharpen your skills and prepare for job opportunities.',
    },
    {
      name: 'Placement Assistance',
      description:
        'Receive free placement support with career guidance, resume building, and job opportunities in the tech industry.',
    },
    {
      name: 'Comprehensive Curriculum',
      description:
        'A well-structured curriculum covering all essential topics for each technology, designed to make you industry-ready.',
    },
    {
      name: 'Student Community',
      description:
        'Join a vibrant student community to collaborate, network, and learn together, creating a supportive environment for growth.',
    },
  ];
  

export default function Allinone() {
  return (
    <div className="bg-pink-100">
        
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg/8 text-gray-600">
            VariableVerse is dedicated to offering a holistic learning experience for students, providing free access to live classes, mock interviews, mentorship, and a community-driven approach to help students thrive in the tech industry.
          </p>
        </div>
        <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative bg-white-200 p-8 rounded-lg">
              <dt> 
              <svg
  aria-hidden="true"
  className="absolute mt-1 h-6 w-6 text-indigo-600"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="3"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 13l4 4L19 7" />
  <circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="none" />
</svg>

                <p className="ml-10 text-lg/8 font-semibold text-gray-900">{feature.name}</p>
              </dt>
              <dd className="ml-10 mt-2 text-base/7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
