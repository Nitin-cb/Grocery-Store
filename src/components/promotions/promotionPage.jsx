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
          width={350}
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    if (windowWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isMobile = windowWidth < 768;

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 bg-gray-200 text-gray-800"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Left Side - PDF Thumbnails */}
      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } transition-transform duration-300 ease-in-out`
            : 'w-1/5 bg-gray-100'
        } h-full flex flex-col items-center overflow-y-auto py-4 custom-scrollbar`}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-950">Promotions</h2>
        <div className="flex items-center flex-col space-y-4">
          {pdfFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handlePdfSelect(file)}
            >
              <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  pageNumber={1}
                  width={150}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - PDF Viewer */}
      <div className="w-full h-full flex flex-col items-center justify-center bg-white overflow-y-auto">
        {/* Banner Section */}
        <div className="text-center top-0 p-4">
          <p className="text-gray-500 text-sm">
            Scroll through the pages to discover our latest promotions!
          </p>
        </div>

        {/* HTMLFlipBook for the selected PDF */}
        <HTMLFlipBook
          width={isMobile ? 300 : 400}
          height={isMobile ? 450 : 550}
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
              width={isMobile ? 300 : 400}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        )}
      </div>
    </div>
  );
}

export default PromotionPage;
