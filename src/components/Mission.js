import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Mission() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt=""
              src="/logo.png"
              className="absolute inset-0 size-full bg-gray-50 object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base/7 font-semibold text-indigo-600">Tech Education for All</p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Empowering the Future of Learning
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              Our mission at VariableVerse is to make tech education accessible to everyone, regardless of financial background. 
              While tech courses are often sold for lakhs of rupees, we are committed to offering high-quality, free education 
              to all students—empowering them with the skills they need to succeed.
            </p>
            <div className="mt-10 max-w-xl text-base/7 text-gray-700 lg:max-w-none">
            
              {/* <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Free Tech Courses.</strong> Learn a wide variety of tech skills 
                    without worrying about high costs. Our courses are completely free, designed for students of all levels.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Community-driven Learning.</strong> Join a community where 
                    students help each other, collaborate, and solve problems together, without relying on costly companies.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Zero Rupees, Just Dedication.</strong> All we ask for is your time, 
                    dedication, and commitment to learning. The focus is on your growth, not fees.
                  </span>
                </li>
              </ul> */}
              <p className="mt-8">
                Join us in making a difference. We aim to create a world where tech education is free and accessible, so you 
                can achieve your dreams without financial constraints. Together, we can build a future where learning is for everyone.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No Hidden Fees. No Catch.</h2>
              <p className="mt-6">
                VariableVerse is here to revolutionize education. You won’t be asked to pay anything for courses, mentorship, 
                or any other resources. Our goal is simple: to help you learn and grow, with no strings attached.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
