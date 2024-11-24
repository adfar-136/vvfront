const featuredTestimonial = {
    body: 'Since college time i wanted to be a developer but did not know what to do and how to do so learnt several languages but nothing worked. But after joining this course i have a clear vision after orientation and also i am getting strong foundation as well, which i never get on youtube or google. Thanks to sir who is doing all this free of cost but sadly students are not understanding what they are missing by not being serious for this.',
    author: {
      name: 'Anurag Rajput ',
      handle: 'Anurag Rajput',
      imageUrl:'testimonials/AnuragRajput.jpg',
      // logoUrl: '/Users/adfarrashid/Downloads/Tahir Khan.JPG', // Use your logo here if applicable
    },
  }
  
  const testimonials = [
    [
      [
        {
          body: 'I recently watch session with Variableverse, and it was a transformative experience. The course was well-structured and engaging, providing me with practical skills and insights that I could immediately apply. Variableverses innovative approach to learning helped me deepen my understanding of mainly JavaScript and React. Thanks to this course, I feel more confident and equipped to tackle challenges in [related field or personal project]. I highly recommend Variableverse to anyone looking to enhance their skills and knowledge',
          author: {
            name: 'Ansita Ramola ',
            handle: 'rAnsita5350',
            imageUrl:
              'testimonials/ansitaramola.jpg',
          },
        },
        {
            body: 'This course is just fantastic. If you want to learn the web development(html, css, javascript and MERN) then you should definitely join this course. Also pedagogy of Adfar sir is best as he elaborate in depth for each concept he teaches. Definitely just go for it!',
            author: {
              name: 'Tahir Khan',
              handle: 'tahirkhan7',
              imageUrl:
                'testimonials/TahirKhan.JPG',
            },
          },
          {
            body: 'Adfar sir explanation is very much engaging and he is able to explain complex concepts in a very easy manner so that beginners like me can grasp them easily. ',
            author: {
              name: 'Sadi Hossain ',
              handle: 'SadiHossain',
              imageUrl:
                'testimonials/sadi.jpg',
            },
          },
        // More testimonials...
      ],
      [
        {
          body: 'I have had a fantastic experience in the MERN Stack course! Variableverse has been instrumental in helping me grasp complex concepts with clarity and confidence. The explanations are concise, and the examples are relatable. I have seen significant improvement in my understanding and skills in HTML, CSS,JAVA SCRIPT ,React, and Node.js, building upon my existing foundation. Thank you, Variableverse, for providing such valuable learning resources.',
          author: {
            name: 'Ankit Kumar Sharma ',
            handle: '_ankit_kr',
            imageUrl:
              'testimonials/AnkitKr.jpeg',
          },
        },
       
          
        // More testimonials...
      ],
    ],
    [
      [
        {
          body: 'My experience with VariableVerse has been fantastic so far. The course is well-structured, making it easy to follow and understand the MERN stack. I have completed HTML, CSS, JavaScript, and React, and the hands-on projects have really helped me solidify my skills. The guidance and resources provided have been invaluable in building a strong foundation. I’m excited to continue learning and confident that VariableVerse will help me achieve my goals.',
          author: {
            name: 'SHAIK MOHAMMAD ASHWAK',
            handle: 'mohammad-ashwak-shaik',
            imageUrl:
              'testimonials/SHAIK.jpeg',
          },
        },
        
        // More testimonials...
      ],
      [
        {
          body: 'The dedication of the mentors is inspiring. They helped me push through the toughest challenges and guided me every step of the way. Thanks to them, I’m on my way to landing my first tech job!',
          author: {
            name: 'Vishal Patel',
            handle: 'vishalpatel',
            imageUrl:
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
            body: 'I struggled to find affordable tech education, but VariableVerse made it possible. They focus on providing real value without charging a penny. It’s amazing!',
            author: {
              name: 'Sara Singh',
              handle: 'sarasignh',
              imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          },
          {
            body: 'I struggled to find affordable tech education, but VariableVerse made it possible. They focus on providing real value without charging a penny. It’s amazing!',
            author: {
              name: 'Sara Singh',
              handle: 'sarasignh',
              imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          },
        // More testimonials...
      ],
    ],
  ]
  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Testimonials() {
    return (
      <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <img
                  alt=""
                  src={featuredTestimonial.author.imageUrl}
                  className="size-10 flex-none rounded-full bg-gray-50"
                />
                <div className="flex-auto">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8',
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                          <div>
                            <div className="font-semibold">{testimonial.author.name}</div>
                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  