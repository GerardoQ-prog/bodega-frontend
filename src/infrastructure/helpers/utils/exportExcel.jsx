import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

export const exportToCSVProducts = ({ data, name }) => {
  let exportData = [];
  if (data !== []) {
    data.forEach((item) => {
      let object = {
        NOMBRE: item.name,
        CATEGORIA: item.categoryName,
        PRECIO: item.price,
        CANTIDAD: item.quantity,
      };
      exportData.push(object);
    });
  }
  const ws = XLSX.utils.json_to_sheet(exportData);
  const wb = {
    Sheets: { Listado_General: ws },
    SheetNames: ["Listado_General"],
  };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const dataExcel = new Blob([excelBuffer], { type: fileType });
  const fileName = name;
  FileSaver.saveAs(dataExcel, fileName + fileExtension);
};
