# 🟩 Skip Selection Redesign – React Responsive Stepper

## 📌 Project Overview

This project is a responsive redesign of the skip selection page from [wewantwaste.co.uk](https://wewantwaste.co.uk/). The goal was to enhance the user interface and experience while maintaining the original functionality, ensuring optimal performance across both desktop and mobile devices.

## 🎯 Challenge Brief

- **Objective**: Redesign the skip selection interface for improved usability and aesthetics.
- **Data Source**: [Skip Options API](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)
- **Requirements**:
  - Maintain existing functionality.
  - Ensure responsiveness for mobile and desktop.
  - Implement a multi-step form with clear navigation.

## 🧩 Component Breakdown

### 1. `StepperHead`

- **Desktop View**:
  - Displays step icons with labels in a horizontal layout.
  - Highlights the active step.
- **Mobile View**:
  - Shows a progress circle indicating the current step.
  - Displays the step label adjacent to the progress indicator.

### 2. `CardList`

- Fetches skip options from the provided API.
- Displays skip cards with relevant details:
  - Size
  - Price per day
  - Total cost (including VAT and transport)
- Highlights the selected skip.
- Calculates and updates the total price upon selection.

### 3. `StepperFooter`

- **Functionality**:
  - Shows selected skip size and total cost on step 2.
  - Provides 'Back' and 'Continue' buttons for navigation.
- **Responsive Design**:
  - **Desktop**: Buttons aligned side by side.
  - **Mobile**: 'Back' button aligned left; 'Continue' button aligned right.

## 📱 Responsive Design

- Utilized Tailwind CSS for rapid and efficient styling.
- Ensured components adapt seamlessly to various screen sizes.
- Implemented conditional rendering and styling for mobile and desktop views.

##  Live Demo: https://codesandbox.io/p/github/prototype0104/remwaste/main
