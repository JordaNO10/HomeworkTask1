// Import the necessary modules from the 'fs' package for file operations and 'path' for handling file paths.
const { readFile, writeFile } = require("fs").promises; // Use promises API for asynchronous file operations.
const path = require("path"); // Import path module to work with file and directory paths.

// Define the directory path where the input files are located.
const dirPath = path.join(__dirname, "/texts");

// Asynchronous function to read from input files and write to an output file.
const writeToFile = async () => {
  try {
    console.log("start"); // Log the start of the process.

    // Read the content of each file asynchronously.
    const first = await readFile(`${dirPath}/input1.txt`, "utf8");
    const second = await readFile(`${dirPath}/input2.txt`, "utf8");
    const third = await readFile(`${dirPath}/input3.txt`, "utf8");

    // Split the content of each file into an array of lines.
    const firstLines = first.split("\n");
    const secondLines = second.split("\n");
    const thirdLines = third.split("\n");

    // Initialize an array to hold the lines that will be written to the output file.
    const linesToWrite = [
      first.split("\n")[0], // First line from the first file
      second.split("\n")[0], // First line from the second file
      third.split("\n")[0], // First line from the third file
      first.split("\n")[0], // Repeat first line from the first file
      first.split("\n")[1], // Second line from the first file
      second.split("\n")[0], // First line from the second file
      second.split("\n")[1], // Second line from the second file
      third.split("\n")[0], // First line from the third file
      third.split("\n")[1], // Second line from the third file
      ".", // Adding a separator
      ".", // Adding another separator
      ".", // Adding yet another separator
    ];

    let tempResult = ""; // Initialize a temporary result variable.

    const linesToCopy = 3; // Number of lines to copy from each file.

    // Loop to copy lines from the first file.
    for (let i = 0; i < linesToCopy; i++) {
      if (firstLines[i]) linesToWrite.push(firstLines[i]); // Add line if it exists.
    }

    // Additional loop to copy lines from the second file.
    for (let i = 0; i < linesToCopy; i++) {
      if (secondLines[i]) linesToWrite.push(secondLines[i]); // Add line if it exists.
    }

    // Additional loop to copy lines from the third file.
    for (let i = 0; i < linesToCopy; i++) {
      if (thirdLines[i]) linesToWrite.push(thirdLines[i]); // Add line if it exists.
    }

    // Combine the chosen lines into a single string, separating them with newline characters.
    tempResult = linesToWrite.join("\n");

    // Write the combined result to a new output file asynchronously.
    await writeFile(`${dirPath}/output.txt`, tempResult);

    console.log("done with this task"); // Log completion of the task.
  } catch (err) {
    console.error(err); // Log any errors that occur during file operations.
  }
};

// Log the start of the next task and call the function to execute it.
console.log("starting next task");
writeToFile();
