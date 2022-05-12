# Add row values to Google Sheets from csv
This repo is GAS project for Google Sheet Function which enable to add values to row from csv 

# Problem
When you would like to import data to Google Sheet form csv, you often use `importData` Function.
But, this function is not useful when you would like to import big data because of causing maximum size error.

# Solution
This GAS script enable to import data and write value down to sheet.
also, you can set key in order to disable duplicating.

# Usage
1. index sheet

set these values to A - C column on index sheet
- SheetName
- Csv url 
- keyColumnIndex

<img width="346" alt="スクリーンショット 2022-05-12 15 54 19" src="https://user-images.githubusercontent.com/47712031/168009804-4d796984-cec8-4ba4-a528-f135a8587d48.png">

2. make sheet 
 
Create a sheet with the same name as described in the index sheet.

3. run main function

You can confirm write csv's values down to the sheet.
