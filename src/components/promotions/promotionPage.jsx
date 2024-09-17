import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '/BACK TO SCHOOL __AL MADINA SUPERMARKET GURFA_compressed.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pages = React.forwardRef((props, ref) => {
  return (
    <div 
      ref={ref}
      className="relative bg-white p-4 shadow-lg rounded-md "
    >
      <Document file={pdf} onLoadSuccess={props.onLoadSuccess}>
        <Page pageNumber={props.number} width={350} renderAnnotationLayer={false} renderTextLayer={false} />
      </Document>
      <p className="text-sm text-gray-500 text-center mt-2">Page {props.number}</p>
    </div>
  );
});

Pages.displayName = 'Pages';

function PromotionPage() {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 tracking-wider">
         Promotion
      </h1>
      <HTMLFlipBook
        width={400}
        height={550}
        className="shadow-xl rounded-md overflow-hidden "
      >
        {
          [...Array(numPages).keys()].map((pNum) => (
            <Pages key={pNum} number={pNum + 1} onLoadSuccess={onDocumentLoadSuccess} />
          ))
        }
      </HTMLFlipBook>

      {/* Footer or Additional Info */}
      <p className="mt-6 text-gray-600 text-sm">
        Scroll through the pages to discover our latest promotions!
      </p>
    </div>
  );
}

export default PromotionPage;
