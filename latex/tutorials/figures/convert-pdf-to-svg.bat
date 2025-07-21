$files = Get-ChildItem *.pdf
foreach ($file in $files) { pdf2svg $file.FullName ($file.BaseName.ToString() + ".svg") }