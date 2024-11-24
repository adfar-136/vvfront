import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';

export default function RegistrationForm() {
  return (
    <div className="relative isolate bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="relative bg-green-600 text-white p-10 rounded-lg shadow-lg lg:shadow-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Join VariableVerse</h2>
            <p className="mt-4 text-lg">
              Embark on your learning journey with us! Get access to free live classes, hands-on projects, mentorship,
              and more to kickstart your career in tech.
            </p>
            <ul className="mt-8 space-y-4 text-base">
              <li className="flex items-center gap-4">
                <UserIcon className="h-6 w-6 text-white" />
                <span>Personalized learning for every student</span>
              </li>
              <li className="flex items-center gap-4">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <span>Free access to premium resources</span>
              </li>
              <li className="flex items-center gap-4">
                <PhoneIcon className="h-6 w-6 text-white" />
                <span>24/7 support from mentors</span>
              </li>
            </ul>
          </div>

          {/* Right Section: Form */}
          <form
            action="#"
            method="POST"
            className="bg-white rounded-lg shadow-lg p-8 lg:p-10 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-gray-800 sm:text-3xl">Get Started Now</h3>
            <p className="mt-2 text-sm text-gray-600">Fill out the form to join our community.</p>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
                  What’s your goal with VariableVerse?
                </label>
                <textarea
                  id="goal"
                  name="goal"
                  rows={3}
                  className="mt-1 block p-4 w-full rounded-md border-gray-800 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  placeholder="Tell us why you want to join"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
