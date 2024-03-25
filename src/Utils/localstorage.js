export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("donation")) || [];
  const existData = savedData.find((item) => item.id == data.id);
  if (!existData) {
    savedData.push(data);
    localStorage.setItem("donation", JSON.stringify(savedData));
    alert("added");
  } else {
    alert("exist");
  }
};

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("donation")) || [];
  return data;
};
