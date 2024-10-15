import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebaseConfig';
import storeimg from '/images/careers/store.jpg';
import cimg from '/images/careers/c.png';
import { motion } from 'framer-motion';

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
          jobTitle: e.target.jobTitle.value,
          description: e.target.description.value,
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
      <motion.div
        className="relative h-[500px] sm:h-[600px] lg:h-[700px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${storeimg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="text-center max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="text-green-400">
                Careers at Al Madina Hypermarket
              </span>
            </h1>
            <p className="text-white mt-4 text-base sm:text-lg lg:text-xl">
              Driven by our passion and guided by collaboration, we invite you
              to join our team.
            </p>
            <motion.button
              className="mt-6 bg-white hover:bg-green-600 text-black font-bold py-2 px-6 sm:px-8 rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Current Openings
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Why Work With Us Section */}
      <motion.div
        className="bg-white py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto p-4 sm:p-8 md:p-14">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            Join Our Dynamic Team!
          </h1>
          <p className="px-4 text-lg mb-6 leading-relaxed text-gray-700 text-center lg:text-left">
            At Al Madina Hypermarket, we believe in nurturing talent and
            creating a thriving work environment...
          </p>
          <hr />
          <h2 className="mt-6 text-2xl font-bold mb-4 text-center lg:text-left">
            Why Work with Us?
          </h2>
          <motion.div
            className="px-4 space-y-4 text-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              <span className="font-semibold">Growth Opportunities:</span> We
              prioritize promoting from within...
            </p>
            <p className="text-lg">
              <span className="font-semibold">Inclusive Environment:</span> Our
              team is a blend of diverse backgrounds...
            </p>
            <p className="text-lg">
              <span className="font-semibold">Competitive Benefits:</span> We
              offer competitive salaries...
            </p>
            <p className="text-lg">
              <span className="font-semibold">Employee Well-being:</span> We are
              dedicated to maintaining a healthy...
            </p>
          </motion.div>
          <hr className="my-6" />
          <h1 className="text-2xl font-semibold mt-6 mb-4 text-center lg:text-left">
            How to Apply?
          </h1>
          <p className="px-4 text-lg mb-6 text-gray-700 text-center lg:text-left">
            We are excited to receive your application! If you are interested in
            any of our open positions, please complete the form below...
          </p>
        </div>
      </motion.div>

      {/* Application Form Section */}
      <motion.div
        className="py-10 flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-8 lg:gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Form Container */}
        <motion.div
          className="bg-white shadow-md rounded-md p-6 w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-semibold text-center mb-8">
            Join our team and be part of an exciting work environment. Submit
            your application below!
          </h1>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Resume (PDF)
              </label>
              <input
                type="file"
                name="resume"
                accept="application/pdf"
                required
                className="mt-1 block w-full text-gray-700"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Submit Application'}
            </motion.button>
          </form>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-2/4 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img className="max-w-full h-auto" src={cimg} alt="Career" />
        </motion.div>
      </motion.div>
    </div>
  );
}
