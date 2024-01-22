const generateUniqueId = (length = 5) => {
  if (length <= 0) {
    throw new Error("Length must be greater than 0");
  }

  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let uniqueId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueId += characters[randomIndex];
  }

  return uniqueId;
};

export { generateUniqueId };
