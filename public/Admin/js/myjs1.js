window.onload = function () {
    var text = "<bookstore><book>" +
        "<bName>Gay Herry Potter</bName>" +
        "<author>Male J.K Rowling</author>" +
        "<DateofP>20/3/2019</DateofP>" +
        "</book>" +
        "<book>" +
        "<bName>First code Javasript</bName>" +
        "<author>John mathew</author>" +
        "<DateofP>25/2/2009</DateofP>" +
        "</book>" +
        "<book>" +
        "<bName>Doge 2030</bName>" +
        "<author>Shiba</author>" +
        "<DateofP>19/3/2029</DateofP>" +
        "</book></bookstore>";
    p = new DOMParser();
    doc = p.parseFromString(text, "text/xml");
    // var temp = doc.childNodes[0].childElementCount;
    var temp = doc.childNodes[0].children.length;
    for (i = 0; i < parseInt(temp); i++) {
        var book = doc.childNodes[0].childNodes[i];
        var bName = book.childNodes[0].innerHTML;
        var author = book.childNodes[1].innerHTML;
        var dateoP = book.childNodes[2].innerHTML;
        var itemBook = document.createElement("div");
        itemBook.className = "title";
        var itemBookTitle = document.createElement("div");
        itemBookTitle.innerHTML = bName;
        var itemBookAuthor = document.createElement("div");
        itemBookAuthor.innerHTML = author;
        var itemBookYear = document.createElement("div");
        itemBookYear.innerHTML = dateoP;

        itemBook.append(itemBookTitle);
        itemBook.append(itemBookAuthor);
        itemBook.append(itemBookYear);

        var content = document.getElementById("content");
        content.append(itemBook);
    }


}