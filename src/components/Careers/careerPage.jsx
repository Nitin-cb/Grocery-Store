import React, { useRef, useState } from 'react';
import storeimg from '/images/careers/Banner for Careers pages.jpg';
import joinimg from '/images/careers/Why Join Us.jpg';
import bgimg from '/images/careers/career1.jpeg';
import bgimg2 from '/images/careers/career2.jpg';

export default function CareersPage() {
  const form = useRef();
  const [uploading, setUploading] = useState(false); // Track upload status
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Track form submission status

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('email', e.target.email.value);
    formData.append('phone', e.target.phone.value);
    formData.append('position', e.target.position.value);
    formData.append('resume', e.target.resume.files[0]);

    try {
      const response = await fetch('https://grocery-store-backend-alpha.vercel.app/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        form.current.reset();
      } else {
        throw new Error('Failed to send application.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative ">
        <img src={storeimg} alt="Large Screen Image" className="block w-full" />
      </div>

      <div className="relative z-10">
        {/* Background Image */}
        <div
          style={{ backgroundImage: `url(${bgimg})` }}
          className="absolute inset-0 bg-cover bg-center z-0"
        ></div>

        {/* Content Section */}
        <div className="relative p-4 backdrop-blur-sm">
          <h1 className="text-4xl mb-4 font-bold">Careers</h1>
          <p className="text-lg">
            We are looking for like-minded talents to join our growing family.
            We are in the process of expanding Al Madina Group across the UAE.
            Want to join our team? Feel free to apply.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="flex flex-col items-center justify-center px-8 py-16 md:flex-row md:px-20 relative">
          <div className="w-full md:w-1/2">
            <img
              src={joinimg}
              alt="Office Environment"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full mt-8 md:w-1/2 md:mt-0 md:ml-10 text-center">
            <h2 className="text-3xl font-semibold italic text-gray-800">
              Why Join Us?
            </h2>
            <p className="mt-4 text-lg italic text-gray-600 leading-relaxed">
              We’re a team that feels like a growing family, sharing strong
              values of teamwork, learning, and growth.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div
        className="relative bg-white py-12"
        style={{
          backgroundImage: `url(${bgimg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative max-w-4xl mx-auto px-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Grow With Us:-
          </h3>
          <p className="text-gray-600 mb-8">
            You’ll receive all the training, development, and support you need.
          </p>

          {/* Thank You Message */}
          {submissionSuccess ? (
            <div className="text-center bg-green-100 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-green-800">
                Thank you for your submission!
              </h4>
              <p className="text-green-700">
                We have received your application and will get back to you
                shortly.
              </p>
            </div>
          ) : (
            // Form
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              encType="multipart/form-data"
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="position"
                placeholder="Applying for Position"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">
                  Attach Resume *
                </label>
                <input
                  type="file"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  name="resume"
                  accept="application/pdf"
                />
              </div>
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-6 py-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
                >
                  {uploading ? 'Uploading...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
