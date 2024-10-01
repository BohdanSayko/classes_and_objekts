let book = {
    title: "Da Vinchi Code",
    author: "Den Braun",
    year: 2003,
    getSummary: function () {
        alert("title: " + this.title + " author: " + this.author + " year: " + this.year);
    }
};

book.year = +prompt("Enter year: ");
book.getSummary();