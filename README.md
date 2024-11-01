# Telephone Number Validator

## Description

The **Telephone Number Validator** is a web application designed to validate US phone numbers in various formats. It checks whether the provided phone number adheres to standard formats and offers appropriate feedback to the user. This project enhances user experience by allowing input through both button clicks and the Enter key.

## Features

- Input validation for US phone numbers in multiple formats.
- Alerts the user if no input is provided.
- A clear button to reset the input and results.
- Validates the following formats:
  - `1 555-555-5555`
  - `1 (555) 555-5555`
  - `5555555555`
  - `555-555-5555`
  - `(555)555-5555`
  - `1(555)555-5555`
- Provides feedback for invalid formats.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).

### Installation

1. Clone the repository or download the ZIP file.
   ```bash
   git clone https://github.com/SyntaxStrategist/Telephone-Number-Validator.git
   ```
2. Open the `index.html` file in your preferred web browser.

### Usage

1. Enter a US phone number into the input field.
2. Click the **Check** button or press the **Enter** key to validate the number.
3. If the input is valid, a confirmation message will display. If invalid, an error message will show.
4. Click the **Clear** button to reset the input and results.

## Examples

### Valid Numbers
- Input: `1 555-555-5555` ➔ Output: `Valid US number: 1 555-555-5555`
- Input: `5555555555` ➔ Output: `Valid US number: 5555555555`

### Invalid Numbers
- Input: `1 555)555-5555` ➔ Output: `Invalid US number: 1 555)555-5555`
- Input: `555-5555` ➔ Output: `Invalid US number: 555-5555`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various web validation tools.
- Special thanks to online resources and communities that support JavaScript development.
