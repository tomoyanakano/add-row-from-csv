const main = () => {
  const indexSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("index");
  if (indexSheet == null) return;
  const lastRowIndex = indexSheet.getLastRow();
  const values = indexSheet.getRange(2, 1, lastRowIndex, 3).getValues();
  for (let i = 0; i < values.length; i++) {
    const row = values[i];
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(row[0]);
    if (sheet == null) continue;
    const data = fetchCsvData(row[1]);
    addRowFromCsv(sheet, row[2], data);
  }
};

const fetchCsvData = (url: string): string[][] => {
  const content = UrlFetchApp.fetch(url).getContentText();
  const data = Utilities.parseCsv(content);
  return data;
};

const addRowFromCsv = (
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  keyColumnIndex: number,
  data: string[][]
) => {
  const lastRowIndex = sheet.getLastRow() < 1 ? 1 : sheet.getLastRow() + 1;
  const values = sheet.getRange(1, keyColumnIndex, lastRowIndex).getValues();
  const map = new Map<string, { rowIndex: number }>();
  values.map((value, index) =>
    map.set(value[keyColumnIndex - 1], { rowIndex: index })
  );
  const newValues = [];
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const key = row[keyColumnIndex - 1];
    if (!map.has(key)) {
      newValues.push(row);
    }
  }

  if (newValues.length > 0) {
    sheet
      .getRange(lastRowIndex, 1, newValues.length, newValues[0].length)
      .setValues(newValues);
  }
  console.log(`${newValues.length} rows added!`);
};
