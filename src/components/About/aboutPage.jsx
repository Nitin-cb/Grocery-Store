import img2 from '../../assets/images/about.png';
import './about.css';

export default function AboutUsPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-green-600 text-white py-24 h-72 items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-vector/abstract-wave-turquoise-orange-gradient-wallpaper-background_172010-1175.jpg?w=996')",
          }}
        >
          <div className="absolute inset-0 bg-green-600 bg-opacity-60"></div>
        </div>
        <div className="relative text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold underline">About Us</h1>
        </div>
      </div>

      <section className="py-16 bg-white text-center items-center flex flex-col">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600">
            We are passionate about creating seamless user experiences. Our
            mission is to empower creators, designers, and developers to build
            beautiful, intuitive interfaces that resonate with users.
          </p>
        </div>
        <div className="m-6 p-10">
          <img
            src="https://img.freepik.com/free-vector/supermarket-aisle-perspective-view_107791-19303.jpg?t=st=1725811566~exp=1725815166~hmac=a0a645b2304f614022e31e9a2fb828063ac25bad5783f48880942fbaa8112536&w=1380"
            alt=""
          />
        </div>
      </section>

      {/* our story */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with the actual image URL
              alt="About Us"
              className="rounded-lg shadow-lg object-cover w-96 h-96"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Driven by a passion for seamless user experiences, we've
              meticulously curated pagedone to empower creators, designers, and
              developers alike. Our mission is to provide a comprehensive
              toolkit, enabling you to build intuitive, beautiful interfaces
              that resonate with users on every interaction.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Driven by a passion for seamless user experiences, we've
              meticulously curated pagedone to empower creators, designers, and
              developers alike. Our mission is to provide a comprehensive
              toolkit, enabling you to build intuitive, beautiful interfaces
              that resonate with users on every interaction.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with the actual image URL
              alt="About Us"
              className="rounded-lg shadow-lg object-cover w-96 h-96"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We believe in pushing the boundaries of what’s possible and
                constantly exploring new ideas.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We thrive in teamwork, fostering an environment of shared growth
                and mutual success.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We are committed to delivering quality in every project and
                ensuring customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                className="rounded-full w-32 h-32 mx-auto mb-4"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1031503010.1714190988&semt=ais_hybrid" // replace with team member's image
                alt="Team Member"
              />
              <h3 className="text-2xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            {/* Repeat Team Members */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                className="rounded-full w-32 h-32 mx-auto mb-4"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1031503010.1714190988&semt=ais_hybrid" // replace with team member's image
                alt="Team Member"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-500">CTO</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                className="rounded-full w-32 h-32 mx-auto mb-4"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1031503010.1714190988&semt=ais_hybrid" // replace with team member's image
                alt="Team Member"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Michael Lee
              </h3>
              <p className="text-gray-500">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What our happy user says!
          </h2>
          <p className="text-lg text-gray-500 leading-8 mb-8 max-w-4xl mx-auto">
            I have been using pagedone for several months now, and I must say
            that it has made my life a lot easier. The platform's intuitive
            interface and ease of use have allowed me to manage my finances more
            effectively and make informed investment decisions. I particularly
            like the product's auto-tracking feature, which has saved me a lot
            of time and effort.
          </p>
          <div className="flex justify-center space-x-6">
            <img
              src="https://pagedone.io/asset/uploads/1704349534.png"
              alt="Emily image"
              className="w-16 h-16 rounded-full border-2 border-indigo-600"
            />
            <img
              src="https://pagedone.io/asset/uploads/1704349572.png"
              alt="Ethan image"
              className="w-16 h-16 rounded-full border-2 border-indigo-600"
            />
            <img
              src="https://pagedone.io/asset/uploads/1704349514.png"
              alt="Olivia image"
              className="w-16 h-16 rounded-full border-2 border-indigo-600"
            />
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Our results in numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-8">
              <p className="text-4xl font-bold text-purple-600 mb-2">240%</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Company growth
              </h3>
              <p className="text-gray-500">
                Company's remarkable growth journey as we continually innovate
                and drive towards new heights of success.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <p className="text-4xl font-bold text-purple-600 mb-2">175+</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Company growth
              </h3>
              <p className="text-gray-500">
                Our very talented team members are the powerhouse of pagedone
                and pillars of our success.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-8">
              <p className="text-4xl font-bold text-purple-600 mb-2">625+</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Projects Completed
              </h3>
              <p className="text-gray-500">
                We have accomplished more than 625 projects worldwide and we are
                still counting many more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
