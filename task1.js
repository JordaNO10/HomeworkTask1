// Import the necessary modules from the 'fs' package for file operations
// and 'path' for handling file paths.
const { readFile, writeFile } = require("fs").promises; // Use promises API for asynchronous file operations.
const path = require("path"); // Import path module to work with file and directory paths.

// Define the directory path where the input files are located.
const dirPath = path.join(__dirname, "/texts");

// Asynchronous function to read from input files and write to an output file.
const writeToFile = async () => {
  try {
    console.log("Starting Copy"); // Log the start of the process.

    // Read the content of each file asynchronously.
    const first = await readFile(`${dirPath}/input1.txt`, "utf8");
    const second = await readFile(`${dirPath}/input2.txt`, "utf8");
    const third = await readFile(`${dirPath}/input3.txt`, "utf8");

    // Split the content of each file into an array of lines.
    const firstLines = first.split("\n");
    const secondLines = second.split("\n");
    const thirdLines = third.split("\n");

    // Initialize an array to hold the lines that will be written to the output file.
    const linesToWrite = [];

    // Initialize a temporary result variable to store the combined lines.
    let tempResult = "";

    const linesToCopy = 1; // Number of lines to copy from each file.

    // Loop to copy lines based on the current index.
    for (let i = 0; i < linesToCopy; i++) {
      // Push lines from the first input based on the current index.
      linesToWrite.push(firstLines[i]); // Add line from first input

      // Push lines from the second input based on the current index.
      linesToWrite.push(secondLines[i]); // Add line from second input

      // Push lines from the third input based on the current index.
      linesToWrite.push(thirdLines[i]); // Add line from third input
    }

    // Combine the chosen lines into a single string, separating them with newline characters.
    tempResult = linesToWrite.join("\n");

    // Write the combined result to a new output file asynchronously.
    await writeFile(`${dirPath}/output.txt`, tempResult);

    console.log("End Of Copying"); // Log completion of the task.
  } catch (err) {
    console.error(err); // Log any errors that occur during file operations.
  }
};

// Log the start of the next task and call the function to execute it.
writeToFile();
