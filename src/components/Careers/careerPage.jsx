import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebaseConfig';
import storeimg from '/images/careers/Banner for Careers pages.jpg';
import joinimg from '/images/careers/Why Join Us.jpg';

export default function CareersPage() {
  const form = useRef();
  const [resumeUrl, setResumeUrl] = useState(null); // State to hold resume URL
  const [uploading, setUploading] = useState(false); // Track upload status

  const uploadResume = async (file) => {
    try {
      const storageRef = ref(storage, `resumes/${file.name}`);
      await uploadBytes(storageRef, file); // Upload the file to Firebase Storage
      const downloadUrl = await getDownloadURL(storageRef); // Get the file URL
      return downloadUrl; // Return the download URL
    } catch (error) {
      console.error('Error uploading resume:', error);
      return null;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const file = e.target.resume.files[0];
    if (file) {
      setUploading(true);
      const resumeDownloadUrl = await uploadResume(file); // Upload file to Firebase, get URL
      setUploading(false);
      setResumeUrl(resumeDownloadUrl);

      if (resumeDownloadUrl) {
        const emailParams = {
          name: e.target.name.value,
          email: e.target.email.value,
          position: e.target.position.value,
          Phone: e.target.phone.value,
          resumeLink: resumeDownloadUrl, // Send link instead of file
        };

        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            emailParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Your application has been submitted!');

            // Clear the form after successful submission
            form.current.reset(); // Reset the form fields
          })
          .catch((error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send application. Please try again.');
          });
      } else {
        alert('Failed to upload resume. Please try again.');
      }
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative mb-7">
        <img src={storeimg} alt="Large Screen Image" className="block w-full" />
      </div>
      <div className="m-4 p-4">
        <h1 className="text-4xl mb-4 font-bold">Careers</h1>
        <p className="text-lg">
          We are looking for like-minded talents to join our growing family. We
          are in the process of expanding Al Madina Group across the UAE. Want
          to join our team? Feel free to apply.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center px-8 py-16 md:flex-row md:px-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={joinimg}
            alt="Office Environment"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full mt-8 md:w-1/2 md:mt-0 md:ml-10 text-center">
          <h2 className="text-3xl font-semibold italic text-gray-800">
            Why Join Us?
          </h2>
          <p className="mt-4 text-lg italic text-gray-600 leading-relaxed">
            We’re a team that feels like a growing family, sharing strong values
            of teamwork, learning, and growth. We are in the process of
            expanding Al Madina Group across the UAE. If you’d like to be part
            of that, then please get in touch. We’re always open to meet new
            people and have light-hearted conversations.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Grow With Us:-
          </h3>
          <p className="text-gray-600 mb-8">
            You’ll receive all the training, development, and support you need
            to succeed in our dynamic environment – with great benefits and
            opportunities to progress.
          </p>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
        </div>
      </div>
    </div>
  );
}
