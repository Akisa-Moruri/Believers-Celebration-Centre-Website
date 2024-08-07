import React from 'react';

function Home() {
  return (
    <div>   
        <section className="bg-center bg-no-repeat bg-cover w-full h-screen bg-[url('https://z-p3-scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/453235806_924218476384282_1781142091475393618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ATSfShVLvkIQ7kNvgEHnfZk&_nc_ht=z-p3-scontent-mba1-1.xx&oh=00_AYBw3y-OIZcHNXlJ-cqXecim9bXO2Z866M0BoTKjDVSncA&oe=66B80EAE')] bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                {/* Content here */}
            </div>
        </section>

        <br />
        <hr />

        <div className="bg-white">
            <header className="bg-sky-500 text-black text-center py-12">
                <h1 className="text-4xl font-bold mt-16">About Us</h1>
            </header>

            <section className="text-center py-12 px-4">
                <h2 className="text-2xl font-bold">Our Mission Statement</h2>
                <p className="mt-4 text-black-700 max-w-2xl mx-auto">
                    Elevation Church exists so that people far from God will be raised to life in Christ.
                </p>
            </section>

            <section className="bg-sky-500 text-black py-12 px-4">
                <h2 className="text-2xl font-bold text-center">Our Vision Statement</h2>
                <p className="mt-4 text-center max-w-2xl mx-auto">
                    See what God can do through you.
                </p>
            </section>

            <section className="text-center py-12 px-4">
                <h2 className="text-2xl font-bold">Our Ministries</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Men of Glory</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Women of Faith</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Youths</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Household Fellowship</h3>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-12 px-4">
                <h2 className="text-2xl font-bold text-center">Our Leadership</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8  mx-auto">
                    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                        style={{ height: '450px', backgroundImage: "url('https://z-p3-scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/370488095_706508134821985_8346597620100263721_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=0zg_3dfRMDEQ7kNvgF3s91i&_nc_ht=z-p3-scontent-mba1-1.xx&oh=00_AYBv94DQSSprrXyEvOJnMe7avspf4rXI4n5EQQLYEtXl2Q&oe=66B92AF2')" }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                        
                        <main className="p-5 z-10">
                            <a href="#"
                                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                                Rev. Solomon Macharia & Pst Margret Macharia
                            </a>
                        </main>
                    </div>

                    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                        style={{ height: '450px', backgroundImage: "url('https://z-p3-scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/449316438_905590291580434_7745386723565796510_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zCjSd22aSCoQ7kNvgHzY6FH&_nc_ht=z-p3-scontent-mba1-1.xx&oh=00_AYBXssOq0p2T8V7ImnJQU7nqM_36Nmgz6bv72KvGB0hqng&oe=66B922F3')" }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                        
                        <main className="p-5 z-10">
                            <a href="#"
                                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                                Pst David
                            </a>
                        </main>
                    </div>

                    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                        style={{ height: '450px', backgroundImage: "url('https://z-p3-scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/449298334_905589664913830_6660594444004254113_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5ps7uX_k5mYQ7kNvgFWQY2a&_nc_ht=z-p3-scontent-mba1-1.xx&oh=00_AYCxHTwCePDycdFwY6230-8UPlNb5At15NczaoDoJIzunA&oe=66B940CC')" }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                        
                        <main className="p-5 z-10">
                            <a href="#"
                                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                                Pst Emmy
                            </a>
                        </main>
                    </div>

                    <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                        style={{ height: '450px', backgroundImage: "url('https://z-p3-scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/448590050_896476765825120_6556185829266181447_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZYa3H4G7WY4Q7kNvgEoH6cf&_nc_ht=z-p3-scontent-mba1-1.xx&oh=00_AYCl1Gaf8_NIH9aWV0t_CbLFtHmVNs05KmjZThKeRmVGYA&oe=66B937C2')" }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                        
                        <main className="p-5 z-10">
                            <a href="#"
                                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                                Pst Beatrice 
                            </a>
                        </main>
                    </div>
                </div>
            </section>

            {/* <section className="text-center py-12 px-4">
                <h2 className="text-2xl font-bold">Committed To Your Health And Happiness</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Book Appointment</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Informed Staff</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Total Health</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Get Consultation</h3>
                    </div>
                </div>
            </section>

            <section className="bg-gray-500 text-white text-center py-12 px-4">
                <h2 className="text-2xl font-bold">Patient Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                    <div className="p-4 shadow-lg rounded-lg bg-gray-600 hover:bg-gray-500 transition-colors">
                        <blockquote>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique mi."</p>
                            <footer className="mt-4 font-bold">- Patient A</footer>
                        </blockquote>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-600 hover:bg-gray-500 transition-colors">
                        <blockquote>
                            <p>"Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla ac justo euismod posuere."</p>
                            <footer className="mt-4 font-bold">- Patient B</footer>
                        </blockquote>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-600 hover:bg-gray-500 transition-colors">
                        <blockquote>
                            <p>"Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa ullamcorper urna."</p>
                            <footer className="mt-4 font-bold">- Patient C</footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            <section className="text-center py-12 px-4 w-full">
                <h2 className="text-2xl font-bold">Get Answer To Your Most Asked Questions</h2>
                <div className="mt-8">
                    <details className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
                        <summary className="text-xl font-bold">How do I make an appointment online?</summary>
                        <p className="mt-2 text-gray-700">You can book an appointment online through our website or mobile app.</p>
                    </details>
                    <details className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
                        <summary className="text-xl font-bold">What types of medical tests do you offer?</summary>
                        <p className="mt-2 text-gray-700">We offer a wide range of medical tests including blood tests, imaging, and more.</p>
                    </details>
                    <details className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
                        <summary className="text-xl font-bold">Do you accept insurance plans?</summary>
                        <p className="mt-2 text-gray-700">Yes, we accept most major insurance plans.</p>
                    </details>
                </div>
            </section> */}
        </div>
    </div>
  );
}

export default Home;
