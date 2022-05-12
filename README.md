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

2. run main function

You can confirm write csv's values down to the sheet.
