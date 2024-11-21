import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';

import pdf1 from '/assets/BACK TO SCHOOL __AL MADINA SUPERMARKET GURFA_compressed.pdf';
import pdf2 from '/assets/MEGASALEALMADINA TWIN TOWER.pdf';
import pdf3 from '/assets/EXPRESS AL MADINA SUPERMARKET.pdf';
import pdf4 from '/assets/AL MADINA SUPERMARKET GURFA.pdf';
import pdf5 from '/assets/AL MADINA BRANCH.pdf';
import pdf6 from '/assets/AL MADINA BDIYA.pdf';
import pdf7 from '/assets/AL MADINA  DIBBA.pdf';
import { useNavigate } from 'react-router';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Pages = React.forwardRef(
  ({ file, number, onLoadSuccess, pageWidth }, ref) => {
    return (
      <div ref={ref} className="relative bg-white shadow-lg rounded-md">
        <Document file={file} onLoadSuccess={onLoadSuccess}>
          <Page
            pageNumber={number}
            width={pageWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
        <p className="text-sm text-gray-500 text-center mt-2">Page {number}</p>
      </div>
    );
  }
);

Pages.displayName = 'Pages';

function PromotionPage() {
  const [numPages, setNumPages] = useState(0);
  // const [currentPdf, setCurrentPdf] = useState(pdf1);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [pageWidth, setPageWidth] = useState(400);
  // const [isMobile, setIsMobile] = useState(false);

  const pdfFiles = [
    { name: 'Back To School AL Madina Supermarket Gurfa', file: pdf1 },
    { name: 'Mega Sale AL Madina Twin Tower', file: pdf2 },
    { name: 'Express AL Madina Supermarket', file: pdf3 },
    { name: 'AL Madina Supermarket Gurfa', file: pdf4 },
    { name: 'AL Madina Branch', file: pdf5 },
    { name: 'AL Madina Bdiya', file: pdf6 },
    { name: 'AL Madina Dibba', file: pdf7 },
  ];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const navigate = useNavigate();

  const handlePdfSelect = (pdfKey) => {
    navigate(`/pdf/${pdfKey}`);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
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
            onClick={() => handlePdfSelect('back-to-school')} // Use corresponding key
          >
            <Document file={file.file} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={1}
                width={225}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
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
