function createNewPage(sectionNumber) {
  var pageTitle, pageContent;
  if (sectionNumber == 1) {
    pageTitle = "Section 1 Page";
    pageContent = "This is section 1.";
  } else if (sectionNumber == 2) {
    pageTitle = "Section 2 Page";
    pageContent = "This is section 2.";
  } else if (sectionNumber == 3) {
    pageTitle = "Section 3 Page";
    pageContent = "This is section 3.";
  } else if (sectionNumber == 4) {
    pageTitle = "Section 3 Page";
    pageContent = "This is section 4.";
  } else if (sectionNumber == 5) {
    pageTitle = "Section 3 Page";
    pageContent = "This is section 5.";
  } else if (sectionNumber == 6) {
    pageTitle = "Section 3 Page";
    pageContent = "This is section 6.";
  } else if (sectionNumber == 7) {
    pageTitle = "Section 3 Page";
    pageContent = "This is section 7.";
  } else if (sectionNumber == 8) {
    pageTitle = "Section 3 Page";
    pageContent = "This is section 8.";
  }

  var newPage = window.open('newpage.html', '_blank', 'width=390,height=844');
  newPage.document.write('<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + pageTitle + '</title></head><body>' + pageContent + '</body></html>');
}
