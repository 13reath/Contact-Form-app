# 📬 Contact Form

## Live Demo

Check out the live app: [Contact Form](https://13reath.github.io/contact-form/)

## Screenshot

### Desktop Version

![Desktop Version](./public/design/desktop-preview.jpg)

## Technologies Used

-   React
-   TypeScript
-   Vite
-   Tailwind CSS v4
-   GitHub Pages (for deployment)

## Deployment

1. Make sure your `vite.config.ts` includes the correct base path:
    ```ts
    export default defineConfig({
      base: "/contact-form/",
      ...
    });
    ```
2. Deploy the project using:
    ```bash
    npm run deploy
    ```

---

## Overview

Contact Form is a fully functional, accessible contact form built with modern web technologies. Features a clean, responsive design with custom validation, smooth animations, and a professional user experience that works seamlessly across all devices.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Development Process](#development-process)
-   [Challenges and Solutions](#challenges-and-solutions)
-   [Future Improvements](#future-improvements)
-   [Contributing](#contributing)

## Features

-   Fully typed with TypeScript for type safety
-   Responsive design for all screen sizes (320px - 1440px+)
-   Form validation with required fields
-   Custom radio buttons and checkbox styling
-   Smooth hover and focus animations
-   Clean component architecture with proper separation of concerns
-   Custom color scheme with HSL values
-   Karla font from Google Fonts
-   Accessible form labels and inputs

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/contact-form.git
    ```
2. Navigate to the project directory:
    ```bash
    cd contact-form
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

-   Fill in all required fields marked with \*
-   Select a query type (General Enquiry or Support Request)
-   Write your message in the text area
-   Check the consent checkbox
-   Submit the form to see success message

## Project Structure

```
contact-form/
├── public/                      # Static assets and screenshots
├── src/
│   ├── components/
│   │   ├── ui/                 # Base reusable components
│   │   │   ├── Label.tsx
│   │   │   ├── TextInput.tsx
│   │   │   ├── RadioButton.tsx
│   │   │   └── Button.tsx
│   │   ├── form/               # Form-specific composite components
│   │   │   ├── InputSection.tsx
│   │   │   ├── QuerySection.tsx
│   │   │   ├── MessageSection.tsx
│   │   │   └── ConsentCheckbox.tsx
│   │   └── layout/             # Layout wrapper components
│   │       ├── PageLayout.tsx
│   │       ├── FormContainer.tsx
│   │       └── FormHeader.tsx
│   ├── types/
│   │   └── form.types.ts       # TypeScript interfaces
│   ├── App.tsx                 # Main component with form logic
│   ├── main.tsx                # App entry point
│   └── index.css               # Tailwind CSS with custom theme
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
└── README.md
```

## Development Process

-   Initialized project with Vite + React + TypeScript
-   Configured Tailwind CSS v4 with custom theme using @theme directive
-   Built component architecture following separation of concerns:
    -   **ui/**: Base presentational components without business logic
    -   **form/**: Composite components specific to the contact form
    -   **layout/**: Structural wrapper components
-   Implemented fully typed form state management with TypeScript
-   Created responsive design with mobile-first approach
-   Added smooth transitions and hover effects for better UX
-   Optimized component structure to prevent unnecessary re-renders

## Challenges and Solutions

### TypeScript Integration

**Problem**: Managing form state types across multiple components.  
**Solution**: Created centralized `form.types.ts` with `FormData` interface, ensuring type safety throughout the application.

### Component Architecture

**Problem**: Avoiding component re-creation and prop drilling.  
**Solution**: Extracted all components outside of App, passed data through props, and organized by responsibility (ui/form/layout).

### Controlled Inputs

**Problem**: Handling different input types (text, radio, checkbox, textarea) with one handler.  
**Solution**: Created unified `handleChange` function that checks input type and updates state accordingly.

### Responsive Design

**Problem**: Making form layout adapt from single column (mobile) to two columns (desktop).  
**Solution**: Used Tailwind's `sm:` breakpoint with flexbox for First/Last Name fields.

### Custom Styling with Tailwind v4

**Problem**: Implementing custom color palette and fonts in new Tailwind syntax.  
**Solution**: Used `@theme` directive in CSS with HSL color values and imported Google Fonts.

### Focus States

**Problem**: Default browser focus outlines not matching design.  
**Solution**: Implemented custom `focus:outline-none focus:border-green-600` states for all inputs.

## Future Improvements

-   Add custom form validation with error messages
-   Implement form submission to backend API
-   Add loading state during form submission
-   Include success/error toast notifications
-   Add keyboard navigation enhancements
-   Implement form field auto-save to localStorage
-   Add unit tests with Vitest and React Testing Library
-   Improve accessibility with ARIA labels and screen reader support
-   Add animation for form submission success
-   Implement form analytics tracking

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature
    ```
5. Open a Pull Request

---
