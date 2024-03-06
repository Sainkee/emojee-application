let textValue = document.getElementById("textInput");
let tb = document.querySelector(".display");
let nav = document.querySelector(".navbar");

window.onload = displayData(emojiList);

function displayData(query) {
  tb.innerHTML = "";
  query.forEach((data) => {
    let emojiSpan = document.createElement("span");
    emojiSpan.textContent = data.emoji;
    emojiSpan.classList.add("pr-5");
    emojiSpan.classList.add("emojeeList");
    tb.appendChild(emojiSpan);
  });
}
nav.addEventListener("click", function (e) {
  filterData(e.target.innerText);
});
textValue.addEventListener("input", function (e) {
  filterData(e.target.value);
});

function filterData(value) {
  value = value.toLowerCase();
  let res = emojiList.filter((ele) => {
    return (
      ele.description.toLowerCase().includes(value) ||
      ele.aliases.some((alias) => alias.toLowerCase().includes(value)) ||
      ele.tags.some((tag) => tag.toLowerCase().includes(value))
    );
  });

  displayData(res);
}

tb.addEventListener("click", (e) => {
  let val = e.target.innerText;
  navigator.clipboard.writeText(val);
  Toastify({
    text: "emojee copied   ",
    className: "info",
    close: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
});
