export const questions = {
    Easy: [
      {
        question: "What is a Strobogrammatic Number?",
        options: [
          "A number that remains the same when rotated 180 degrees",
          "A prime number",
          "A number that can be divided by 2",
          "A number that is the same forwards and backwards"
        ],
        correct: 0,
        explanation: "Strobogrammatic numbers appear the same when rotated 180 degrees. For example, 69, 88, and 818."
      },
      {
        question: "What does a Moving Average from Data Stream do?",
        options: [
          "Calculates the total sum of a data stream",
          "Calculates the max value in a window",
          "Calculates the average of the most recent values in a stream",
          "Sorts the data stream"
        ],
        correct: 2,
        explanation: "It maintains the average of the latest N values as new data comes in."
      },
      {
        question: "What is the goal of the Sentence Similarity problem?",
        options: [
          "Count the number of similar words",
          "Determine if two sentences are exactly the same",
          "Check if two sentences are similar based on word-level similarity",
          "Translate a sentence to another language"
        ],
        correct: 2,
        explanation: "The problem checks whether two sentences are similar using word similarity pairs."
      }
    ],
  
    Medium: [
      {
        question: "What is the Shortest Way to Form a String problem about?",
        options: [
          "Finding the shortest substring of a string",
          "Merging two strings",
          "Finding how many subsequences of a source can form the target string",
          "Sorting characters of a string"
        ],
        correct: 2,
        explanation: "It asks how many times you need to scan the source string to form the target using subsequences."
      },
      {
        question: "What’s the main idea behind the Campus Bikes problem?",
        options: [
          "Maximizing bike rentals",
          "Assigning bikes to workers based on shortest distance",
          "Sorting bikes by speed",
          "Grouping bikes by location"
        ],
        correct: 1,
        explanation: "Assign each worker the closest available bike based on Manhattan distance."
      },
      {
        question: "What does 'Longest Substring with At Most Two Distinct Characters' ask?",
        options: [
          "Find the longest substring with exactly two vowels",
          "Find the longest substring with at most two distinct characters",
          "Find the shortest string with two unique characters",
          "Remove all duplicate characters from string"
        ],
        correct: 1,
        explanation: "You need to find the length of the longest substring containing at most 2 distinct characters."
      }
    ],
  
    Hard: [
      {
        question: "What does Range Sum Query 2D - Mutable allow you to do?",
        options: [
          "Only calculate sum of a 2D matrix",
          "Modify values and calculate submatrix sum efficiently",
          "Sort a 2D matrix",
          "Transpose a matrix"
        ],
        correct: 1,
        explanation: "It allows both updates to elements and efficient submatrix sum queries using advanced data structures."
      },
      {
        question: "What is Confusing Number II about?",
        options: [
          "Finding confusing numbers below a certain value",
          "Checking if a number is prime",
          "Converting numbers to binary",
          "Counting palindromes in a range"
        ],
        correct: 0,
        explanation: "It counts numbers that look different when rotated 180 degrees, under a given limit."
      },
      {
        question: "What is the goal of Minimum Window Subsequence?",
        options: [
          "Find the smallest substring of S that contains all characters of T in order",
          "Find the longest repeating subsequence",
          "Remove all vowels from a string",
          "Find the minimum number of operations to convert string"
        ],
        correct: 0,
        explanation: "You're trying to find the minimum window in string S where T appears as a **subsequence**."
      }
    ]
  };
  