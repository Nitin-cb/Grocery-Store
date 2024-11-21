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

// PDF mapping
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

const PdfPage = React.forwardRef(
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

PdfPage.displayName = 'PdfPage';

function PdfFlipBookView() {
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(400);
  const [isMobile, setIsMobile] = useState(false);
  const { pdfId } = useParams();
  const navigate = useNavigate();

  // Get the current PDF based on route parameter
  const currentPdfFile = pdfFiles[pdfId]?.file;

  useEffect(() => {
    // Redirect if invalid PDF ID
    if (!currentPdfFile) {
      navigate('/promotions');
      return;
    }

    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileView = width < 768;
      setIsMobile(isMobileView);

      const calculatedPageWidth = isMobileView
        ? width * 0.9
        : Math.min(width * 0.5, 400);

      setPageWidth(calculatedPageWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPdfFile, navigate]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Calculate FlipBook height based on width to maintain aspect ratio
  const getFlipBookHeight = () => {
    const height = pageWidth * 1.5;
    return Math.min(height, window.innerHeight * 0.9);
  };

  return (
    <div className=" bg-gray-100  flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <button
          onClick={() => navigate('/promotions')}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Promotions
        </button>

        <div
          className="w-full flex justify-center h-screen items-center"
          style={{
            height: isMobile ? '65vh' : '100vh',
            padding: isMobile ? '5px' : '10px',
            backgroundColor: '#f3f4f6',
            overflow: 'hidden',
            // paddingTop: isMobile ? '8px' : '30px',
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
                <PdfPage
                  key={pNum}
                  file={currentPdfFile}
                  number={pNum + 1}
                  onLoadSuccess={onDocumentLoadSuccess}
                  pageWidth={pageWidth}
                />
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
