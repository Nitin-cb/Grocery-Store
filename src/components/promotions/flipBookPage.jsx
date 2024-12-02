import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';

// Import your PDFs
import pdf1 from '/assets/BACK TO SCHOOL __AL MADINA SUPERMARKET GURFA_compressed.pdf';
import pdf2 from '/assets/MEGASALEALMADINA TWIN TOWER.pdf';
import pdf3 from '/assets/EXPRESS AL MADINA SUPERMARKET.pdf';
import pdf4 from '/assets/AL MADINA SUPERMARKET GURFA.pdf';
import pdf5 from '/assets/AL MADINA BRANCH.pdf';
import pdf6 from '/assets/AL MADINA BDIYA.pdf';
import pdf7 from '/assets/AL MADINA  DIBBA.pdf';
import backgroundImage from '/images/homebg/flipbook.jpg';

const pdfFiles = {
  'back-to-school': {
    name: 'Back To School AL Madina Supermarket Gurfa',
    file: pdf1,
  },
  'mega-sale': { name: 'Mega Sale AL Madina Twin Tower', file: pdf2 },
  'express-supermarket': { name: 'Express AL Madina Supermarket', file: pdf3 },
  'al-madina-gurfa': { name: 'AL Madina Supermarket Gurfa', file: pdf4 },
  'al-madina-branch': { name: 'AL Madina Branch', file: pdf5 },
  'al-madina-bdiya': { name: 'AL Madina Bdiya', file: pdf6 },
  'al-madina-dibba': { name: 'AL Madina Dibba', file: pdf7 },
};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfFlipBookView() {
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(400);
  const [isMobile, setIsMobile] = useState(false);
  const { pdfId } = useParams();
  const navigate = useNavigate();

  const currentPdfFile = pdfFiles[pdfId]?.file;

  useEffect(() => {
    if (!currentPdfFile) {
      navigate('/promotions');
      return;
    }

    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileView = width < 768;
      setIsMobile(isMobileView);
      setPageWidth(isMobileView ? width * 0.9 : Math.min(width * 0.5, 400));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPdfFile, navigate]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const getFlipBookHeight = () => {
    const height = pageWidth * 1.5;
    return Math.min(height, window.innerHeight * 0.9);
  };

  return (
    <div
      className="bg-gray-100 flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust to 'contain' if you want the full image visible
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-4xl">
        <button
          onClick={() => navigate('/promotions')}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Promotions
        </button>
        <div
          className="w-full flex justify-center items-center"
          style={{
            height: isMobile ? '65vh' : '100vh',
            padding: isMobile ? '5px' : '10px',
            backgroundColor: '#f3f4f6',
          }}
        >
          {numPages > 0 && currentPdfFile ? (
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
                <div key={pNum} className="flex justify-center items-center">
                  <Document
                    file={currentPdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page
                      pageNumber={pNum + 1}
                      width={pageWidth}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  </Document>
                </div>
              ))}
            </HTMLFlipBook>
          ) : (
            <div className="flex justify-center items-center w-full">
              <Document
                file={currentPdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
              >
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
      </div>
    </div>
  );
}

export default PdfFlipBookView;
