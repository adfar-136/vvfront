export default function Page() {
    return (
      <div className="overflow-hidden bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">We are here!</h2>
<p className="mt-6 text-xl/8 text-gray-600">
  We are here to mentor students who are stuck, without asking anything in return other than dedication and hard work. 
  Many students face barriers like lack of exposure, resources, and mentorship, and we are here to break those barriers and 
  provide the necessary guidance to help them succeed.
</p>
<p className="mt-6 text-base/7 text-gray-600">
  At VariableVerse, our focus is on giving every student the attention they deserve, helping them navigate through challenges 
  and reach their potential. We are committed to fostering a learning environment where students can grow, collaborate, and 
  thrive in the tech industry.
</p>

              <div className="mt-10 flex">
                <a 
                  href="https://chat.whatsapp.com/JKvZdK6fxjW4bvrnu87mkE" target="_blank"
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join our community<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  alt=""
                  src="/images/IMG_5773.JPG"
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    alt=""
                    src="/images/GKQS4280.JPG"
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src="/images/IMG_3995.JPG"
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src="/images/GSHZ5696.JPG"
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  