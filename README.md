# Secure Password Generator
This project is a password generator using HTML, CSS, and JavaScript to create secure passwords based on criteria.  Users can choose the types of characters to include in the password, as well as the length of the password. The code will check for a valid length (between 8 and 128 characters) and will validate that at least one type of character has been chosen. Then the password will be generated and displayed on the page. 

Styling is responsive and uses the Bootstrap CSS framework. To prompt the user for password criteria, a form was created that allows the user to input the length into a field, and checkboxes to indicate which types of characters to include in the password.

## Deployed site

View the Secure Password Generator at: https://tiffany-brand.github.io/secure-password-generator/


## Requirements

### User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Screenshots

![password-generator-screen](https://user-images.githubusercontent.com/16748389/86188829-dde59100-bb0d-11ea-9af0-22cd2166d3c1.JPG)

![password-generator-screen-2](https://user-images.githubusercontent.com/16748389/86188925-1c7b4b80-bb0e-11ea-9b41-584b8b1077f9.JPG)