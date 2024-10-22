import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import { Menu } from 'lucide-react';

import pdf1 from '/assets/BACK TO SCHOOL __AL MADINA SUPERMARKET GURFA_compressed.pdf';
import pdf2 from '/assets/MEGASALEALMADINA TWIN TOWER.pdf';
import pdf3 from '/assets/EXPRESS AL MADINA SUPERMARKET.pdf';
import pdf4 from '/assets/AL MADINA SUPERMARKET GURFA.pdf';
import pdf5 from '/assets/AL MADINA BRANCH.pdf';
import pdf6 from '/assets/AL MADINA BDIYA.pdf';
import pdf7 from '/assets/AL MADINA  DIBBA.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Pages = React.forwardRef(({ file, number, onLoadSuccess }, ref) => {
  return (
    <div ref={ref} className="relative bg-white p-4 shadow-lg rounded-md">
      <Document file={file} onLoadSuccess={onLoadSuccess}>
        <Page
          pageNumber={number}
          width={400}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
      <p className="text-sm text-gray-500 text-center mt-2">Page {number}</p>
    </div>
  );
});

Pages.displayName = 'Pages';

function PromotionPage() {
  const [numPages, setNumPages] = useState(0);
  const [currentPdf, setCurrentPdf] = useState(pdf1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const pdfFiles = [pdf1, pdf2, pdf3, pdf4, pdf5, pdf6, pdf7];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handlePdfSelect = (file) => {
    setCurrentPdf(file);
    setNumPages(0);
    setIsModalOpen(true); // Open the modal on PDF selection
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNumPages(0); // Reset pages when closing
  };

  const isMobile = windowWidth < 768;

  return (
    <div className=" flex flex-col items-center bg-gray-100">
      {/* Banner Section */}
      <div className="text-center p-4">
        <p className="text-gray-500 text-sm">
          Click on a card to discover our latest promotions!
        </p>
      </div>

      {/* Horizontal Card Display */}
      <div className="flex overflow-x-auto w-8/12 gap-8 p-4 flex-wrap justify-center items-center">
        {pdfFiles.map((file, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-60 mt-3 cursor-pointer hover:scale-105 transition-transform bg-white rounded-lg shadow-md p-2"
            onClick={() => handlePdfSelect(file)}
          >
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={1}
                width={225}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
            <p className="text-center mt-2 text-gray-800">PDF {index + 1}</p>
          </div>
        ))}
      </div>

      {/* Modal for PDF Flipbook */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button className="absolute top-2 right-2" onClick={closeModal}>
              &times; {/* Close button */}
            </button>
            <HTMLFlipBook
              width={isMobile ? 450 : 420}
              height={isMobile ? 580 : 580}
              className="shadow-xl rounded-md overflow-hidden"
            >
              {[...Array(numPages).keys()].map((pNum) => (
                <Pages
                  key={pNum}
                  file={currentPdf}
                  number={pNum + 1}
                  onLoadSuccess={onDocumentLoadSuccess}
                />
              ))}
            </HTMLFlipBook>

            {/* Loading Document */}
            {numPages === 0 && (
              <Document file={currentPdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  pageNumber={1}
                  width={isMobile ? 200 : 400}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PromotionPage;
