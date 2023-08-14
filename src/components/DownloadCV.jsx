import { Download } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function DownloadPage({ rootElementId, downloadFileName, title }) {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      console.log(imgData)
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      pdf.save(downloadFileName);
    });
  };
  return (
    <IconButton sx={{ color: "white" }} aria-label={`star ${title}`} onClick={downloadFileDocument}>
      <Download />
    </IconButton>
  );
}

export default DownloadPage;

