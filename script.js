document.querySelector("button").addEventListener("click", () => {
  let note_text =
    "📌" + document.querySelector("textarea").value.substring(0, 200);
  if (document.querySelector("textarea").value.length > 200)
    note_text += " ...";

  const note = document.createElement("div");
  const note_color = document.querySelector("input").value;
  note.style.backgroundColor = note_color;
  note.style.color = pickTextColorBasedOnBgColorSimple(
    note_color,
    "#ffffff",
    "#000000"
  );
  note.classList.add("note");
  note.innerHTML =
    note_text +
    "<span class='delete' onclick='deleteItem(event)'>&#10008;</span>";
  document.querySelector(".note-container").appendChild(note);
});

function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
  var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
}

function deleteItem(event) {
  const note = event.target.parentElement;
  note.parentElement.removeChild(note);
}