import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useNavigate } from 'react-router';

import pdf1 from '/assets/BACK TO SCHOOL __AL MADINA SUPERMARKET GURFA_compressed.pdf';
import pdf2 from '/assets/MEGASALEALMADINA TWIN TOWER.pdf';
import pdf3 from '/assets/EXPRESS AL MADINA SUPERMARKET.pdf';
import pdf4 from '/assets/AL MADINA SUPERMARKET GURFA.pdf';
import pdf5 from '/assets/AL MADINA BRANCH.pdf';
import pdf6 from '/assets/AL MADINA BDIYA.pdf';
import pdf7 from '/assets/AL MADINA  DIBBA.pdf';
import pdf1Thumbnail from '/assets/thumbnails/pdf1.jpg';
import pdf2Thumbnail from '/assets/thumbnails/pdf2.jpg';
import pdf3Thumbnail from '/assets/thumbnails/pdf3.jpg';
import pdf4Thumbnail from '/assets/thumbnails/pdf4.jpg';
import pdf5Thumbnail from '/assets/thumbnails/pdf5.jpg';
import pdf6Thumbnail from '/assets/thumbnails/pdf6.jpg';
import pdf7Thumbnail from '/assets/thumbnails/pdf7.jpg';
import backgroundImage from '/images/homebg/promotionpage.jpg';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PromotionPage() {
  const pdfFiles = [
    {
      title: 'back-to-school',
      name: 'Back To School AL Madina Supermarket Gurfa',
      file: pdf1,
      thumbnail: pdf1Thumbnail,
    },
    {
      title: 'mega-sale',
      name: 'Mega Sale AL Madina Twin Tower',
      file: pdf2,
      thumbnail: pdf2Thumbnail,
    },
    {
      title: 'express-supermarket',
      name: 'Express AL Madina Supermarket',
      file: pdf3,
      thumbnail: pdf3Thumbnail,
    },
    {
      title: 'al-madina-gurfa',
      name: 'AL Madina Supermarket Gurfa',
      file: pdf4,
      thumbnail: pdf4Thumbnail,
    },
    {
      title: 'al-madina-branch',
      name: 'AL Madina Branch',
      file: pdf5,
      thumbnail: pdf5Thumbnail,
    },
    {
      title: 'al-madina-bdiya',
      name: 'AL Madina Bdiya',
      file: pdf6,
      thumbnail: pdf6Thumbnail,
    },
    {
      title: 'al-madina-dibba',
      name: 'AL Madina Dibba',
      file: pdf7,
      thumbnail: pdf7Thumbnail,
    },
  ];

  const navigate = useNavigate();

  const handlePdfSelect = (pdfKey) => {
    navigate(`/pdf/${pdfKey}`);
  };

  return (
    <div
      className="flex flex-col items-center bg-gray-100 min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust to 'contain' if you want the full image visible
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center p-4">
        <p className="text-gray-500 text-sm">
          Click on a card to discover our latest promotions!
        </p>
      </div>

      <div className="flex overflow-x-auto w-8/12 gap-8 p-4 flex-wrap justify-center items-center">
        {pdfFiles.map((file, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-60 mt-3 cursor-pointer hover:scale-105 transition-transform bg-white rounded-lg shadow-md p-2"
            onClick={() => handlePdfSelect(file.title)}
          >
            <img
              src={file.thumbnail}
              alt={`${file.name} Thumbnail`}
              className="w-full h-auto rounded-md"
            />

            <p className="text-center text-sm mt-2 text-gray-600">
              {file.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromotionPage;
