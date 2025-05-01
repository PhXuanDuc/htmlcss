const books = [
    "Clean Code",
    "JavaScript: The Good Parts",
    "Effective Java",
    "You Don't Know JS",
    "Introduction to Algorithms",
    "Python Crash Course",
    "HTML and CSS: Design and Build Websites"
  ];
  
  const searchInput = document.getElementById("searchInput");
  const resultList = document.getElementById("resultList");
  
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    resultList.innerHTML = "";
    const filtered = books.filter(book => book.toLowerCase().includes(keyword));
    filtered.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book;
      resultList.appendChild(li);
    });
  });
  