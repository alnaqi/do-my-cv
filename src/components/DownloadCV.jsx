import { Download } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import html2canvas from "html2canvas";
import jspdf, { jsPDF } from "jspdf";

function DownloadPage({ rootElementId, downloadFileName, title }) {

  const downloadFileDocument = () => {
    var data = document.getElementById(rootElementId);
    html2canvas(data).then(canvas => {
      const contentdataurl = canvas.toDataURL('image/png')
      var margin = 2;
      var imgwidth = 210 - 2 * margin;
      var pageheight = 295;
      var imgheight = canvas.height * imgwidth / canvas.width;
      var heightleft = imgheight;

      var doc = new jsPDF('p', 'mm');
      var position = 0;

      doc.addImage(contentdataurl, 'png', margin, position, imgwidth, imgheight, '', 'FAST');

      heightleft -= pageheight;

      while (heightleft >= 0) {
        position = heightleft - imgheight;
        doc.addPage();
        doc.addImage(contentdataurl, 'png', margin, position, imgwidth, imgheight, '', 'FAST');
        heightleft -= pageheight;
      }
      doc.save(downloadFileName);
    })
  }



  // const downloadFileDocument = () => {
  //   const input = document.getElementById(rootElementId);
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/jpeg", 0.98);
  //     console.log(imgData)
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
  //     pdf.save(downloadFileName);
  //   });
  // };
  return (
    <IconButton sx={{ color: "white" }} aria-label={`star ${title}`} onClick={downloadFileDocument}>
      <Download />
    </IconButton>
  );
}

export default DownloadPage;

