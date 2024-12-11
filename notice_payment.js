$(document).ready(function() {
    $('#transaction-table').DataTable();
  });
  
function loadPDF(pdfPath) {
    const pdfViewer = document.getElementById('pdfViewer');
    const downloadLink = document.getElementById('downloadPDF');
  
    pdfViewer.src = pdfPath; 
    downloadLink.href = pdfPath; 
    
  }

  
