import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <section className="bg-center bg-no-repeat bg-cover w-full h-[100vh] bg-[url('https://z-p3-scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/449344088_905589951580468_7281881555001784270_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Wzv9ilk6uDkQ7kNvgEQdfwx&_nc_ht=z-p3-scontent-mba1-1.xx&oh=00_AYDtGjLF3y-_muzUVEVyMFxN_lmgGKGdu09SzoXj4kukzQ&oe=66B7BB71')] bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 p-10">
        <div className="bg-white hover:shadow-indigo-300 hover:shadow-md rounded-lg bg-indigo-50/30 border">
          <div className="p-1 rounded-t-lg bg-sky-400"></div>
          <div className="flex flex-col rounded p-5 lg:p-8">
            <h3 className="text-3xl text-black font-bold">Our Code</h3>
            <p className="py-1 text-sm">
              Learn the ten values that keep the vision of BCC Church clear. These values reflect our priority to reach people with the Gospel and guide every aspect of our ministry. They serve as the foundation for our mission, shaping how we connect with others, foster spiritual growth, and make a positive impact in our community. By embracing these values, we ensure that our efforts are aligned with our purpose, inspiring us to live out our faith authentically and share the love of Christ with the world.
            </p>
            <div className="pt-3 flex flex-col gap-2">
              <Link
                className="w-full bg-sky-400 text-white font-medium text-center py-2 mt-3 rounded-md"
                to="/code#principles"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white hover:shadow-indigo-300 hover:shadow-md rounded-lg bg-indigo-50/30 border">
          <div className="p-1 rounded-t-lg bg-sky-400"></div>
          <div className="flex flex-col rounded p-5 lg:p-8">
            <h3 className="text-3xl text-black font-bold">Our Beliefs</h3>
            <p className="py-1 text-sm">
              See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Our beliefs are firmly rooted in Scripture and serve as the cornerstone of our mission and values. These convictions shape every decision we make as a church, influencing how we worship, teach, and serve. By grounding ourselves in these foundational truths, we remain dedicated to living out our faith with integrity and purpose, striving to reflect God's love and grace in all that we do.
            </p>
            <div className="pt-3 flex flex-col gap-2">
      <Link
        className="w-full bg-sky-400 text-white font-medium text-center py-2 mt-3 rounded-md"
        to="/beliefs#morals"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        Read More
      </Link>
    </div>
          </div>
        </div>
        <div className="bg-white hover:shadow-indigo-300 hover:shadow-md rounded-lg bg-indigo-50/30 border">
          <div className="p-1 rounded-t-lg bg-sky-400"></div>
          <div className="flex flex-col rounded p-5 lg:p-8">
            <h3 className="text-3xl text-black font-bold">Leadership</h3>
            <p className="py-1 text-sm">
              Meet the lead Pastors who set the vision of BCC Church, guiding our community with passion, wisdom, and unwavering faith. Their leadership inspires us to grow spiritually, serve selflessly, and embrace the transformative power of God's love. Discover their stories, missions, and the heart behind the vision that shapes our church's journey.
            </p>
            <div className="pt-3 flex flex-col gap-2">
              <a
                className="w-full bg-sky-400 text-white font-medium text-center py-2 mt-3 rounded-md"
                target="_blank"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
