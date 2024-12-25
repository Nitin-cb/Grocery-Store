import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import { BackArrowIcon, DownloadIcon } from '../../utils/icons';
// Import your PDFs
import pdf1 from '/assets/BACK TO SCHOOL __AL MADINA SUPERMARKET GURFA_compressed.pdf';
import pdf2 from '/assets/MEGASALEALMADINA TWIN TOWER.pdf';
import pdf3 from '/assets/EXPRESS AL MADINA SUPERMARKET.pdf';
import pdf4 from '/assets/AL MADINA SUPERMARKET GURFA.pdf';
import pdf5 from '/assets/AL MADINA BRANCH.pdf';
import pdf6 from '/assets/AL MADINA BDIYA.pdf';
import pdf7 from '/assets/AL MADINA  DIBBA.pdf';

const pdfFiles = {
  'back-to-school': pdf1,
  'mega-sale': pdf2,
  'express-supermarket': pdf3,
  'al-madina-gurfa': pdf4,
  'al-madina-branch': pdf5,
  'al-madina-bdiya': pdf6,
  'al-madina-dibba': pdf7,
};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
function PdfFlipBookView() {
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(400);
  const { pdfId } = useParams();
  const navigate = useNavigate();
  const currentPdfFile = pdfFiles[pdfId];

  useEffect(() => {
    if (!currentPdfFile) {
      navigate('/promotions');
      return;
    }

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPageWidth(Math.min(width * 0.9, 400)); // Adjust for mobile/tablet
      }
      // else if(width < 999) {
      //   setPageWidth(Math.min(width * 0.8, 450)); // Adjust for mobile/tablet
      // }
      else {
        setPageWidth(Math.min(width * 0.5, 500)); // Adjust for larger screens
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPdfFile, navigate]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    if (currentPdfFile) {
      const link = document.createElement('a');
      link.href = currentPdfFile;
      link.download = `${pdfId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div
      className="relative w-full h-screen"
      style={{ background: 'transparent' }}
    >
      {/* Navigation Buttons */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={() => navigate('/promotions')}
          className="flex px-2 py-1 items-center bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <BackArrowIcon />
        </button>
      </div>
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={handleDownload}
          className="px-2 py-1 flex items-center bg-green-500 text-white rounded hover:bg-green-600"
        >
          <DownloadIcon />
        </button>
      </div>

      {/* FlipBook */}
      <div className="w-full h-full flex justify-center items-center">
        {numPages > 0 && currentPdfFile ? (
          <HTMLFlipBook
            width={pageWidth}
            height={window.innerHeight * 0.9} // Adjust height for full-screen fit
            size="stretch"
            minWidth={300}
            maxWidth={500}
            minHeight={400}
            maxHeight={900}
            showCover={true}
            flippingTime={1000}
            className=" rounded-md"
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
  );
}

export default PdfFlipBookView;
