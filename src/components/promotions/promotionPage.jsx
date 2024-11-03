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
  const [currentPdf, setCurrentPdf] = useState(pdf1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(400);
  const [isMobile, setIsMobile] = useState(false);

  const pdfFiles = [
    { name: 'Back To School AL Madina Supermarket Gurfa', file: pdf1 },
    { name: 'Mega Sale AL Madina Twin Tower', file: pdf2 },
    { name: 'Express AL Madina Supermarket', file: pdf3 },
    { name: 'AL Madina Supermarket Gurfa', file: pdf4 },
    { name: 'AL Madina Branch', file: pdf5 },
    { name: 'AL Madina Bdiya', file: pdf6 },
    { name: 'AL Madina Dibba', file: pdf7 },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileView = width < 768;
      setIsMobile(isMobileView);

      const modalWidth = width * 0.9;

      // Set page width for different screen types
      setPageWidth(
        isMobileView ? modalWidth * 0.9 : Math.min(modalWidth * 0.4, 400)
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handlePdfSelect = (file) => {
    setCurrentPdf(file);
    setNumPages(0);
    setIsModalOpen(true);
  };

  // Calculate FlipBook height based on width to maintain aspect ratio
  const getFlipBookHeight = () => {
    const height = pageWidth * 1.5;
    return Math.min(height, window.innerHeight * 0.9);
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
            onClick={() => handlePdfSelect(file.file)}
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

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width="80%"
        centered
      >
        <div
          className="w-full h-full mt-8 flex justify-center items-center"
          style={{
            height: isMobile ? '55vh' : '85vh', // Modal height for better PDF fit
            padding: isMobile ? '5px' : '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f3f4f6',
            overflow: 'hidden',
            paddingTop: isMobile ? '15px' : '30px', // Adjust top padding to bring PDF down
          }}
        >
          {numPages > 0 ? (
            <HTMLFlipBook
              width={pageWidth}
              height={getFlipBookHeight()}
              size="stretch"
              minWidth={isMobile ? pageWidth : 300}
              maxWidth={isMobile ? pageWidth : 400}
              minHeight={400}
              maxHeight={800}
              showCover={true}
              flippingTime={1000}
              className="shadow-xl rounded-md"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {[...Array(numPages).keys()].map((pNum) => (
                <Pages
                  key={pNum}
                  file={currentPdf}
                  number={pNum + 1}
                  onLoadSuccess={onDocumentLoadSuccess}
                  pageWidth={pageWidth}
                />
              ))}
            </HTMLFlipBook>
          ) : (
            <div className="flex justify-center items-center w-full">
              <Document file={currentPdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  pageNumber={1}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default PromotionPage;
