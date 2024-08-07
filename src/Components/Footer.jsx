import React from 'react'

function Footer() {
  return (
    <div>
        <div className="bg-black">
        <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-white sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-2/12 border-r border-gray-700">
            <div className="text-sm uppercase text-white font-bold">MINISTRIES</div>
            <ul className="list-disc pl-5">
              <li className="my-2 text-white">
                <a className="hover:text-indigo-400" href="#">Men of Glory</a>
              </li>
              <li className="my-2 text-white">
                <a className="hover:text-indigo-400" href="#">Women of Faith</a>
              </li>
              <li className="my-2 text-white">
                <a className="hover:text-indigo-400" href="#">Youths</a>
              </li>
              <li className="my-2 text-white">
                <a className="hover:text-indigo-400" href="#">Household</a>
              </li>
            </ul>
          </div>
          <div className="p-5 sm:w-7/12 border-r border-gray-700 text-center">
            <h3 className="font-bold text-xl text-white mb-4">CHURCH ADDRESSES & SERVICE TIMES</h3>
            <p className="text-gray-300 text-sm mb-10">
              Our church offers a variety of services throughout the week to accommodate different schedules. Join us for our Sunday services, or visit us on Wednesdays for mid-week gatherings. We look forward to welcoming you to our community.
              <br /><br />
              <strong>Sunday Services:</strong> 7:00 to 10:00 AM and 10:00 AM to 5:00 PM
              <br />
              <strong>Wednesday Gatherings:</strong> 5:30 PM to 8:00 PM
              <br />
              <strong>Monthly Kesha:</strong> 1st Friday of the Month 7:00 PM to 6:00 AM
              <br /><br />
              For more information on special events or other services, please contact us or visit our website.
            </p>
            <div className="flex justify-center space-x-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
              </a>
              <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
              </a>
            </div>
            <div className="my-5 text-gray-300">© Copyright 2024. All Rights Reserved.</div>
          </div>
          <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-white font-bold">Contact Us</div>
            <ul>
              <li className="my-2 text-white">
                <a className="hover:text-indigo-400" href="#">+254 727 893375, Ebenezer, Kalimoni, Kenya</a>
              </li>
              <li className="my-2 text-white">
                <a className="hover:text-indigo-400" href="#">bcc@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer