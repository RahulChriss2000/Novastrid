import * as XLSX from 'xlsx';

interface ChatMessage{
    userId: string,
    message: string,
    timestamp: number,
    status: string
}

export const parseExcelFile = (filePath: string): ChatMessage[]=> {
    const workbook = XLSX.readFile(filePath);
    const sheetName= workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = ChatMessage[] = XLSX.utils.sheet_to_json(sheet);
    
    return jsonData.filter((row: any)=>{
        return row.userId && row.message && row.timestamp && row.status
    }).map((row:any)=>({
        userId: row.unique,
    message: row.message,
timestamp: new Date(row.timestamp).toISOString(),
status: row.status|| 'pending,'
}))
};